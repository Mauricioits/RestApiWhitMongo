 import products from '../models/products'
 
 //cuando se utiliza un metodo de espera await, tambien se debe de definr en el metodo principal un async
 export const createProducts = async (req, res) =>{ 
      const{name, category, price, imgUrl} = req.body //csteegoriza los datos del formato json

      const newProducts = new products({name, category, price, imgUrl}) //los almacena como uno nuevo

      const productSave = await newProducts.save() //almacena el guardado en una constante y  guardamos los productos con el metodo await para agregar un timpo de espera

    res.status(201).json(productSave)  //pide los datos guardados por medio de la constante
    //se utiliza el codigo de estatus para iformar lo que paso
 }

 export const getProducts = async (req, res) =>{
   const listProducts = await products.find();

    res.json(listProducts)
 }
 export const getProductsbyId = async (req, res) =>{
    const productId = await products.findById(req.params.productId)
    res.status(200).json(productId)
    
 }
 export const updateProductsbyId = async (req, res) =>{
    const UpdateProducts = await products.findByIdAndUpdate(req.params.productId, req.body,{
      new:true
    })
    res.status(204).json(UpdateProducts)
 }
 export const deleteProductsbyId = async (req, res) =>{
   const {productId} = req.params;
    await products.findByIdAndDelete(productId)
    res.status(200).json()
    
 }
 