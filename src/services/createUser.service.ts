import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserCreate,IUserShow } from "../interfaces/user";
import bcrypt from 'bcrypt'

const createUserService = async ({name,email,password,age,created_at,updated_at}:IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    const emailAlreadyExists = users.find(user => user.email ===email);

    if(emailAlreadyExists){
        throw new Error('Email already exists!')
    }

    const user = new User 
    user.name = name;
    user.email = email;
    user.password = bcrypt.hashSync(password,10);
    user.age = age;
    user.created_at = created_at;
    user.updated_at = updated_at;
    
    userRepository.create(user);
    await userRepository.save(user)

    const returnUser:IUserShow = {...user};
    delete returnUser.password

    return returnUser;


}

export default createUserService