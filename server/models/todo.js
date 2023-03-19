import mongoose from "mongoose";
const Schema=mongoose.Schema;


const TodoScehma= new Schema({
    text:{
        type:String,
        require:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    timestamp:{
        type:String,
        default:Date.now()
    }
})


const todo = mongoose.model("Todo",TodoScehma)

export default todo
