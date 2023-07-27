import bcrypt from "bcryptjs"

import  Users  from"../models/Users";

export const signup = async (req,res) => {
    const {username,email, password , role} = req.body;

    try {

        // aqui encriptamos la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser =  await new Users({
            username,
            email,
            password: hashedPassword // aqui enviamos como parametro, la contraseña encriptada
     })
    const saveduser =  await newUser.save();
    console.log(saveduser)


    res.json("singup")
    } catch (error) {
        res.status(500).json({msg:"tas bien wey pa programar"})
        console.error("Valio verga el signup: ",error.message)
    }
}

export const signin = async (req,res) => {
    const { email, password } = req.body;
    try {

        // encontramos un usuario en mongo
        const findUser = await Users.findOne({email:email});
        console.log(findUser);
        
        //comparamos la contraseña que llegó por req.body y la de la base de datos
        const matchPassword = await bcrypt.compare(password, findUser.password);7

        // si no coincide la contraseña, te manda a chingar a tu madre
        if(!matchPassword){
            return res.status(403).json({message:"tu no eres mi papá cuyeyo"})
        }

        //si coinciden las contraseñas, retorna la informacion
        return res.status(200).json(findUser);
    } catch (error) {
        res.status(500).json({msg:"tas bien wey pa programar"})
        console.error("Valio verga el signin: ",error.message);
    }
    res.json("singin")
}