# Logseq - Plugin - LaTex Formula OCR

This plugin is used to convert LaTex formula images from the clipboard to LaTex code.

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

- **/formula-ocr**: returns the LaTex code of the image in the clipboard

---

## Demo

---

## References
