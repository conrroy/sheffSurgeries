import config from "../config/default.config.js";
import KoaJwt from 'koa-jwt'

// whitelist
const whitelist = /^\/(login|register)/
const JwtMiddleWare = KoaJwt({ secret: config.jwt.secret }).unless({
  custom(ctx) {
    const url = ctx.url
    return whitelist.test(url)
  }
})

export {
  JwtMiddleWare
}