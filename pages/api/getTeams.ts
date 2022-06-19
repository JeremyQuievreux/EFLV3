// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Teams from '../../data/teams'

type Data = {
  data: any[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.query.league);

  const filteredTeams = Teams.filter(team => team.league === req.query.league);
  
  res.status(200).json({ data: filteredTeams})
}
