import {Request,Response} from 'express';

import createUserService from '../services/createUser.service';

const createUserController = async (req:Request,res:Response) => {

    const created_at = new Date();
    const updated_at = created_at;
    try {
        const user = await createUserService({...req.body,created_at,updated_at});
        return res.status(201).send(user);
    } catch (error) {
        if(error instanceof Error) return res.status(400).send({
            error:error.name,
            message:error.message
        })
    }    
}

export default createUserController;

