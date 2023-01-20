/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

test('Test Eng/Thai Translation', async () => {
    const apikey = process.env.APIKEY;
    const calling_api = new MODULE(apikey)
    const result = await calling_api.eng_thai_translate(text="แค็วม์เป็นแค่หมู่บ้านใช่หรือไม่")
    console.log(result)
    expect(result).not.toBeNull()
});