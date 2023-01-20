/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

describe('TTS UnitTest', () => {
    const apikey = process.env.APIKEY;
    it('Test Kaitom Voice', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.kaitom_tts("สวัสดี")
        // console.log(result);
        expect(result).not.toBeNull()
    },10000000);
    it('Test Cee Voice ', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.cee_tts("สวัสดีดิฉันชื่อซีค่ะ")
        // console.log(result)
        expect(result).not.toBeNull()
    },10000000);
    
});