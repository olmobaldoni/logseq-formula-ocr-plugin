import "@logseq/libs"
import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin';

//https://huggingface.co/Norm/nougat-latex-base


const settingsSchema: SettingSchemaDesc[] = [
    {
        key: "HuggingFace User Access Token",
        type: "string",
        default: "",
        title: "HuggingFace User Access Token",
        description:
            "https://huggingface.co/docs/hub/security-tokens",
    }
]



async function query(data: any) {

  const access_token = logseq.settings!["HuggingFace User Access Token"]
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Norm/nougat-latex-base", 
    {
      headers: { Authorization: `Bearer ${access_token}`},
      method: "POST",
      body: data,
    }
  );

  const result = await response.json();

  // If there is an error, wait for the estimated time and retry
  if (result.error) {
    console.log('error: ', result.error);
    console.log('estimated_time: ', result.estimated_time);

    // Convert the estimated_time from seconds to milliseconds
    const waitTime = result.estimated_time * 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(query(data));
      }, waitTime);
    });
  }
  
  // If there is no error, return the result
  console.log('result: ',result);
  console.log('result[0].generated_text: ', result[0].generated_text);
  return result[0].generated_text;
}

async function formula_ocr() {
  try {
    // Necessary to focus the window before reading the clipboard
    window.focus();

    const clipboardItem = await navigator.clipboard.read()
    if (!clipboardItem) {
      console.error('Nessun elemento negli appunti')
      return
    }
    console.log('Clipboard item: ', clipboardItem)
    const data = await clipboardItem[0].getType('image/png').catch(err => {
      throw new Error('Clipboard item is not an image')
    })
    console.log('Clipboard data: ', data)

    const ocrResult = await query(data)
    return ocrResult
  } catch (err) {
    logseq.UI.showMsg('Reading image failed: ' + err, 'error')
  }
}

async function main() {

    logseq.useSettingsSchema(settingsSchema);
    
    logseq.Editor.registerSlashCommand(
        'formula-ocr', 
        async () => {
            const text = await formula_ocr()
            const latexText = `$$${text}$$`;
            await logseq.Editor.insertAtEditingCursor(latexText)
        },
        )
    console.log('Formula OCR plugin loaded')
}


// bootstrap
logseq.ready(main).catch(console.error)