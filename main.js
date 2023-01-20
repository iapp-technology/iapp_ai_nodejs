/* Import class module and apikey */
const Module_Api = require('./src/modules_ai');

const apikey = 'XXX API KEY XXX';
const calling_api = new Module_Api(apikey);

// declare var for input parameter
var question= '';
var document= '';
var text= '';
var output_length;

// start calling apis

/* Image Recognition */
result = calling_api.idcardFront_Ocr("media/id-card-front.jpg");
result.then(function(result) {
    console.log(result)
 })
 
calling_api.idcardBack_Ocr("media/id-card-back.jpg");
calling_api.lpr_ocr("media/plate.jpg");
calling_api.bookbank_ocr("media/bookbank.jpg");
calling_api.passport_ocr("media/ukr-passport.jpeg");
calling_api.passport_ocr("media/thai-passport.jpeg");
calling_api.document_ocr_plaintext("media/pdf01.pdf");
calling_api.document_ocr_jsonlayout("media/pdf02.pdf");
calling_api.document_ocr_docx("media/pdf02.pdf");
calling_api.img_bg_removal();
calling_api.driverLicense_ocr("media/copy_of_thai_idcard_trial.png");

// /* Voice and Speech */
calling_api.kaitom_tts("สวัสดี");
calling_api.cee_tts("สวัสดีดิฉันชื่อซีค่ะ");
calling_api.thai_asr("media/2ppl.wav");

/* Thai Natural Language Processing */
calling_api.thai_qa(question="แค็วม์เป็นแค่หมู่บ้านใช่หรือไม่",document="จังหวัดแค็วม์โปแลนด์ wojewdztwochemskie คือหน่วยการปกครองท้องถิ่นของประเทศโปแลนด์ในช่วงปี ค.ศ.1975 - ค.ศ.1998 จังหวัดได้รับการรวมเข้ากับจังหวัดลูบลินมีเมืองหลักคือแค็วม์ใน ปี ค.ศ.1998 มีพื้นที่ประมาณ 3865 ตารางกิโลเมตรและมีประชากร 248800 คน");
calling_api.thai_text_sum(text="พล.อ.ประยุทธ์ จันทร์โอชา นายกรัฐมนตรีและรัฐมนตรีว่าการกระทรวงกลาโหม กล่าวถึงกระแสข่าววิพากษ์วิจารณ์นายกรัฐมนตรี อ่านกระดาษเปล่าบนเครื่องบินระหว่างเดินทางมาประเทศญี่ปุ่น ว่า แค่นายกรัฐมนตรีอ่านหนังสือยังนำรูปไปวิพากษ์วิจารณ์ได้ กล่าวหาว่าแทนที่จะอ่านหนังสือเตรียมประชุม ทั้งที่ความจริงหนังสือที่หยิบมาอ่านนั้น เป็นหนังสือของสายการบินที่วางไว้ จึงหยิบขึ้นมาดูเท่านั้น", output_length=84)
calling_api.thai_qgen(text="แค็วม์เป็นแค่หมู่บ้านใช่หรือไม่");
calling_api.eng_thai_translate(text="แค็วม์เป็นแค่หมู่บ้านใช่หรือไม่");