import {Request,Response, NextFunction} from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entity';

const userExistMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    const {id} = req.params
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find();
    const userExist = users.find(user => user.id === id);

    if(!userExist) {return res.status(404).send({message:'User not found'});}

    next();


}

export default userExistMiddleware