import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import getUsersController from "../controllers/getUsers.controller";
import getUserSelfController from "../controllers/getUserSelf.controller";
import patchUserController from "../controllers/patchUser.controller";

import userExistMiddleware from "../middlewares/userExist.middleware";

const router = Router();


router.post('',createUserController);
router.get('',getUsersController);
router.patch('/:id',userExistMiddleware,patchUserController);
router.delete('/:id',userExistMiddleware,deleteUserController);
router.get('/:id',userExistMiddleware,getUserSelfController);


export default router