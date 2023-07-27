import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgUrl:String
},{
    timestamps: true, //guarda los datos con su fecha de creacion, y su ultima fecha de actualizacion 
    versionKey: false //funciona para evitar en la creacion el --v
})

export default model('products', productSchema)