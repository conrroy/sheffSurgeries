import client from '@prisma/client'
const { PrismaClient } = client
const DB = new PrismaClient()
export { DB }