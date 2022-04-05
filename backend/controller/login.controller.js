const LoginCtr = (route) => {
  route.post('/login', (ctx, next) => {
    ctx.body = 33
  })
}

export { LoginCtr }