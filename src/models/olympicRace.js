const mongoose = require('mongoose');

const olympicRankSchema = new mongoose.Schema({
    rank : {
        type: Number,
        required: true,
        unique: true
    },
    competitor: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    nation: {
        type: String,
        required: true,
    },
    score : {
        type: Number,
        required: true,
    },
    eventlist: {
        type: String,
        default: "100m"
    }
})

const Rank = new mongoose.model('olympicRank', olympicRankSchema);
module.exports = Rank ;