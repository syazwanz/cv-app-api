import request from "supertest"
import { PrismaClient } from "@prisma/client"
import server from "../../src/index"

const prisma = new PrismaClient()

describe("CV API Integration Tests", () => {
  beforeAll(async () => {
    await prisma.$connect()
  })

  afterAll(async () => {
    await prisma.$disconnect()
    server.close()
  })

  it("should fetch user CV data", async () => {
    const res = await request(server).get("/api/cv/1")

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Object)
    expect(res.body).toHaveProperty("profiles")
    expect(res.body).toHaveProperty("skills")
    expect(res.body).toHaveProperty("educations")
    expect(res.body).toHaveProperty("experiences")
    expect(res.body).toHaveProperty("courses")
  })

  it("should fetch user profile data", async () => {
    const res = await request(server).get("/api/cv/profile/1")
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Object)
    expect(res.body).toHaveProperty("phone", "+60 19 884 0908")
    expect(res.body).toHaveProperty("location", "Selangor, Malaysia")
    expect(res.body).toHaveProperty("url", "https://syazwan.xyz")
    expect(res.body).toHaveProperty(
      "title",
      "Software Engineer / Front End Developer"
    )
    expect(res.body).toHaveProperty("summary")
  })

  it("should fetch user education data", async () => {
    const res = await request(server).get("/api/cv/education/1")
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
    expect(res.body).toHaveLength(2)
    expect(res.body[0]).toHaveProperty(
      "institution",
      "Universiti Sains Malaysia"
    )
    expect(res.body[0]).toHaveProperty("degree", "MSc. in Chemical Engineering")
    expect(res.body[0]).toHaveProperty("start_year", 2012)
    expect(res.body[0]).toHaveProperty("end_year", 2013)
    expect(res.body[1]).toHaveProperty(
      "institution",
      "Universiti Teknologi PETRONAS"
    )
    expect(res.body[1]).toHaveProperty(
      "degree",
      "Bachelor of Engineering (Hons.) Chemical"
    )
    expect(res.body[1]).toHaveProperty("start_year", 2008)
    expect(res.body[1]).toHaveProperty("end_year", 2012)
  })

  it("should fetch user courses data", async () => {
    const res = await request(server).get("/api/cv/course/1")

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
    expect(res.body).toHaveLength(2)
    expect(res.body[0]).toHaveProperty("name", "Full Stack Bootcamp")
    expect(res.body[0]).toHaveProperty("provider", "getCTO")
    expect(res.body[0]).toHaveProperty("url", "https://getcto.asia")
    expect(res.body[0]).toHaveProperty("start_month", 6)
    expect(res.body[0]).toHaveProperty("start_year", 2020)
    expect(res.body[0]).toHaveProperty("end_month", 8)
    expect(res.body[0]).toHaveProperty("end_year", 2020)
    expect(res.body[1]).toHaveProperty(
      "name",
      "Data Science 360 Certification Program"
    )
    expect(res.body[1]).toHaveProperty("provider", "LEAD")
    expect(res.body[1]).toHaveProperty("url", "https://thelead.io")
    expect(res.body[1]).toHaveProperty("start_month", 7)
    expect(res.body[1]).toHaveProperty("start_year", 2019)
    expect(res.body[1]).toHaveProperty("end_month", 7)
    expect(res.body[1]).toHaveProperty("end_year", 2019)
  })

  it("should fetch user experiences data", async () => {
    const res = await request(server).get("/api/cv/experience/1")
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
    expect(res.body).toHaveLength(4)
    expect(res.body[0]).toHaveProperty("company", "INVOKE Solutions Sdn Bhd")
    expect(res.body[0]).toHaveProperty("location", "Kuala Lumpur")
    expect(res.body[0]).toHaveProperty("title", "Software Engineer")
    expect(res.body[0]).toHaveProperty("start_month", 6)
    expect(res.body[0]).toHaveProperty("start_year", 2020)
    expect(res.body[0]).toHaveProperty("description")
    expect(res.body[1]).toHaveProperty(
      "company",
      "Amgen Singapore Manufacturing"
    )
    expect(res.body[1]).toHaveProperty("location", "Singapore")
    expect(res.body[1]).toHaveProperty("title", "Process Engineer")
    expect(res.body[1]).toHaveProperty("start_month", 9)
    expect(res.body[1]).toHaveProperty("start_year", 2016)
    expect(res.body[1]).toHaveProperty("end_month", 8)
    expect(res.body[1]).toHaveProperty("end_year", 2019)
    expect(res.body[1]).toHaveProperty("description")
    expect(res.body[2]).toHaveProperty("company", "Biocon Sdn Bhd")
    expect(res.body[2]).toHaveProperty("location", "Johor, Malaysia")
    expect(res.body[2]).toHaveProperty("title", "Senior Associate")
    expect(res.body[2]).toHaveProperty("start_month", 9)
    expect(res.body[2]).toHaveProperty("start_year", 2013)
    expect(res.body[2]).toHaveProperty("end_month", 8)
    expect(res.body[2]).toHaveProperty("end_year", 2016)
    expect(res.body[2]).toHaveProperty("description")
    expect(res.body[3]).toHaveProperty("company", "PETRONAS Fertilizer Kedah")
    expect(res.body[3]).toHaveProperty("location", "Kedah, Malaysia")
    expect(res.body[3]).toHaveProperty("title", "Intern")
    expect(res.body[3]).toHaveProperty("start_month", 6)
    expect(res.body[3]).toHaveProperty("start_year", 2010)
    expect(res.body[3]).toHaveProperty("end_month", 1)
    expect(res.body[3]).toHaveProperty("end_year", 2011)
    expect(res.body[3]).toHaveProperty("description")
  })

  it("should fetch user skills data", async () => {
    const res = await request(server).get("/api/cv/skill/1")
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
    expect(res.body).toHaveLength(4)

    const frontendSkills = res.body.find(
      (category: any) => category.category === "Frontend"
    )

    console.log(frontendSkills)

    expect(frontendSkills).toBeDefined()
    expect(frontendSkills.list).toContain("HTML")
    expect(frontendSkills.list).toContain("CSS")
    expect(frontendSkills.list).toContain("JavaScript")
    expect(frontendSkills.list).toContain("React")

    const backendSkills = res.body.find(
      (category: any) => category.category === "Backend"
    )
    expect(backendSkills).toBeDefined()
    expect(backendSkills.list).toContain("Node.js")
    expect(backendSkills.list).toContain("Express.js")

    const databaseSkills = res.body.find(
      (category: any) => category.category === "Database"
    )
    expect(databaseSkills).toBeDefined()
    expect(databaseSkills.list).toContain("MySQL")
    expect(databaseSkills.list).toContain("MongoDB")

    const otherSkills = res.body.find(
      (category: any) => category.category === "Other"
    )
    expect(otherSkills).toBeDefined()
    expect(otherSkills.list).toContain("Cloudflare")
    expect(otherSkills.list).toContain("GitHub")
  })
})
