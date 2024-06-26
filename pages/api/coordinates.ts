import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../src/app/components/prismaClient/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const coordinates = await prisma.coords.findMany()
    res.status(200).json(coordinates)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch coordinates' })
  }
}
