import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const getUserSelfService = async (id:string) => {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    const userExist = users.find(user => user.id === id)

    if(!userExist) throw new Error('user not exist');

    return userExist;
    
}

export default getUserSelfService