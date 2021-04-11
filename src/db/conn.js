const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/olympicRank', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected with database successfully !");
}).catch((e) => {
    console.log(e)
})