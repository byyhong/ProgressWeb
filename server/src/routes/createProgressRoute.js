const progressModel = require('../models/progressModel');
module.exports = async(req, res) => {
    const{text} = req.body;
    const data = new progressModel({
        text,
    });
    
    const newProgress = await data.save();
    res.json(newProgress);
};