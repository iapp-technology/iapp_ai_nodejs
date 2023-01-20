/* unittest */
const MODULE = require('../src/modules_ai');
const path = require("path")

const ROOT = path.normalize(`${__dirname}/../`)

test('Test Water Meter File Support', async () => {
    const apikey = process.env.APIKEY;
    
    const calling_api = new MODULE(apikey)
    const result = await calling_api.waterMeter_file(path.join(ROOT,"media/water-meter.jpg"))
    console.log(result)
    expect(result['message']).toEqual('success')
},30000);