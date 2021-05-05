import { Router } from 'express';
import CreateSpecificationController from '../modules/cars/useCases/createSpecification/controllers/CreateSpecificationController';

const createSpecificationController = new CreateSpecificationController();

const specificationRoutes = Router();

specificationRoutes.post('/', createSpecificationController.handle);

export default specificationRoutes;
