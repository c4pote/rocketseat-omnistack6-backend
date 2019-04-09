const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    path:{
        type: String,
        required: true
    },
},
{
    timestamps: true,
    toObject: { virtuals: true},
    toJSON: { virtuals: true }
}
);

File.virtual('url').get(function(){
    return `http://127.0.0.1:4545/files/${encodeURIComponent(this.path)}`;
})


module.exports = mongoose.model('File', File);