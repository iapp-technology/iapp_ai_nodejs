const iapp_ai = require("iapp_ai")
const api = new iapp_ai("{Your API Key}");

async function test_tts(){
    const ret = await api.kaitom_tts("สวัสดี");
    console.log(ret)
}
test()

async function test_idcardFront_Ocr(){
    const ret = await api.idcardFront_Ocr("media/id-card-front.jpg");
    console.log(ret)
}
test_idcardFront_Ocr()
