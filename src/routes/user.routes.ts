import { Router } from 'express';
import CreateUserController from '../modules/accounts/useCases/createUser/controllers/CreateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/', createUserController.handle)

export default usersRoutes;