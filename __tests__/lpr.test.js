/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

test('Test License Plate OCR', async () => {
    const apikey = process.env.APIKEY;
    const calling_api = new MODULE(apikey)
    const result = await calling_api.lpr_ocr(path.join(ROOT,"media/plate.jpg"))
    // console.log(result);
    expect(result['message']).toEqual('success')
});