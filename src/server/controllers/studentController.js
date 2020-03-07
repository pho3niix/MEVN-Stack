const studentModel = require('../models/studentDB');
const moment = require('moment');

const studentControl = {};

moment.locale('es');
var date = moment().format('DD-MM-YYYY');

/**@Insertar */
studentControl.newStudent = (req, res)=>{
    const newStudent = new studentModel(
        {
            nombre: req.body.nombre,
            paterno: req.body.paterno,
            materno: req.body.materno,
            direccion:{
                calle: req.body.calle,
                numero: req.body.numero,
                colonia: req.body.colonia,
                ciudad: req.body.ciudad,
                estado: req.body.estado
            },
            tutors: req.body.tutors,
            telefono: req.body.tel,
            group: req.body.grupo,
            observacion: req.body.observacion,
            horario:{
                entrada: req.body.entrada,
                salida: req.body.salida
            },
            dateIn: date,
            nacimiento: {
                ciudad: req.body.ciudadb,
                estado: req.body.estadob,
                fecha: req.body.fecha
            },
            home: req.body.home
        }
    );
    newStudent.save(
        (err, student)=>{
            if(err){
                return res.send(err);
            }else{
                return res.status(200).json(
                    {
                        success:true,
                        message: 'Alumno registrado correctamente',
                        student
                    }
                )
            }
        }
    )
};

/**@Obtener */
studentControl.getStudents = (req, res)=>{
    studentModel.find({}).sort({_id:-1}).populate({
        path:'group', select:'nombre', 
        populate:{
            path:'teacher', select:'nombre'
        }})/**.populate({
            path: 'tutors', select: 'nombre paterno materno telefono'
        }) */.exec(
        (err, student)=>{
            if(err){
                return res.send(err);
            }else{
                return res.status(200).send(student);
            }
        }
    )
}

/**@Actualizar */
studentControl.upStudents = (req, res)=>{
    var upStudents ={
        nombre: req.body.nombre,
        paterno: req.body.paterno,
        direccion:{
            calle: req.body.calle,
            numero: req.body.numero,
            colonia: req.body.colonia,
            ciudad: req.body.ciudad,
            estado: req.body.estado
        },
        group: req.body.grupo,
        telefono: req.body.tel,
        tutors: req.body.tutors,
        observacion: req.body.observacion,
        horario:{
            entrada: req.body.entrada,
            salida: req.body.salida
        },
        nacimiento:{
            ciudad:req.body.ciudadb,
            estado: req.body.estadob,
            fecha: req.body.fecha
        },
        home: req.body.home
    };
    studentModel.updateOne(
        {
            _id: req.params.id
        },
        upStudents,
        {new: true},
        (err, students)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Ocurrio un error',
                        err
                    }
                )
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Alumno actualizado',
                        students
                    }
                )
            }
        }
    );
};

/**@Eliminar */
studentControl.delStudent = (req, res)=>{
    studentModel.deleteOne(
        {
            _id: req.params.id
        },
        (err)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Ocurrio un error al borrar estudiante'
                    }
                )
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Alumno borrado correctamente'
                    }
                )
            }
        }
    )
};

/**@Obtener_por_matricula */
studentControl.getById = (req, res)=>{
    studentModel.findById(
        {
            _id: req.params.id
        }
    ).populate({
        // path: 'group',
        // select: 'nombre',
        // populate:{
        //     path: 'teacher',
        //     select: 'nombre'
        // }
        path: 'group',
        select: 'nombre'
    })
    .exec(
        (err, student)=>{
            if(err){
                return res.status(400).send(err);
            }else{
                return res.status(200).send(student);
            }
        }
    )
};

/**@Obtener_por_grupo */
studentControl.getByGroup = (req, res)=>{
    studentModel.find(
        {
            group: req.params.group
        }
    ).populate({
        path: 'group',
        select: 'nombre'
    }).exec(
        (err, group)=>{
            if(err){
                return res.send(err);
            }else{
                return res.send(group)
            }
        }
    )
}

module.exports = studentControl;