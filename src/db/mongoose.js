const mongoose = require("mongoose");
// console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});