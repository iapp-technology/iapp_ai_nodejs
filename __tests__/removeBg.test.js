/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")
const ROOT = path.normalize(`${__dirname}/../`)

test('Test Remove Bg File Support', async () => {
    const apikey = process.env.APIKEY;

    const calling_api = new MODULE(apikey)
    const result = await calling_api.remove_bg_file(path.join(ROOT,"media/face.jpg"))
    expect(result).not.toBeNull()
},6000);