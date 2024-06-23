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

    return user
  } catch (error) {
    console.error(error)
  }
}

export const getProfileData = async (userId: number) => {
  try {
    const profile = await prisma.users.findUnique({
      where: {
        id: userId,
      },
      include: {
        profiles: true,
      },
    })

    if (!profile || !profile.profiles) return null

    const { id, name, email, profiles } = profile
    const { phone, location, url, title, summary } = profiles

    return {
      id,
      name,
      email,
      phone,
      location,
      url,
      title,
      summary,
    }
  } catch (error) {
    console.error(error)
  }
}

export const getExperienceData = async (userId: number) => {
  try {
    const experience = await prisma.experiences.findMany({
      where: { user_id: userId },
      select: {
        id: true,
        title: true,
        company: true,
        location: true,
        start_month: true,
        start_year: true,
        end_month: true,
        end_year: true,
        description: true,
      },
    })

    return experience
  } catch (error) {
    console.error(error)
  }
}

export const getEducationData = async (userId: number) => {
  try {
    const education = await prisma.educations.findMany({
      where: { user_id: userId },
      select: {
        id: true,
        degree: true,
        institution: true,
        start_year: true,
        end_year: true,
      },
    })

    return education
  } catch (error) {
    console.error(error)
  }
}

export const getCoursesData = async (userId: number) => {
  try {
    const course = await prisma.courses.findMany({
      where: { user_id: userId },
      select: {
        id: true,
        name: true,
        provider: true,
        url: true,
        start_month: true,
        start_year: true,
        end_month: true,
        end_year: true,
      },
    })

    return course
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
