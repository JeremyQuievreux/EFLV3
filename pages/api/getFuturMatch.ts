// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { calendar_Ligue_1 }  from '../../data/calendar/calendar_Ligue_1';
import { calendar_Premier_League } from '../../data/calendar/calendar_Premier_League';

import { MatchType } from '../../types/MatchType';

const allMatch = [...calendar_Ligue_1, ...calendar_Premier_League];

type ResponseDataType = {
  data: MatchType[]
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

  const filteredMatch = allMatch.filter(match => filterByLeague(match, league));
  const futurMatchs = filteredMatch.filter((match) => filterByDate(match, <string>date));

  res.status(200).json({ data: futurMatchs})
}
