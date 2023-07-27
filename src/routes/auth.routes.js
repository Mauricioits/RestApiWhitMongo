import  {Router} from 'express'
 const router = Router ()

 import * as authCtrl from '../controllers/auth.controller'

 router.post('/signup', authCtrl.signup)  //para poder loggearse
 router.post('/signin',authCtrl.signin)  //para poder ingresar 
 
 export default router;