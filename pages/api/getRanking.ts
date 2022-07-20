// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { ranking_Ligue_1 } from '../../data/Ranking/ranking_Ligue_1'

import { RankingType } from '../../types/RankingType';

const all_Teams = [...ranking_Ligue_1];

type ResponseDataType = {
  data: RankingType[]
}

function filterByLeague (team:RankingType, query_league:any) {
  if (team.league.includes(query_league)) {
    return team
  }
}

const rankingSort = (a:RankingType, b:RankingType) => {
  
  return b.points - a.points || b.goal_difference - a.goal_difference || a.team_name.localeCompare(b.team_name)
}


export default function handler(req: NextApiRequest,res: NextApiResponse<ResponseDataType>) {
  const query_league = req.query.league
  const filteredTeams = all_Teams.filter(team => filterByLeague(team, query_league));

  const sortedTeams = filteredTeams.sort(rankingSort)
  
  res.status(200).json({ data: sortedTeams})
}
