import { DB } from "../db/db.js"
import JWT from 'jsonwebtoken'
import config from "../config/default.config.js";

export default (route) => {
  // login
  route.post('/login', async (ctx) => {
    const { role, ...body } = ctx.request.body
    let Model
    if (role == "receptionist") {
      Model = DB.Receptionist
    } else if (role == "doctor") {
      Model = DB.Doctor
    }
    const user = await Model.findFirst({
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
    const { role, ...body } = ctx.request.body
    let Model
    if (role === "Nurse") {
      Model = DB.nurse
    } else if (role === "Doctor") {
      Model = DB.doctor
    } else if (role == "Patient") {
      Model = DB.patient
    } else {
      Model = DB.receptionist
    }
    try {
      console.log(body, '-----------');
      const res = await Model.create({
        data: body
      })
      delete res.password
      const token = JWT.sign(res, config.jwt.secret, { expiresIn: '2d' })
      if (!role) {
        ctx.set('Authorization', `Bearer ${token}`)
      }
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
  route.post('/add-user', (ctx) => {
    const { } = ctx.request.body

  })

  route.post('/queryPatient', async (ctx) => {
    const { id } = ctx.request.body
    let Model = DB.patient

    let res = await Model.findFirst({
      id: id
    })
    ctx.body = res
  })

  route.post('/queryPrescriptions', async (ctx) => {
    const body = ctx.request.body
    let Model = DB.prescription
    let res = await Model.findMany({
      where: body
    })
    ctx.body = res
  })

  route.post('/createPrescriptions', async (ctx) => {
    const { ...body } = ctx.request.body
    let Model = DB.prescription
    const res = await Model.create({
      data: body
    })

    ctx.body = res
  })

  // route.post('/createPrescriptions', async (ctx) => {
  //   const {...body} = ctx.request.body
  //   let Model = DB.prescription
  //   const res = await Model.create({
  //     data:body
  //   })

  //   ctx.body = res
  // })
}