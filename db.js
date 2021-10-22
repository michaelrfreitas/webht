var mongoose = require('mongoose'),
    //MongoDB URL
    uri = process.env.MONGO_CONNECTION;

//Mongoose connection with specifications
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

//Collection schema to add data in MongoDB
var touchSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        name: { type: String },
        date: { type: Date },
        language: { type: String },
    },
    { collection: 'touch' }
);

//Export Mongoose and Collection Schema
module.exports = {
    Mongoose: mongoose,
    TouchSchema: touchSchema,
};
