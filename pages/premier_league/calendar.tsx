import React from 'react'
import Head from 'next/head'

import styles from "../../styles/pages/Calendar_pages.module.scss"

const CalendarPremierLeague = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Premier League | Calendrier</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div>Calendrier Premier League</div>
    </div>
  )
}

export default CalendarPremierLeague