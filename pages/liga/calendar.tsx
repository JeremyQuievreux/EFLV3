import React from 'react'
import Head from 'next/head'

import styles from "../../styles/pages/Calendar_pages.module.scss"

const CalendarLiga = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Liga | Calendrier</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div>Calendrier Liga</div>
    </div>
  )
}

export default CalendarLiga