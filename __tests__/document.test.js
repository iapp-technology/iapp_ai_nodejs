/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)


describe('Document OCR UnitTest', () => {
    const apikey = process.env.APIKEY;
    it('Test Doc OCR as Plaintext', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.document_ocr_plaintext(path.join(ROOT,"media/pdf02.pdf"))
        console.log(result);
        expect(result).not.toBeNull()
    },30000);
    it('Test Doc OCR as JSONLayout', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.document_ocr_jsonlayout(path.join(ROOT,"media/pdf02.pdf"))
        console.log(result)
        expect(result).not.toBeNull()
    },30000);
    it('Test Doc OCR as Docx', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.document_ocr_docx(path.join(ROOT,"media/pdf02.pdf"))
        console.log(result)
        expect(result).not.toBeNull()
    },30000);
});