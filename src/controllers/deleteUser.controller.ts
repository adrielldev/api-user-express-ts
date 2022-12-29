import {Request,Response} from 'express'
import deleteUserService from '../services/deleteUser.service'

const deleteUserController = async (req:Request,res:Response) => {
    const {id} = req.params
    try {

        await deleteUserService(id);
        return res.status(200).send({message:'user deleted with success'})

        
    } catch (error) {

         if(error instanceof Error) return res.send({
            error:error.name,
            message:error.message
        }) 
    }


}

export default deleteUserController