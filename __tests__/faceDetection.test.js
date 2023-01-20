/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

describe('Face Detection UnitTest', () => {
    const apikey = process.env.APIKEY;
    
    it('Test Single Face Detection', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.face_detect_single(path.join(ROOT,"media/face.jpg"))
        // console.log(result);
        expect(result['message']).toEqual('successfully performed')
    });
    it('Test Multi Face Detection', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.face_detect_multi(path.join(ROOT,"media/multi_face.jpg"))
        // console.log(result);
        expect(result["message"]).toEqual('successfully performed')
    });
    it('Test Face Detection Configuration', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.face_detect_config(company_name="iApp", pass="iApp")
        console.log(result);
        expect(result["message"]).toEqual('the minimum score has been successfully shown.')
    });
});