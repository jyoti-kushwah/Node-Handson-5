let express = require('express')
let app=express()
let path = require('path')
let PORT=process.env.PORT || 5000
let socket=require('socket.io')
let cors=require('cors')


app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'))
})

let server=app.listen(PORT,()=>{
    console.log(`Server run on Port ${PORT}`)
})

let io=socket(server, {cors: {origin : "*"}})

io.on("connection",(socket)=>{
    console.log('connected')

    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    })
})