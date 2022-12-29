import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const deleteUserService = async (id:string) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find();

    const userExist = users.find(user => user.id === id);
    if(!userExist) throw new Error('user not exist');

    await userRepository.delete(id);
    return true;
    

}

export default deleteUserService
