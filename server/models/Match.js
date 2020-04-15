const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    title:{type:String},
    date:{type:String},
    icon:{type:String},
    body:{type:String}
})

module.exports=mongoose.model('Match',schema)