// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { calendar_Ligue_1 }  from '../../data/Calendar/calendar_Ligue_1';
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

const allMatch = [...calendar_Ligue_1, ...calendar_Premier_League, ...calendar_Bundesliga, ...calendar_Liga, ...calendar_Seri_A];
const allTeams = [...teams_Ligue_1, ...teams_Premier_League, ...teams_Bundesliga, ...teams_Liga, ...teams_Seri_A];

type ResponseDataType = {
  data: FeededMatchType[]
}

function createDateFromString(dateString: string, timeString: string) {
    const splitted_date = dateString.split("/");
    const splitted_time = timeString.split(":");
    const final_date = new Date(Number(splitted_date[2]), Number(splitted_date[1]) - 1, Number(splitted_date[0]), Number(splitted_time[0]), Number(splitted_time[1]));
        
    return final_date.getTime()/1000;
}

function filterByLeague (match:MatchType, query_league:any) {
    if (match.league.includes(query_league)) {
      return match
    }
}

function filterByDate (match:MatchType, query_date:string, query_time:string) {
    const finalQueryDate = createDateFromString(query_date, query_time);
    const finalMatchDate = createDateFromString(match.date, match.time);
    if (finalMatchDate > finalQueryDate) {
        return match
    }
}

export default function handler(req: NextApiRequest,res: NextApiResponse<ResponseDataType>) {
  const league = req.query.league
  const date_time = req.query.date

  const query_date = (<string>date_time).split(" ")[0];
  const query_time = (<string>date_time).split(" ")[1];

  const filteredMatchByLeague = allMatch.filter(match => filterByLeague(match, league));
  const allNextMatch = filteredMatchByLeague.filter((match) => filterByDate(match, <string>query_date, <string>query_time));

  const allNextMatchFeeded = allNextMatch.map((match) => {
    return {
      ...match,
      home_team: allTeams.find((team) => team.short_name === match.home_team),
      away_team: allTeams.find((team) => team.short_name === match.away_team)
    }
  })

  res.status(200).json({ data: allNextMatchFeeded})
}
