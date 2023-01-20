const iapp_ai = require("iapp_ai")
const api = new iapp_ai("{Your API Key}");

async function test(){
    const ret = await api.kaitom_tts("สวัสดี");
    console.log(ret)
}
test()
