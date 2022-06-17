import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from "../../styles/pages/League_pages.module.scss"

import logo_ligue1 from '../../img/logo_ligue1.png'
import icon_calendar from '../../img/icon_calendar.png'
import icon_classement from '../../img/icon_classement.png'
import icon_resultats from '../../img/icon_result.png'
import icon_teams from '../../img/icon_teams.png'

const Ligue1 = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.logo_container}>
        <Image src={logo_ligue1}/>
      </div>
      <div className={styles.cards_container}>
        <Link href="/ligue_1/results">
        <div className={styles.card}>
          <div className={styles.icon_container}>
            <Image src={icon_resultats}/>
          </div>
          <h2>Résultats</h2>
        </div>
        </Link>
        <Link href="/ligue_1/ranking">
        <div className={styles.card}>
          <div className={styles.icon_container}>
            <Image src={icon_classement}/>
          </div>
          <h2>Classement</h2>
        </div>
        </Link>
        <Link href="/ligue_1/calendar">
        <div className={styles.card}>
          <div className={styles.icon_container}>
            <Image src={icon_calendar}/>
          </div>
          <h2>Calendrier</h2>
        </div>
        </Link>
        <Link href="/ligue_1/teams">
        <div className={styles.card}>
          <div className={styles.icon_container}>
            <Image src={icon_teams}/>
          </div>
          <h2>Equipes</h2>
        </div>
        </Link>
        </div>

    </div>
  )
}

export default Ligue1