import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"

dotenv.config({ path: "./.env.test" })

const prisma = new PrismaClient()

beforeAll(async () => {
  await prisma.$connect()
})

afterAll(async () => {
  await prisma.$disconnect()
  await prisma.$executeRaw`DROP DATABASE IF EXISTS tests;`
  await prisma.$executeRaw`CREATE DATABASE tests;`
})
