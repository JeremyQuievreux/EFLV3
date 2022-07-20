import React from 'react'
import styles from '../styles/comps/Rankline.module.scss'

import { RankingType } from '../types/RankingType'

type RanklineProps = {
    rankline: RankingType,
    index: number
}

const Rankline = ({rankline, index}:RanklineProps) => {
  return (
    <div className={styles.rankline}>
        <p className={styles.rankline_number}>{index + 1}</p>
        <p className={styles.rankline_team_name}>{rankline.team_name}</p>
        <p className={styles.rankline_team_points}>{rankline.points}</p>
        <p className={styles.rankline_played_match}>{rankline.played}</p>
        <p className={styles.rankline_win_match}>{rankline.won}</p>
        <p className={styles.rankline_drawn_match}>{rankline.drawn}</p>
        <p className={styles.rankline_loose_match}>{rankline.lost}</p>
        <p className={styles.rankline_goal_for}>{rankline.goals_for}</p>
        <p className={styles.rankline_goal_against}>{rankline.goals_against}</p>
        <p className={styles.rankline_goal_difference}>{rankline.goal_difference}</p>
    </div>
  )
}

export default Rankline