import express, { Express, Response } from "express"
import dotenv from "dotenv"
import logger from "morgan"
import debugLib from "debug"
import helmet from "helmet"
import cors from "cors"
import rateLimit from "express-rate-limit"
import cvRouter from "./routes/cv.routes"

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000
const debug = debugLib("cv-app:server")

// Security and middleware
app.disable("x-powered-by")
app.use(logger("dev"))
app.use(helmet())
app.use(cors({ origin: "*" }))

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})
app.use(limiter)

// Routes
app.use("/api", cvRouter)

app.get("/", (_, res: Response) => {
  res.status(200).json({ message: "Ok" })
})

// 404 Handler
app.use((_, res: Response) => {
  res.status(404).json({
    message: "Route not found",
  })
})

// Start the server
const server = app
  .listen(port, () => {
    debug(`[server]: Server is running at port ${port}`)
  })
  .on("error", (error) => {
    debug(`Server error: ${error.message}`)
    throw new Error(error.message)
  })

export default server
