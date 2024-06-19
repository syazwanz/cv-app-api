import cvdata from "../data/cv.json"

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const getCvData = async (userId: number) => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
      include: {
        profiles: true,
        experiences: true,
        educations: true,
        courses: true,
        skills: true,
      },
    })

    return { user }
  } catch (error) {
    console.error(error)
  }
}

export const getProfileData = async (userId: number) => {
  try {
    const profile = await prisma.profiles.findUnique({
      where: {
        user_id: userId,
      },
    })

    return profile
  } catch (error) {
    console.error(error)
  }
}

export const getExperienceData = async (userId: number) => {
  try {
    const experience = await prisma.experiences.findMany({
      where: { user_id: userId },
    })

    return experience
  } catch (error) {
    console.error(error)
  }
}

export const getEducationData = async (userId: number) => {
  try {
    const experience = await prisma.educations.findMany({
      where: { user_id: userId },
    })

    return experience
  } catch (error) {
    console.error(error)
  }
}

export const getCoursesData = async (userId: number) => {
  try {
    const experience = await prisma.courses.findMany({
      where: { user_id: userId },
    })

    return experience
  } catch (error) {
    console.error(error)
  }
}

export const getSkillData = async (userId: number) => {
  try {
    const skills = await prisma.skills.findMany({
      where: {
        user_id: userId,
      },
      include: {
        category: true,
      },
    })

    const groupedSkills = skills.reduce((acc: any, skill) => {
      const category = skill.category.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(skill.skill)
      return acc
    }, {})

    const formattedSkills = Object.keys(groupedSkills).map(
      (category, index) => ({
        id: index + 1,
        category,
        list: groupedSkills[category],
      })
    )

    return formattedSkills
  } catch (error) {
    console.error(error)
  }
}
