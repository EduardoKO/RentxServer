import { Router } from 'express';
import multer from 'multer';

import CreateCategoryController from '../modules/cars/useCases/createCategory/controllers/CreateCategoryController';
import ImportCategoryController from '../modules/cars/useCases/importCategory/controllers/ImportCategoryController';
import ListCategoriesController from '../modules/cars/useCases/listCategories/controllers/ListCategoriesController';

const categoriesRouter = Router();

const upload = multer({
  dest:'./tmp'
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()

categoriesRouter.post('/', createCategoryController.handle);

categoriesRouter.get('/', listCategoriesController.handle);

categoriesRouter.post('/import', upload.single("file"), importCategoryController.handle);

export default categoriesRouter;
