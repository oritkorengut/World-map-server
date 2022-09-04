const fs = require("fs");

const addPoint = async (req, res) => {
  let point = req.body;
  try{
    if (!fs.existsSync('coordinates.json')) {
        fs.closeSync(fs.openSync('coordinates.json', 'w'));
    }
    const file = fs.readFileSync('coordinates.json')
    if (file.length == 0) {
        fs.writeFileSync("coordinates.json", JSON.stringify([point]))
    } else {
        const json = JSON.parse(file.toString())
        json.push(point);
        fs.writeFileSync("coordinates.json", JSON.stringify(json))}
     return res.send(point)
  }catch(err){
    return res.status(404).send("failed")
  }
};
module.exports = { addPoint };
