/* Import class module and apikey */
const iapp_ai = require("iapp_ai")
const api = new iapp_ai("{Your API Key}");

/* test Text-to-Speech api (Kaitom Voice) */
async function test_tts_kaitom(){
    const ret = await api.kaitom_tts("สวัสดี");
    console.log(ret)
}
test_tts_kaitom()

/* test Text-to-Speech api (Cee Voice) */
async function test_tts_cee(){
    const ret = await api.cee_tts("สวัสดี");
    console.log(ret)
}
test_tts_cee()

/* test Thai ASR */
async function test_asr(){
    const ret = await api.thai_asr("media/2ppl.wav");
    console.log(ret)
}
test_asr()

/* test Thai National ID Card OCR api (Front Part) */
async function test_idcardFront_Ocr(){
    const ret = await api.idcardFront_Ocr("media/id-card-front.jpg");
    console.log(ret)
}
test_idcardFront_Ocr()

/* test Thai National ID Card OCR api (Back Part) */
async function test_idcardBack_Ocr(){
    const ret = await api.idcardBack_Ocr("media/id-card-back.jpg");
    console.log(ret)
}
test_idcardBack_Ocr()

/* test Thai National ID Card OCR api (ID Card Photocopied) */
async function test_idcardFront_photocopied(){
    const ret = await api.idcardFront_photocopied("media/copy_of_thai_idcard_trial.png");
    console.log(ret)
}
test_idcardFront_photocopied()

/* test License Plate OCR api */
async function test_lpr_ocr(){
    const ret = await api.lpr_ocr("media/plate.jpg");
    console.log(ret)
}
test_lpr_ocr()

/* test Driver License Card OCR api */
async function test_driverLicense_ocr(){
    const ret = await api.driverLicense_ocr("media/copy_of_thai_idcard_trial.png");
    console.log(ret)
}
test_driverLicense_ocr()

/* test BookBank OCR api */
async function test_bookbank_ocr(){
    const ret = await api.bookbank_ocr("media/bookbank.jpg");
    console.log(ret)
}
test_bookbank_ocr()

/* test Passport OCR api */
async function test_passport_ocr(){
    const ret = await api.passport_ocr("media/thai-passport.jpeg");
    console.log(ret)
}
test_passport_ocr()

/* test Document OCR api (return as plain text) */
async function test_document_ocr_plaintext(){
    const ret = await api.document_ocr_plaintext("media/pdf01.pdf");
    console.log(ret)
}
test_document_ocr_plaintext()

/* test Document OCR api (return as json layout) */
async function test_document_ocr_jsonlayout(){
    const ret = await api.document_ocr_jsonlayout("media/pdf01.pdf");
    console.log(ret)
}
test_document_ocr_jsonlayout();

/* test Document OCR api (return as docx file) */
async function test_document_ocr_docx(){
    const ret = await api.document_ocr_docx("media/pdf01.pdf");
    console.log(ret)
}
test_document_ocr_docx();

/* test Imagen Remove Background api */
async function test_removebg(){
    const ret = await api.remove_bg_file("media/face.jpg");
    console.log(ret)
}
test_removebg();

/* Thai Question Answering */
var question= '';
var document= '';
async function test_qa(){
    const ret = await api.thai_qa(question="แค็วม์เป็นแค่หมู่บ้านใช่หรือไม่",document="จังหวัดแค็วม์โปแลนด์ wojewdztwochemskie คือหน่วยการปกครองท้องถิ่นของประเทศโปแลนด์ในช่วงปี ค.ศ.1975 - ค.ศ.1998 จังหวัดได้รับการรวมเข้ากับจังหวัดลูบลินมีเมืองหลักคือแค็วม์ใน ปี ค.ศ.1998 มีพื้นที่ประมาณ 3865 ตารางกิโลเมตรและมีประชากร 248800 คน");
    console.log(ret)
}
test_qa();

/* Thai Text Summarization */
var text= '';
var output_length;
async function test_textsum(){
    const ret = await api.thai_text_sum(text="พล.อ.ประยุทธ์ จันทร์โอชา นายกรัฐมนตรีและรัฐมนตรีว่าการกระทรวงกลาโหม กล่าวถึงกระแสข่าววิพากษ์วิจารณ์นายกรัฐมนตรี อ่านกระดาษเปล่าบนเครื่องบินระหว่างเดินทางมาประเทศญี่ปุ่น ว่า แค่นายกรัฐมนตรีอ่านหนังสือยังนำรูปไปวิพากษ์วิจารณ์ได้ กล่าวหาว่าแทนที่จะอ่านหนังสือเตรียมประชุม ทั้งที่ความจริงหนังสือที่หยิบมาอ่านนั้น เป็นหนังสือของสายการบินที่วางไว้ จึงหยิบขึ้นมาดูเท่านั้น", output_length=84);
    console.log(ret)
}
test_textsum();

/* Thai Text Question Generator */
async function test_qgen(){
    const ret = await api.thai_qgen(text="แค็วม์เป็นแค่หมู่บ้านใช่หรือไม่");
    console.log(ret)
}
test_qgen();

/* Thai Machine Translation */
async function test_translation(){
    const ret = await api.eng_thai_translate(text="แค็วม์เป็นแค่หมู่บ้านใช่หรือไม่");
    console.log(ret)
}
test_translation();











