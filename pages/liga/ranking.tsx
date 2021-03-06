import React from 'react'
import Head from 'next/head'
import styles from "../../styles/pages/Ranking_pages.module.scss"


const RankingLiga = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Liga | Classement</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div>Classement Liga</div>
    </div>
  )
}

export default RankingLiga