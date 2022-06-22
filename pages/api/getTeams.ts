// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { TeamType } from '../../types/TeamType'

import { teams_Bundesliga} from "../../data/Teams/teams_Bundesliga"
import { teams_Champions_League } from "../../data/Teams/teams_Champions_League"
import { teams_Premier_League } from "../../data/Teams/teams_Premier_League"
import { teams_Ligue_1 } from "../../data/Teams/teams_Ligue_1"
import { teams_Seri_A } from "../../data/Teams/teams_Seri_A"
import { teams_Liga } from "../../data/Teams/teams_Liga"
import { teams_World_Cup } from "../../data/Teams/teams_World_Cup"

type ResponseDataType = {
  data: TeamType[]
}

function filterByLeague (team:TeamType, query_league:any) {
  if (team.league.includes(query_league)) {
    return team
  }
}

const sortByName = (a:TeamType, b:TeamType) => {
  
  return a.short_name.localeCompare(b.short_name)
}


const all_Teams = [...teams_Bundesliga, ...teams_Champions_League, ...teams_Premier_League, ...teams_Ligue_1, ...teams_Seri_A, ...teams_Liga, ...teams_World_Cup];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataType>
  ) {
  const query_league = req.query.league
  const filteredTeams = all_Teams.filter(team => filterByLeague(team, query_league));

  const sortedTeams = filteredTeams.sort((a, b) => sortByName(a, b));
  
  res.status(200).json({ data: sortedTeams})
}
