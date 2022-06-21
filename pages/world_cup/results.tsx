import React from 'react'
import Head from 'next/head'
import styles from "../../styles/pages/Results_pages.module.scss"


const ResultsWorldCup = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | World Cup | Résultats</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div>Résultat World Cup</div>
    </div>
  )
}

export default ResultsWorldCup