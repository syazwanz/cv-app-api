import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  const fe = await prisma.skill_categories.create({
    data: { category: "Frontend" },
  })

  const be = await prisma.skill_categories.create({
    data: { category: "Backend" },
  })

  const db = await prisma.skill_categories.create({
    data: { category: "Database" },
  })

  const other = await prisma.skill_categories.create({
    data: { category: "Other" },
  })

  const user = await prisma.users.create({
    data: {
      name: "Mohamad Syazwan B Ahmad Zubir",
      email: "mohamadsyazwan.az@gmail.com",
      profiles: {
        create: {
          phone: "+60 19 884 0908",
          url: "https://syazwan.xyz",
          location: "Selangor, Malaysia",
          title: "Software Engineer / Front End Developer",
          summary:
            "As a software engineer, I bring a unique background in chemical engineering, where I worked for 6 years before transitioning to software development in 2020. I have attended courses and bootcamp to enhance my skills, with a focus on Frontend development. I am also committed to continuing my learning journey and expanding my knowledge to become a full stack engineer. I am open to learn new tech stacks and always eager to take on challenging assignments that push me to develop new skills.",
        },
      },
      educations: {
        create: [
          {
            institution: "Universiti Sains Malaysia",
            degree: "MSc. in Chemical Engineering",
            start_year: 2012,
            end_year: 2013,
          },
          {
            institution: "Universiti Teknologi PETRONAS",
            degree: "Bachelor of Engineering (Hons.) Chemical",
            start_year: 2008,
            end_year: 2012,
          },
        ],
      },
      courses: {
        create: [
          {
            name: "Full Stack Bootcamp",
            provider: "getCTO",
            url: "https://getcto.asia",
            start_month: 6,
            start_year: 2020,
            end_month: 8,
            end_year: 2020,
          },
          {
            name: "Data Science 360 Certification Program",
            provider: "LEAD",
            url: "https://thelead.io",
            start_month: 7,
            start_year: 2019,
            end_month: 7,
            end_year: 2019,
          },
        ],
      },
      experiences: {
        create: [
          {
            company: "INVOKE Solutions Sdn Bhd",
            location: "Kuala Lumpur",
            title: "Software Engineer",
            start_month: 6,
            start_year: 2020,
            end_month: null,
            end_year: null,
            description:
              "<ul><li><strong>Leadership and Project Coordination:</strong> Led the development of both internal products and client-specific projects, working closely with product managers and UI/UX designers to deliver functional solutions on schedule.</li><li><strong>In-House Product Development:</strong><ul><li><strong>ADNEXIO:</strong> Served as a key member of the development team for ADNEXIO, a comprehensive job platform. Focused primarily on frontend development, while also contributing to API development and deployment to support team goals.</li></ul></li><li><strong>Project Contributions:</strong><ul><li><strong>Ayuh Malaysia:</strong> Developed a full-stack web application using React for the front-end and Node.js with Express.js for back-end services, handling features such as payment systems (eGHL), contact support, and volunteer registration.</li><li><strong>INVOKE Official Website:</strong> Developed and maintained the official website for INVOKE, using Next.js and Tailwind CSS for the front-end, and leveraging AWS SES for email services and Vercel for hosting.</li><li><strong>CISTA:</strong> A mobile application to facilitate volunteer activities related to Malaysia's elections, developed using React Native and Expo.</li><li><strong>Client Project (Confidential):</strong> Coordinated the full lifecycle of a client project, including API development with Node.js and MongoDB, and incorporated MinIO for object storage solutions. Set up a comprehensive deployment on an Ubuntu server using tools like Nginx and PM2 for stable performance.</li></ul></li></ul>",
          },
          {
            company: "Amgen Singapore Manufacturing",
            location: "Singapore",
            title: "Process Engineer",
            start_month: 9,
            start_year: 2016,
            end_month: 8,
            end_year: 2019,
            description:
              "<ul><li>Compiled and analyzed process data from various sources (OSIsoft PI, PAS-X MES, LIMS) for ongoing cGMP production of commercial protein biologics processes.</li><li>Developed Microsoft Excel macros program using VBA and Python to automate and expedite repeated tasks such as creating batch summary report, raw material tracking and data wrangling.</li></ul>",
          },
          {
            company: "Biocon Sdn Bhd",
            location: "Johor, Malaysia",
            title: "Senior Associate",
            start_month: 9,
            start_year: 2013,
            end_month: 8,
            end_year: 2016,
            description:
              "<ul><li>Executed the commissioning of a greenfield Insulin manufacturing plant, overseeing the integration of bioreactors and Emerson's DeltaV process control system.</li><li>Operated the plant to produce both validation and commercial batches of Insulin by closely monitored and controlled the process through the DCS system.</li></ul>",
          },
          {
            company: "PETRONAS Fertilizer Kedah",
            location: "Kedah, Malaysia",
            title: "Intern",
            start_month: 6,
            start_year: 2010,
            end_month: 1,
            end_year: 2011,
            description:
              "<ul><li>Assisted engineers and management with technical and clerical duties, including updating P&ID, documenting daily reports, data analysis and organizing presentations.</li><li>Participated in several technical projects such as CO2 compressor performance study and Urea granulation wet cleaning activities.</li></ul>",
          },
        ],
      },
      skills: {
        create: [
          { skill: "HTML", skill_categories_id: fe.id },
          { skill: "CSS", skill_categories_id: fe.id },
          { skill: "JavaScript", skill_categories_id: fe.id },
          { skill: "React", skill_categories_id: fe.id },
          { skill: "Next.js", skill_categories_id: fe.id },
          { skill: "Tailwind CSS", skill_categories_id: fe.id },
          { skill: "Material UI", skill_categories_id: fe.id },
          { skill: "React Native", skill_categories_id: fe.id },
          { skill: "Expo", skill_categories_id: fe.id },
          { skill: "Node.js", skill_categories_id: be.id },
          { skill: "Express.js", skill_categories_id: be.id },
          { skill: "MySQL", skill_categories_id: db.id },
          { skill: "MongoDB", skill_categories_id: db.id },
          { skill: "Cloudflare", skill_categories_id: other.id },
          { skill: "GitHub", skill_categories_id: other.id },
          {
            skill: "AWS (S3, SES, SQS, Lambda, Amplify, etc.)",
            skill_categories_id: other.id,
          },
          { skill: "Bugsnag", skill_categories_id: other.id },
        ],
      },
    },
  })

  console.log({ user })
  console.log("Database has been seeded")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
