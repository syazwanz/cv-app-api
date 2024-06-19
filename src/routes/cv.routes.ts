import { Router } from "express"
import {
  getCourse,
  getCv,
  getEducation,
  getExperience,
  getProfile,
  getSkill,
} from "../controllers/cv.controller"

const router: Router = Router()
const cv_router: Router = Router()

router.use("/cv", cv_router)

cv_router.get("/:id", getCv)
cv_router.get("/profile/:id", getProfile)
cv_router.get("/skill/:id", getSkill)
cv_router.get("/experience/:id", getExperience)
cv_router.get("/education/:id", getEducation)
cv_router.get("/course/:id", getCourse)

export default router
