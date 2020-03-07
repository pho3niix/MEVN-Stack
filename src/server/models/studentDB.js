const mongoose = require('mongoose');
const {Schema} = mongoose;

var collectionName = 'student';

const StudentSchema = new Schema(
    {
        nombre:{
            type: String
        },
        paterno: {
            type: String
        },
        materno:{
            type: String
        },
        direccion:{
            calle: String,
            numero: Number,
            colonia: String,
            ciudad: String,
            estado: String
        },
        tutors:[{
            parentesco: String,
            nombre: String,
            paterno: String,
            materno: String,
            work: String,
            contacto:{
                trabajo: String,
                celular: String
            }
        }],
        telefono: {
            type: String
        },
        group:{
            type: Schema.Types.ObjectId,
            ref: 'group'
        },
        observacion: {
            type :String
        },
        horario:{
            entrada: String,
            salida: String
        },
        dateIn: {
            type: String
        },
        nacimiento: {
            ciudad: String,
            estado: String,
            fecha: String
        },
        home: {
            type: String
        },
        // account:{
        //     type: Schema.Types.ObjectId,
        //     ref:'account'
        // },
        status:{
            type: Boolean
        }
    },
    {
        collection: collectionName
    }
);

const Students = mongoose.model(collectionName, StudentSchema);

module.exports = Students;