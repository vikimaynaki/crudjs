
const express = require('express')
// untuk mengambil config.env
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()
const bodyparser = require('body-parser')
// untuk membuat pathh model
const path = require('path') 
// config ini mengambil port 3000
dotenv.config({path:`config.env`})
// dibawah untuk proses pemgambila n port 8080
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'))

// parser request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

// set view templatin engine
app.set("view engine", "ejs" )
// app.set("views", path.resolve(_-dirname,"views/ejs"))

// load assets for make assets 
app.use('/css',express.static(path.resolve(__dirname, "assets/css")))
app.use('/img',express.static(path.resolve(__dirname, "assets/img")))
app.use('/js',express.static(path.resolve(__dirname, "assets/js")))

// di bawah mencari respon dan mengirimkan menjadi string
app.get('/',(req, res ) =>{
    // res.send("Crud Application") before change with index.ejs
    res.render("index")
})
// membuat di terminal ada link untuk menemukan port
app.listen(PORT,() => {console.log(`Server Is Runing on http://localhost:${PORT}`)})