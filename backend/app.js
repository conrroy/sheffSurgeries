import Koa from 'koa'
import koaBody from 'koa-body'
import router from './router/index.js'
import { JwtMiddleWare } from './middleware/jwt.middleware.js'

import { PackData } from './middleware/pack.data.middleware.js'
const app = new Koa();

// use middleware
app.use(JwtMiddleWare);
app.use(PackData)
app.use(koaBody());
app.use(router.routes())


app.listen(3000);