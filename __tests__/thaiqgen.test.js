/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

test('Test Thai QGen', async () => {
    const apikey = process.env.APIKEY;
    const calling_api = new MODULE(apikey)
    const result = await calling_api.thai_qgen(text="แค็วม์เป็นแค่หมู่บ้านใช่หรือไม่")
    console.log(result)
    expect(result['context']).toEqual('แค็วม์เป็นแค่หมู่บ้านใช่หรือไม่')
});