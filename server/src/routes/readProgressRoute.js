const ProgressModel = require('../models/progressModel');
module.exports = async (req, res) => {
    const progress = await ProgressModel.find();
    res.json(progress);
    // TODO: create a readOne route that only return one item
}