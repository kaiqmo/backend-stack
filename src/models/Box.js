const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref:"File"}]//pode lidar com varios tipos diferentes! por exemplo [String]
},{
    timestamps:true
});

module.exports = mongoose.model('Box',Box);