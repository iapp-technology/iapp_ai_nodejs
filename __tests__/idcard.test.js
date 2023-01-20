/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)


describe('IDCard UnitTest', () => {
    const apikey = process.env.APIKEY;

    it('Test IDCard Front Part', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.idcardFront_Ocr(path.join(ROOT,"media/id-card-front.jpg"))
        console.log(result);
        expect(result['id_number']).toEqual('3830200044009')
    });
    it('Test IDCard Front Part Photocopied', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.idcardFront_photocopied(path.join(ROOT,"media/copy_of_thai_idcard_trial.png"))
        console.log(result);
        expect(result['address_district']).toEqual('บางละมุง')
    });
    it('Test IDCard Back Part', async () => {
        const calling_api = new MODULE(apikey)
        const result = await calling_api.idcardBack_Ocr(path.join(ROOT,"media/id-card-back.jpg"))
        console.log(result);
        expect(result["back_number"]).toEqual('JT0-1740123-05')
    });
});