/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

test('Test Thai Text Summarization', async () => {
    const apikey = process.env.APIKEY;
    
    const calling_api = new MODULE(apikey)
    const result = await calling_api.thai_text_sum(text="พล.อ.ประยุทธ์ จันทร์โอชา นายกรัฐมนตรีและรัฐมนตรีว่าการกระทรวงกลาโหม กล่าวถึงกระแสข่าววิพากษ์วิจารณ์นายกรัฐมนตรี อ่านกระดาษเปล่าบนเครื่องบินระหว่างเดินทางมาประเทศญี่ปุ่น ว่า แค่นายกรัฐมนตรีอ่านหนังสือยังนำรูปไปวิพากษ์วิจารณ์ได้ กล่าวหาว่าแทนที่จะอ่านหนังสือเตรียมประชุม ทั้งที่ความจริงหนังสือที่หยิบมาอ่านนั้น เป็นหนังสือของสายการบินที่วางไว้ จึงหยิบขึ้นมาดูเท่านั้น")
    console.log(result)
    expect(result['summary']).toEqual('พล.อ.ประยุทธ์ จันทร์โอชา นายกรัฐมนตรีและรัฐมนตรีว่าการกระทรวงกลาโหมออกมาปฏิเสธข้อกล่าวหาที่มีเนื้อหาวิพากษ์วิจารณ์นายกรัฐมนตรีอ่านหนังสือเปล่าบนเครื่องบิน')
},100000);