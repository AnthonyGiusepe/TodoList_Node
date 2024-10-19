const app = require('./app')
require('dotenv').config()

const mongoose = require('mongoose')


const DATABASE_URL = process.env.MONGO_URI

mongoose.connect(DATABASE_URL).then(()=>{
    
    console.log('Conexion a la DB exitosa')

    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })

}).catch(err => console.log(err, 'Error al conectar al DB'))