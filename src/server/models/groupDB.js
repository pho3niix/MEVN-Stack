const mongoose = require('mongoose');
const {Schema} = mongoose;

const collectionName = 'group';

const GroupSchema = new Schema(
    {
        nombre:{
            type: String,
            unique: true
        },
        // teacher:{
        //     type: Schema.Types.ObjectId,
        //     ref: 'teacher' 
        // },
    },
    {
        collection: collectionName
    }
)

const Groups = mongoose.model(collectionName, GroupSchema);

module.exports = Groups;