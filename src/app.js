import  express  from "express";
import morgan from "morgan";
import pkg from '../package.json';
import productroutes from "./routes/productos.routes" 
import authRoutes from "./routes/auth.routes"
import cors from "cors"

const app = express()
app.set('pkg', pkg)
app.use(cors())
app.use(morgan('dev')); 

app.use(express.json()) //Nos permite recibir los datos en formato json

app.get('/',(req, res) => {
    res.json({
        name:app.get('pkg').name,
        author: app.get ('pkg').author,
        description:app.get ('pkg').description,
        version: app.get('pkg').version
})
})

app.use('/api/products',productroutes)
 app.use('/api/auth', authRoutes)   


export default app;

