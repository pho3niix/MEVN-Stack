const mongoose = require('mongoose');
const {Schema} = mongoose;

var collectionName = 'teacher';

const TeacherSchema = new Schema(
    {
        nombre: {
            type: String
        },
        paterno:{
            type: String
        },
        materno:{
            type: String
        },
        direccion:{
            calle: String,
            numero: String,
            colonia: String,
            ciudad: String,
            estado: String,
        },
        especialidad: {
            type: String
        },
        telefono:{
            celular: String,
            casa: String
        },
        group:[{
            type: Schema.Types.ObjectId,
            ref:'group'
        }],
        dateIn:{
            type: String
        }
    },
    {
        collection: collectionName
    }
);

const Teachers = mongoose.model(collectionName, TeacherSchema, 'teacher');

module.exports = Teachers;