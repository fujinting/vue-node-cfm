const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    categories:{type:String},
    title:{type:String},
    date:{type:String},
    icon:{type:String},
    link:{type:String}
})

module.exports=mongoose.model('Videos',schema)