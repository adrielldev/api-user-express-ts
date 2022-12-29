import {Request,Response} from 'express';
import getUserSelfService from '../services/getUserSelf.service';

const getUserSelfController = async (req:Request,res:Response) => {

    const {id} = req.params

    try {
        const user = await getUserSelfService(id);
        
        return res.status(200).send(user);
    } catch (error) {
        if(error instanceof Error) return res.status(400).send({
            error:error.name,
            message:error.message
        })
        
    }


}

export default getUserSelfController

