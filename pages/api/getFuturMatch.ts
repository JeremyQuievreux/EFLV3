// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { calendar_Ligue_1 }  from '../../data/Calendar/calendar_Ligue_1';
import { calendar_Premier_League } from '../../data/Calendar/calendar_Premier_League';
import { calendar_Bundesliga } from '../../data/Calendar/calendar_Bundesliga';

import { teams_Ligue_1 } from '../../data/Teams/teams_Ligue_1';
import { teams_Premier_League } from '../../data/Teams/teams_Premier_League';
import { teams_Bundesliga } from '../../data/Teams/teams_Bundesliga';

import { MatchType } from '../../types/MatchType';
import { FeededMatchType } from '../../types/FeededMatchType';

const allMatch = [...calendar_Ligue_1, ...calendar_Premier_League, ...calendar_Bundesliga];
const allTeams = [...teams_Ligue_1, ...teams_Premier_League, ...teams_Bundesliga];

type ResponseDataType = {
  data: FeededMatchType[]
}

function createDateFromString(dateString: string){
    const splitted_date = dateString.split("/");
    const final_date = new Date(Number(splitted_date[2]), Number(splitted_date[1]) - 1, Number(splitted_date[0]))
    return final_date.getTime()/1000;
}

function filterByLeague (match:MatchType, query_league:any) {
    if (match.league.includes(query_league)) {
      return match
    }
}

function filterByDate (match:MatchType, date:string) {
    const finalQueryDate = createDateFromString(date);
    const finalMatchDate = createDateFromString(match.date);    
    if (finalMatchDate > finalQueryDate) {
        return match
    }
}

export default function handler(req: NextApiRequest,res: NextApiResponse<ResponseDataType>) {
  const league = req.query.league
  const date = req.query.date

  const filteredMatchByLeague = allMatch.filter(match => filterByLeague(match, league));
  const allNextMatch = filteredMatchByLeague.filter((match) => filterByDate(match, <string>date));

  const allNextMatchFeeded = allNextMatch.map((match) => {
    return {
      ...match,
      home_team: allTeams.find((team) => team.short_name === match.home_team),
      away_team: allTeams.find((team) => team.short_name === match.away_team)
    }
  })

  res.status(200).json({ data: allNextMatchFeeded})
}
