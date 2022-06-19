import React from 'react'

import styles from '../styles/comps/TeamCard.module.scss'

import { TeamType } from '../types/TeamType'

type CardTeamProps = {
  team: TeamType
}

const TeamCard = ({team}:CardTeamProps) => {
  return (
    <div className={styles.card}>
        <div className={styles.card_logo}>
        <img src={team.logo} alt="" />
        </div>
        <p>{team.short_name}</p>
    </div>
  )
}

export default TeamCard