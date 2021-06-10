# Backend Sistema Registro de Egresos

## Índice

### 2- Crear Usuario

### 3- Obtener Usuario

## ___________________________________________________________

## 1- Servidor

    servidor: https://backend-registro-egreso.herokuapp.com/api-backend-prueba
    Prefijo: api-backend-prueba

## 2-Crear Usuario

### Ruta

    Método POST /usuario/crear-usuario    

### Datos Recibidos

    nombre:String,
    apellido:String,
    rut: { type:String,default: null },
    correo: String,
    password: String,

### Respuesta

    (200)
    {
        "usuario": {
            "rut": "11111-1",
            "_id": "60c18078e752d41a04eea451",
            "nombre": "prueba",
            "apellido": "prueba",
            "correo": "correo@gmail.com",
            "password": "$2b$10$BiPTE4bi0H4iUCsnvbsqbO4TZRJTwhz.tVwQvbJn0gfmCjTVKIVWG",
            "__v": 0
        }
    }

## 3-Obtener Usuario

### Ruta

    Método GET /usuario/obtener-usuarios

### Datos Obtenidos

    {
        "usuarios": [
            {
                "rut": "111111",
                "_id": "60aee75a3230560015e8c085",
                "nombre": "nombre",
                "apellido": "apellido",
                "correo": "correo@gmail.com",
                "password": "$2b$10$zaSg/SaBEym22Nk8Yw/Pfug7dlL/qu8JGiQs//5EWcWZyZNx5X25C",
                "__v": 0
            },
            {
                "rut": "18.315.092-8",
                "_id": "60aef3fecde6252dd8410f3a",
                "nombre": "nombre",
                "apellido": "apellido",
                "correo": "correo@gmail.com",
                "password": "$2b$10$H2OhlpDOBnK3GoR9Vfcqeu4qbuX8q6iE0okT3H91MZhE2sNglNSC.",
                "__v": 0
            }
    }