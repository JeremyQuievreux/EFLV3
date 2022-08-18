// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { calendar_Premier_League } from '../../data/Calendar/calendar_Premier_League';
import { calendar_Bundesliga } from '../../data/Calendar/calendar_Bundesliga';
import { calendar_Liga } from '../../data/Calendar/calendar_Liga';
import { calendar_Seri_A } from '../../data/Calendar/calendar_Seri_A';

import { teams_Ligue_1 } from '../../data/Teams/teams_Ligue_1';
import { teams_Premier_League } from '../../data/Teams/teams_Premier_League';
import { teams_Bundesliga } from '../../data/Teams/teams_Bundesliga';
import { teams_Liga } from '../../data/Teams/teams_Liga';
import { teams_Seri_A } from '../../data/Teams/teams_Seri_A';

import { MatchType } from '../../types/MatchType';
import { FeededMatchType } from '../../types/FeededMatchType';

import { global_FR } from '../../data/Calendar/FR/global_FR';
import { global_UK } from '../../data/Calendar/UK/global_UK';
import { global_IT } from '../../data/Calendar/IT/global_IT';

const allMatch = [...global_FR, ...global_UK, ...calendar_Bundesliga, ...calendar_Liga, ...global_IT];
const allTeams = [...teams_Ligue_1, ...teams_Premier_League, ...teams_Bundesliga, ...teams_Liga, ...teams_Seri_A];

type ResponseDataType = {
  data: FeededMatchType[]
}

function filterByLeague (match:MatchType, query_league:any) {
    if (match.league.includes(query_league) && match.finished === false) {
      return match
    }
}

export default function handler(req: NextApiRequest,res: NextApiResponse<ResponseDataType>) {
  const league = req.query.league

  const filteredMatchByLeague = allMatch.filter(match => filterByLeague(match, league));

  const allNextMatchFeeded = filteredMatchByLeague.map((match) => {
    return {
      ...match,
      home_team: allTeams.find((team) => team.short_name === match.home_team),
      away_team: allTeams.find((team) => team.short_name === match.away_team)
    }
  })
  res.status(200).json({ data: allNextMatchFeeded})
}
