/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

describe('Face Recognition UnitTest', () => {
    const apikey = process.env.APIKEY;
    
    it('Test Single Face Recognition', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.face_recog_single(path.join(ROOT,filepath="media/face.jpg"),company_name="iApp")
        console.log(result);
        expect(result["message"]).toEqual('successfully performed')
    });

    it('Test Multi Face Recognition', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.face_recog_multi(path.join(ROOT,filepath="media/multi_face.jpg"),company_name="iApp")
        console.log(result);
        expect(result['message']).toEqual('successfully performed')
    });

    it('Test FaceCrop Face Recognition', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.face_recog_facecrop(path.join(ROOT,filepath="media/face.jpg"),company_name="iApp")
        console.log(result);
        expect(result['message']).toEqual('successfully performed')
    });

    // it('Test Add Face Recognition', async () => {
    //     const calling_api = new MODULE(apikey)
    //     const result = await calling_api.face_recog_add(path.join(ROOT,(filepath="media/face.jpg")),company_name="iApp", person_name="Tommy", password="iApp1234")
    //     console.log(result);
    //     expect(result['company']).toEqual('iApp')
    // });
    
    // it('Test Face Import', async () => {
    //     const calling_api = new MODULE(apikey)
    //     const result = await calling_api.face_recog_import(path.join(ROOT,(filepath="media/import.csv")),company_name="nodejs_demo", password="nodejs_demo")
    //     console.log(result);
    //     expect(result["message"]).toEqual('image error, unsupported format.')
    // });
    
    // it('Test Face Export', async () => {
    //     const calling_api = new MODULE(apikey)
    //     const result = await calling_api.face_recog_export(company_name="nodejs_demo", password="nodejs_demo", type_file="csv")
    //     console.log(result);
    //     expect(result).not.toBeNull()
    // },30000);

    // it('Test Face Check', async () => {
    //     const calling_api = new MODULE(apikey)
    //     const result = await calling_api.face_recog_check(company_name="nodejs_demo", password="nodejs_demo")
    //     console.log(result);
    //     expect(result['message']).toEqual('successfully performed')
    // });

    // it('Test Face Removal', async () => {
    //     const calling_api = new MODULE(apikey)
    //     const result = await calling_api.face_recog_remove(company_name="nodejs_demo", password="nodejs_demo", person_name='Tom', face_id="220928-1")
    //     console.log(result);
    //     expect(result['message']).toEqual('face removed successfully')
    // });

    // it('Test Reset Password', async () => {
    //     const calling_api = new MODULE(apikey)
    //     const result = await calling_api.face_reset_password(company_name="nodejs_demo", old_password="nodejs_demo", new_password="nodejs_ai_api")
    //     console.log(result)
    //     expect(result['message']).toEqual('successfully performed')
    // });
    
    // it('Test Face Recognition Configuration', async () => {
    //     const calling_api = new MODULE(apikey)
    //     const result = await calling_api.face_ver_config(company_name="iApp", pass="iApp")
    //     console.log(result);
    //     expect(result["message"]).toEqual('the minimum score has been successfully shown.')
    // });
});