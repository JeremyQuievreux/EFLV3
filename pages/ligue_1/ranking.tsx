import React from 'react'
import Head from 'next/head'
import styles from "../../styles/pages/Ranking_pages.module.scss"


const RankingLigue1 = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Ligue 1 | Classement</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div>Classement ligue 1</div>
    </div>
  )
}

export default RankingLigue1