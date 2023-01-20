/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

test('Test Book Bank OCR', async () => {
    const apikey = process.env.APIKEY;
    const calling_api = new MODULE(apikey)
    const result = await calling_api.bookbank_ocr(path.join(ROOT,"media/bookbank.jpg"))
    console.log(result)
    expect(result['message']).toEqual('Success')
});