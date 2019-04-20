const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: [20, '{PATH} alanı {VALUE} {MAXLENGTH} küçük olmalıdır'],
        minlength: [2, '{PATH} alanı {VALUE} {MINLENGTH} büyük olmalıdır']
        // unique: true
    },
    published: Boolean,
    comments: [{ message: String}],
    meta : {
        votes: Number,
        favs: Number
    }
});

module.exports = mongoose.model('book', BookSchema);