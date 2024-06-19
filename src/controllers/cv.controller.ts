import { Request, Response } from "express"
import {
  getCoursesData,
  getCvData,
  getEducationData,
  getExperienceData,
  getProfileData,
  getSkillData,
} from "../services/cv.service"

export const getCv = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id)
    const user = await getCvData(userId)

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Something went wrong" })
  }
}

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id)
    const profile = await getProfileData(userId)

    if (!profile) {
      return res.status(404).json({ error: "User not found" })
    }

    res.status(200).json(profile)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Something went wrong" })
  }
}

export const getExperience = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id)
    const experience = await getExperienceData(userId)

    if (!experience) {
      return res.status(404).json({ error: "User not found" })
    }

    res.status(200).json(experience)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Something went wrong" })
  }
}
export const getEducation = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id)
    const experience = await getEducationData(userId)

    if (!experience) {
      return res.status(404).json({ error: "User not found" })
    }

    res.status(200).json(experience)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Something went wrong" })
  }
}
export const getCourse = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id)
    const experience = await getCoursesData(userId)

    if (!experience) {
      return res.status(404).json({ error: "User not found" })
    }

    res.status(200).json(experience)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Something went wrong" })
  }
}

export const getSkill = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id)
    const experience = await getSkillData(userId)

    if (!experience) {
      return res.status(404).json({ error: "User not found" })
    }

    res.status(200).json(experience)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Something went wrong" })
  }
}
