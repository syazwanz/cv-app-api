import { Request, Response } from "express"
import debugLib from "debug"
import { getCvData } from "../services/cv.service"

const debug = debugLib("cv-app:cv-controller")

export const getCv = (_: Request, res: Response) => {
  debug("Fetching CV data")
  const data = getCvData()
  res.status(200).json(data)
}
