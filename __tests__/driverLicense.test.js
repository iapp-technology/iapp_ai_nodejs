/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

test('Test Driver License OCR', async () => {
    const apikey = process.env.APIKEY;
    const calling_api = new MODULE(apikey)
    const result = await calling_api.driverLicense_ocr(path.join(ROOT,"media/driver_card.png"))
    console.log(result)
    expect(result['message']).toEqual('Success')
});