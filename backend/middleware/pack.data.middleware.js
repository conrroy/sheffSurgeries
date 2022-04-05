const PackData = async (ctx, next) => {
  await next()
  const body = ctx.body;
  if (ctx.status === 200 && body) {
    ctx.body = {
      code: ctx.status,
      data: body,
    };
  }
}

export {
  PackData
}