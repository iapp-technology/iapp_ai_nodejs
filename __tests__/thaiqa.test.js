/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

test('Test Thai QA', async () => {
    const apikey = process.env.APIKEY;
    const calling_api = new MODULE(apikey)
    const result = await calling_api.thai_qa(question="แค็วม์เป็นแค่หมู่บ้านใช่หรือไม่",document="จังหวัดแค็วม์โปแลนด์ wojewdztwochemskie คือหน่วยการปกครองท้องถิ่นของประเทศโปแลนด์ในช่วงปี ค.ศ.1975 - ค.ศ.1998 จังหวัดได้รับการรวมเข้ากับจังหวัดลูบลินมีเมืองหลักคือแค็วม์ใน ปี ค.ศ.1998 มีพื้นที่ประมาณ 3865 ตารางกิโลเมตรและมีประชากร 248800 คน")
    console.log(result)
    expect(result).toEqual('ไม่ใช่')
},100000);