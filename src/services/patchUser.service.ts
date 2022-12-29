import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import bcrypt from 'bcrypt'
import { IUserEdit } from "../interfaces/user";

const patchUserService = async (id:string,{name,email,password,age,update_at}:IUserEdit) => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    console.log(name,email,password,age,update_at);

    const userExist = users.find(user => user.id === id);
    if(!userExist) throw new Error('user not found');
    if(name){
        await userRepository.update(id,{name:name});
        userExist.name = name;
    };
    if(email){
        await userRepository.update(id,{email:email});
        userExist.email = email;
    }

    if(password){
        const newPassword = bcrypt.hashSync(password,10);
        await userRepository.update(id,{password:newPassword});
        userExist.password = newPassword;
    }
    if(age){
        await userRepository.update(id,{age:age});
        userExist.age = age;
    }
    if(update_at){
        await userRepository.update(id,{updated_at:update_at});
        userExist.updated_at = update_at
    }
    return userExist;

}

export default patchUserService
