const {Schema, model} = require('mongoose')

const MembresiaSchema = ({
    idMembresia:{
        type: Number,
        unique: true,
        required:[true, 'El id de la membresia  es necesaria']
    },

    nombreMembresia: {
        type:String,
        required:[true, 'El nombre de la membresia es requerida'],
    },

    frecuenciaMembresia:{
        type:Number,
        required:[true, 'La frecuencia de la membresia es requerida'],
    },

    fechaInicio:{
        type:Number,
        required:[true, 'La fecha de inicio de la membresia es requeriad'],
    },

    fechaFin:{
        type:Number,
        required:[true, 'La fecha fin de la membresia es requeriad'],
    },
    servicioMembresia:{
        type:String,
        required:[true, 'El servicio es requerido'],
    }
})


module.exports = model('Membresia', MembresiaSchema)