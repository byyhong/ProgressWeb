const ProgressModel = require('../models/progressModel');
module.exports = async (req, res) => {
    const { id } = req.params;
    const progress = await ProgressModel.findById(id);
    if(progress!=null){
        await progress.deleteOne();
    }
    res.status(204).json(progress);

}