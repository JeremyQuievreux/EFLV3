import React from 'react'
import Head from 'next/head'
import styles from "../../styles/pages/Ranking_pages.module.scss"


const RankingBundesliga = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Bundesliga | Classement</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div>Classement Bundesliga</div>
    </div>
  )
}

export default RankingBundesliga