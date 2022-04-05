import { DB } from "../db/db.js"
import JWT from 'jsonwebtoken'
import config from "../config/default.config.js";

export default (route) => {
  // login
  route.post('/login', async (ctx) => {
    const { remember, ...body } = ctx.request.body
    const user = await DB.Receptionist.findFirst({
      where: body,
    })

    if (user) {
      delete user.password
      const token = JWT.sign(user, config.jwt.secret, { expiresIn: '2d' })
      ctx.set('Authorization', `Bearer ${token}`)
      ctx.body = user
    } else {
      ctx.throw(403, 'Failed to login in,Incorrect password or username')
    }
  })
  // register
  route.post('/register', async (ctx) => {
    const body = ctx.request.body
    try {
      console.log(body);
      const res = await DB.Receptionist.create({
        data: body
      })
      delete res.password
      const token = JWT.sign(res, config.jwt.secret, { expiresIn: '2d' })
      ctx.set('Authorization', `Bearer ${token}`)
      ctx.body = res
    } catch (error) {
      console.log(error);
      ctx.throw(403, 'Fail to create user please use another username')
    }
  })
  //get user profile
  route.post('/getProfile', async (ctx) => {
    const user = ctx.state.user
    if (user) {
      ctx.body = user
    } else {
      ctx.throw(401)
    }
  })
}