const progressModel = require('../models/progressModel');
module.exports = async(req, res) => {
    const {text, completed} = req.body;
    const data = new progressModel({
        text,
        completed:completed
    });
    
    const newProgress = await data.save();
    res.json(newProgress);
};