const moongose = require('mongoose');
const {Schema} = moongose;

const collectionName = 'account';

const AccountSchema = new Schema(
    {
        // _id:{
        //     type:Schema.Types.ObjectId,
        //     ref: 'student'
        // },
        penalty:{
            type: Number
        },
        credit:{
            type: Number
        },
        payment:{
            type: Number
        },
        service:{
            type: Number
        },
        total:{
            type: Number
        }
    }
);

const Account = moongose.model(collectionName, AccountSchema);

module.exports = Account;