import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import axios from 'axios'

import styles from "../../styles/pages/League_pages.module.scss"

import logo_world_cup from '../../img/logo_world_cup.png'
import icon_calendar from '../../img/icon_calendar.png'
import icon_classement from '../../img/icon_classement.png'
import icon_resultats from '../../img/icon_result.png'
import icon_teams from '../../img/icon_teams.png'

const WorldCup = () => {

  return (
    <div className={styles.main_container}>
      <Head>
        <title>EFL | World Cup | Accueil</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div className={styles.logo_container}>
        <Image src={logo_world_cup}/>
      </div>
      <div className={styles.cards_container}>
        <Link href="/world_cup/results">
        <div className={styles.card}>
          <div className={styles.icon_container}>
            <Image src={icon_resultats}/>
          </div>
          <h2>Résultats</h2>
        </div>
        </Link>
        <Link href="/world_cup/ranking">
        <div className={styles.card}>
          <div className={styles.icon_container}>
            <Image src={icon_classement}/>
          </div>
          <h2>Classement</h2>
        </div>
        </Link>
        <Link href="/world_cup/calendar">
        <div className={styles.card}>
          <div className={styles.icon_container}>
            <Image src={icon_calendar}/>
          </div>
          <h2>Calendrier</h2>
        </div>
        </Link>
        <Link href="/world_cup/teams">
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

export default WorldCup