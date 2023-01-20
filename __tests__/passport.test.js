/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

test('Test Passport OCR', async () => {
    const apikey = process.env.APIKEY;
    
    const calling_api = new MODULE(apikey)
    const result = await calling_api.passport_ocr(path.join(ROOT,"media/thai-passport.jpeg"))
    console.log(result)
    expect(result['nationality']).toEqual('THA')
});