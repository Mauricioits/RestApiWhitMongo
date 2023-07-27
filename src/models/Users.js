import { Schema, model } from  'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({

    username:{
        type: String,
        unique:true
    },
    email:{
        type: String,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:[{
        ref:'role',
        type:Schema.Types.ObjectId
    }],
    
},{
    timestamps:true,
    versionKey:false      
})

  
  const Users = model('Users', userSchema);
  
  export default Users;