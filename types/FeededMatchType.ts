import { TeamType } from "./TeamType"

export type FeededMatchType = {
    id: string,
    league: string,
    info: string,
    date: string,
    home_team?: TeamType,
    home_score: string,
    away_team?: TeamType,	
    away_score: string,
    finished: boolean,
  }