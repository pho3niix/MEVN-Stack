const teacherModel = require('../models/teacherDB');
const moment = require('moment');

const teacherControl = {};

moment.locale('es');
var date = moment().format('DD-MM-YYYY');

/**@Insertar */
teacherControl.newTeacher = (req, res)=>{
    const newTeacher = new teacherModel(
        {
            nombre: req.body.nombre,
            paterno: req.body.paterno,
            materno: req.body.materno,
            direccion:{
                calle: req.body.calle,
                numero: req.body.numero,
                colonia: req.body.colonia,
                ciudad: req.body.ciudad,
                estado: req.body.estado,
            },
            especialidad: req.body.especialidad,
            telefono:{
                celular: req.body.celular,
                casa: req.body.casa
            },
            group: req.body.group,
            dateIn: date
        }
    );
    newTeacher.save(
        (err, teacher)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'No fue posible guardar maestro',
                        err
                    }
                )
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Maestro guardado correctamente',
                        teacher
                    }
                )
            }
        }
    );
};

/**@Obtener */
teacherControl.getTeachers = (req, res)=>{
    teacherModel.find({}).sort({_id:-1}).populate('group', {nombre: 1}).exec(
        (err, teachers)=>{
            if(err){
                return res.send(err);
            }else{
                return res.send(teachers);
            }
        }
    )
}

/**@Eliminar */
teacherControl.delTeacher =  (req, res)=>{
    teacherModel.remove(
        {
            _id: req.params.id
        },
        (err)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Ocurrio un error al eliminar Maestro'
                    }
                )
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Maestro eliminado correctamente'
                    }
                )
            }
        }
    )
}

/**@Actualizar */
teacherControl.upTeacher = (req, res)=>{
    const upTeacher = {
        nombre: req.body.nombre,
        paterno: req.body.paterno,
        materno: req.body.materno,
        direccion:{
            calle: req.body.calle,
            numero: req.body.numero,
            colonia: req.body.colonia,
            ciudad: req.body.ciudad,
            estado: req.body.estado,
        },
        especialidad: req.body.especialidad,
        telefono:{
            celular: req.body.celular,
            casa: req.body.casa
        }
    }
    teacherModel.updateOne(
        {
            _id: req.params.id
        },
        upTeacher,
        {new: true},
        (err, teachers)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Error al actualizar Maestro',
                        err
                    }
                )
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Maestro actualizado correctamente',
                        teachers
                    }
                )
            }
        }
    );
};

/**@Obtener_por_matricula */
teacherControl.findById = (req, res)=>{
    teacherModel.findById(
        {
            _id: req.params.id
        }
    ).populate({
        path: 'group',
        select: 'nombre'
    }).exec(
        (err, teacher)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Error al buscar maestro'
                    }
                )
            }else{
                return res.status(200).send(teacher)
            }
        }
    )
};

/**@Add_Grupo_a_maestro */
teacherControl.setGroup = (req, res)=>{
    teacherModel.updateOne(
        {
            _id: req.params.id
        },
        {$addToSet:{group: req.params.group}},
        {new: true},
        (err, teach)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Error al actualizar grupo',
                        err
                    }
                )
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Grupo agregado correctamente',
                        teach
                    }
                )
            }
        }
    )
};

/**@Get_maestros_por_grupo */
teacherControl.getGroups = (req, res)=>{
    teacherModel.find(
        {
            group: req.params.group
        }
    ).populate({
        path: 'group',
        select:'nombre'
    }).select({nombre:1, paterno:1, group:1, telefono:1}).exec(
        (err, group)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Error al buscar maestros',
                        err
                    }
                )
            }else{
                return res.send(group);
            }
        }
    )
}

module.exports = teacherControl;