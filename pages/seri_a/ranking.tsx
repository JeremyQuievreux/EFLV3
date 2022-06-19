import React from 'react'
import Head from 'next/head'
import styles from "../../styles/pages/Ranking_pages.module.scss"


const RankingSeriA = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Seri A | Classement</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div>Classement Seri A</div>
    </div>
  )
}

export default RankingSeriA