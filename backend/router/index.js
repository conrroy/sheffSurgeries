import Router from '@koa/router'
import commonCtr from '../controller/common.controller.js';

const router = new Router();

commonCtr(router)

export default router