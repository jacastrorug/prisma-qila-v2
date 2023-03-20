import type { NextApiRequest, NextApiResponse } from 'next';
import { Database } from "../../../database/Database";


type Data = {
  name: string
}

const allServices = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const allEntries = await Database.getAllServices();

  res.statusCode = 200
  res.setHeader("Content-type", "application/json")
  res.end(JSON.stringify({ services: allEntries }))
}

export default allServices;
