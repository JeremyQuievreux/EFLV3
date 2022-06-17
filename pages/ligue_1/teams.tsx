import React from 'react'
import Head from 'next/head'

import styles from "../../styles/pages/Teams_pages.module.scss"

const TeamsLigue1 = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Ligue 1 | Equipes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div>Equipes de ligue 1</div>
    </div>
  )
}

export default TeamsLigue1