import React from 'react'
import Head from 'next/head'

import styles from "../../styles/pages/Teams_pages.module.scss"

const TeamsBundesliga = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Bundesliga | Equipes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div>Equipes de Bundesliga</div>
    </div>
  )
}

export default TeamsBundesliga