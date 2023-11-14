# Logseq - Plugin - LaTex Formula OCR

This plugin is used to convert **LaTex formula images** from the clipboard **into LaTex code** using Transformers.

**Use cases:**

- Preparation of scientific presentations or papers
- Transcribing lectures
- Technical reports
- Self-study

---

## Requirements

- [Logseq](https://logseq.com/)
- [Hugging Face User Access Token](https://huggingface.co/docs/hub/security-tokens)
- [Node.js](https://nodejs.org/en)
- [Yarn](https://yarnpkg.com/)
- [Parcel](https://parceljs.org/)
---

## Install

```console
git clone ...
cd ...
yarn ...
yarn build ...
```
In Logseq:

- Enable developer mode: `Logseq > Settings > Advanced > Developer mode`
- Import Plugin: `Logseq > Plugins > Load unpacked plugin` and point to the cloned repo.

---

## Settings

In Hugging Face: `Settings > Access Tokens > New Token > Name+Role(read) > Generate a token`

In Logseq: `Plugins Settings > LaTex Formula OCR > Hugging Face User Access Token` and paste the token.

---

## Commands

**/formula-ocr**: returns the LaTex code of the image in the clipboard

> **Notes**: 
> + The image in the clipboard must be a LaTex formula image
> + The initial command may be delayed for about 1 minute due to the loading of the model in Hugging Face or when not used for a long time
> + With the free Hugging Face plan you can make about 30k calls per month (more than enough I would say)
---

## Demo

---

## Acknowledgements


This plugin is based on [nougat-latex-base](https://huggingface.co/Norm/nougat-latex-base), a fine-tuning of [facebook/nougat-base](https://huggingface.co/facebook/nougat-base) with [im2latex-100k](https://zenodo.org/records/56198#.V2px0jXT6eA), and made by [NormXU](https://github.com/NormXU).

---

## License

MIT


[//begin]: # "Autogenerated link references for markdown compatibility"