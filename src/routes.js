import { Router } from 'express';
import { route } from 'express/lib/router';

import auth from './middlewares/auth';
import HelloController from './controllers/HelloController';
import UsersController from './controllers/UsersController';
import RepositoriesController from './controllers/RepositoriesController';
import SessionController from './controllers/SessionsController';

const routes = new Router();

//Public Controllers

//Middlewares


//Private Controllers
routes.put('/sessions', SessionController.create);

//Test Route
routes.get('/hello', HelloController.index);

routes.use(auth);

//Users Routes
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

//Repository routes
routes.get('/users/:user_id/repositories', RepositoriesController.index);
routes.post('/users/:user_id/repositories', RepositoriesController.create);
routes.delete('/users/:user_id/repositories', RepositoriesController.destroy);


export default routes;