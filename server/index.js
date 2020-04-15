const express=require("express")

const app=express()

app.set('secret','asichiac')

app.use(require('cors')())  

app.use(express.json())

app.use('/uploads',express.static(__dirname+'/uploads'))  //静态文件托管

require('./plugins/db')(app)

require('./routes/admin')(app)

require('./routes/web')(app)


app.listen(3000,()=>{
    console.log( 'App Listening on port 3000');
 })