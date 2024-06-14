import { Router } from "express"
import { getCv } from "../controllers/cv.controller"

const router: Router = Router()

router.get("/cv", getCv)

export default router
