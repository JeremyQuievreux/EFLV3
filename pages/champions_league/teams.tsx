import React from 'react'
import Head from 'next/head'

import styles from "../../styles/pages/Teams_pages.module.scss"

const TeamsChampionsLeague = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Champions League | Equipes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div>Equipes de Champions League</div>
    </div>
  )
}

export default TeamsChampionsLeague