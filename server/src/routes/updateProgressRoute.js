const progressModel = require('../models/progressModel');
module.exports = async (req, res)=>{
   const{id} = req.params;
   const data = await progressModel.findById(id);
   data.text = req.body.text;
   data.completed = req.body.completed;
   await data.save();
    res.json(data);
};