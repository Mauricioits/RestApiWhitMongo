import mongoose from 'mongoose'

export const getConnection = async ()=>{
    try {
        const db = mongoose.connect("mongodb://127.0.0.1:27017/IT-services",{
            useNewUrlParser:true,   
            useUnifiedTopology:true    

        })
        console.log("conected")
    } catch (error) {
        console.log(error.message)
    }
} 

