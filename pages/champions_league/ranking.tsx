import React from 'react'
import Head from 'next/head'
import styles from "../../styles/pages/Ranking_pages.module.scss"


const RankingChampionsLeague = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Champions League | Classement</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div>Classement Champions League</div>
    </div>
  )
}

export default RankingChampionsLeague