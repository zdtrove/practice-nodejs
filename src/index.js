console.log('Working with file');
var fileManager = require('./fileManager');
const fileName = __dirname + '/../data/temp.txt';
fileManager.createNewFile(fileName);
let jsonObject = {
    foods: [
        {
            foodName: "food 1",
            foodDescription: 'food description 1'
        },
        {
            foodName: "food 2",
            foodDescription: 'food description 2'
        },
        {
            foodName: "food 3",
            foodDescription: 'food description 3'
        }
    ],
    resultCode: 200,
    restaurantName:  "Sasimi BBQ"
}
fileManager.saveJsonObjectToFile(jsonObject, fileName);
fileManager.readJsonObjectFromFile(fileName);