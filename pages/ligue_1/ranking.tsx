import React, { useEffect , useState} from 'react'
import Head from 'next/head'
import axios from 'axios'

import styles from "../../styles/pages/Ranking_pages.module.scss"

import { RankingType } from '../../types/RankingType'

import Rankline from '../../comps/Rankline'


const RankingLigue1 = () => {
  const [ ranking, setRanking ] = useState<RankingType[]>()

  useEffect(() => {
    axios.get('/api/getRanking',{
      params:{
        league : "Ligue 1",
      }
    })
      .then(res => {
        setRanking(res.data.data)
      })
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Ligue 1 | Classement</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div>Classement ligue 1</div>
      <div>Work In Progress...</div>
      <div className={styles.ranklines_container}>
        <div className={styles.rankline}>
          <p className={styles.rankline_number}>N°</p>
          <p className={styles.rankline_team_name}>Equipes</p>
          <p className={styles.rankline_team_points}>Pts</p>
          <p className={styles.rankline_played_match}>J</p>
          <p className={styles.rankline_win_match}>G</p>
          <p className={styles.rankline_drawn_match}>N</p>
          <p className={styles.rankline_loose_match}>P</p>
          <p className={styles.rankline_goal_for}>BP</p>
          <p className={styles.rankline_goal_against}>BC</p>
          <p className={styles.rankline_goal_difference}>Dif</p>
        </div>
        {ranking && ranking.map((rankline, index) => {
          return (
            <Rankline key={index} index={index} rankline={rankline} />
          )
        })}
      </div>
    </div>
  )
}

export default RankingLigue1