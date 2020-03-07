const groupModel = require('../models/groupDB');

const groupControl = {};

/**@Insertar */
groupControl.newGroup =(req, res)=>{
    const newGroup = new groupModel(
        {
            nombre: req.body.nombre
        }
    );
    newGroup.save(
        (err, group)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Grupo ya existe'
                    }
                )
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Grupo guardado correctamente',
                        group
                    }
                )
            }
        }
    )
};

/**@Obtener */
groupControl.getGroup = (req, res)=>{
    groupModel.find({}).sort({_id:-1})
    /**.populate('teacher', {nombre:1, apellido:1,especialidad:1}) */
    .exec(
        (err, group)=>{
            if(err){
                return res.send(err);
            }else{
                return res.send(group);
            }
        }
    )
};

/**@Actualizar_grupo */
groupControl.upGroup = (req, res)=>{
    var upGroup = {
        nombre: req.body.nombre
    };
    groupModel.updateOne(
        {
            _id: req.params.id
        },
        upGroup,
        {new: true},
        (err, group)=>{
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
                        message: 'Grupo Actualizado correctamente',
                        group
                    }
                )
            }
        }
    )
};

/**@Eliminar_grupo */
groupControl.delGroup = (req, res)=>{
    groupModel.deleteOne(
        {
            _id: req.params.id
        },
        (err)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'No se pudo eliminar el grupo',
                        err
                    }
                )
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Grupo eliminado correctamente'
                    }
                )
            }
        }
    )
}

module.exports = groupControl;