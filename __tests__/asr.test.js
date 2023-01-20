/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

test('Test ASR', async () => {
    const apikey = process.env.APIKEY;
    const calling_api = new MODULE(apikey)
    const result = await calling_api.thai_asr(path.join(ROOT,"media/2ppl.wav"))
    console.log(result)
    expect(result).not.toBeNull()
},30000);