const { crearUsuarioBD, obtenerUsuariosDB } = require('./logicaDB')
const { generarCadenaEncriptada } = require('../../funciones/bcrypt')

const crearUsuario = async (req,res) => {
    let usuario =req.body
    try{
        usuario.password = await generarCadenaEncriptada(usuario.password)
        let respuesta_crear_usuario = await crearUsuarioBD(usuario)
        res.status(200).json({
            'usuario':respuesta_crear_usuario
        })
        return
    }catch(error){
        res.status(500).json({error})
        return 
    }
}
const obtenerUsuarios = async (req,res)=>{
    try{
        let respuesta_obtener = await obtenerUsuariosDB()
        res.status(200).json({
            'usuarios': respuesta_obtener
        })
    }catch{
        res.status(500).json({error})
        return
    }
}

module.exports = {
    crearUsuario,
    obtenerUsuarios
}