import { Router } from 'express';
import * as GroupController from './controller';

const routes = new Router();

routes.post('/groups', GroupController.createGroup)
routes.get('/groups', GroupController.getAllGroups)

export default routes;