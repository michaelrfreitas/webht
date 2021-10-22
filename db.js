//MongoDB URL
//Mongoose connection with specifications
var mongoose = require('mongoose'),
    uri = process.env.MONGO_CONNECTION;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
