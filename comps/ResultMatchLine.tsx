import React from 'react'

import { FeededMatchType } from '../types/FeededMatchType'

import styles from '../styles/comps/ResultMatchLine.module.scss'

type FuturMatchLineProps = {
    match: FeededMatchType
}

const ResultMatchLine = ({match}:FuturMatchLineProps) => {
  return (
    <div className={styles.match_line_container}>
        <div className={styles.home_team_container}>
            <div className={styles.home_team_logo_container}>
                <img  src={match.home_team?.logo} alt="" />
            </div>
            <p className={styles.home_team_name}>{match.home_team?.short_name}</p>
            <p className={styles.home_score}>{match.home_score}</p>
        </div>
        <p className={styles.teams_separator}> - </p>
        <div className={styles.away_team_container}>
            <div className={styles.away_team_logo_container}>
                <img  src={match.away_team?.logo} alt="" />
            </div>
            <p className={styles.away_team_name}>{match.away_team?.short_name}</p>
            <p className={styles.away_score}>{match.away_score}</p>
        </div>
    </div>
  )
}

export default ResultMatchLine