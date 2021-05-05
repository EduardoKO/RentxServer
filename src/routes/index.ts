import { Router } from 'express';
import categoriesRoutes from './categories.routes';
import specificationsRoutes from './specification.routes';

const appRoutes = Router();

appRoutes.use("/categories", categoriesRoutes);
appRoutes.use("/specifications", specificationsRoutes);

export default appRoutes;
