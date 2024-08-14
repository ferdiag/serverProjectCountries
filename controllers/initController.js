const data = require("../data/data.js");
const initController = (req, res) => {
  res.json(data);
};
module.exports = initController;
