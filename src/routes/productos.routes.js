import  {Router, json} from 'express'
 const router = Router ()
 import * as fullProducts from'../controllers/productos.controller'//importa todo las peticiones de los productos 
//En esta seccion trae las peticiones con su modulo.accion  (example:fullProducts.createProduct)
 //trae los productos con peticiones http
 router.post('/', fullProducts.createProducts)

 router.get('/', fullProducts.getProducts)

 router.get('/:productId', fullProducts.getProductsbyId)

 router.put('/:productId', fullProducts.updateProductsbyId)

 router.delete('/:productId', fullProducts.deleteProductsbyId)

 
    
 export default router;


