import { Schema, model} from 'moongose'


const roleSchema = new Schema({
    
    name: String,
},{
     versionkey:false,
});

export default model("role", roleSchema);