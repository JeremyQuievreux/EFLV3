// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Teams from '../../data/teams'

import { TeamType } from '../../types/TeamType'

type Data = {
  data: any[]
}

function filterByLeague (team:TeamType, query_league:any) {
  if (team.league.includes(query_league)) {
    return team
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
  const query_league = req.query.league
  const filteredTeams = Teams.filter(team => filterByLeague(team, query_league));
  
  res.status(200).json({ data: filteredTeams})
}
