import {Request,Response} from 'express'
import patchUserService from '../services/patchUser.service'

const patchUserController = async (req:Request,res:Response) => {

    const {id} = req.params;
    const {name,email,password,age} = req.body
    const update_at = new Date();


    try {
        const user = await patchUserService(id,{name,email,password,age,update_at})
        res.status(200).send({user,message:'user atualizado com sucesso'});

    } catch (error) {
        if(error instanceof Error) return res.send({
            error:error.name,
            message:error.message
        }) 
    }

}

export default patchUserController