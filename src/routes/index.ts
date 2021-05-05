import { Router } from 'express';

import categoriesRoutes from './categories.routes';
import specificationsRoutes from './specification.routes';
import userRoutes from './user.routes';

const appRoutes = Router();

appRoutes.use("/categories", categoriesRoutes);
appRoutes.use("/specifications", specificationsRoutes);
appRoutes.use("/users", userRoutes);

export default appRoutes;
