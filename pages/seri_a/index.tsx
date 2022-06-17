import React from 'react'
import Image from 'next/image'

import styles from "../../styles/pages/League_pages.module.scss"


import logo_seri_a from '../../img/logo_seri_a.png'
import icon_calendar from '../../img/icon_calendar.png'
import icon_classement from '../../img/icon_classement.png'
import icon_resultats from '../../img/icon_result.png'
import icon_teams from '../../img/icon_teams.png'

const Seria = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.logo_container}>
        <Image src={logo_seri_a}/>
      </div>
      <div className={styles.cards_container}>
        <div className={styles.card}>
          <div className={styles.icon_container}>
            <Image src={icon_resultats}/>
          </div>
          <h2>Résultats</h2>
        </div>
        <div className={styles.card}>
          <div className={styles.icon_container}>
            <Image src={icon_classement}/>
          </div>
          <h2>Classement</h2>
        </div>
        <div className={styles.card}>
          <div className={styles.icon_container}>
            <Image src={icon_calendar}/>
          </div>
          <h2>Calendrier</h2>
        </div>
        <div className={styles.card}>
          <div className={styles.icon_container}>
            <Image src={icon_teams}/>
          </div>
          <h2>Equipes</h2>
        </div>
      </div>

    </div>
  )
}

export default Seria