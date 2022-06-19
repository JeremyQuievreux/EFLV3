import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

import { TeamType } from '../../types/TeamType'

import TeamCard from '../../comps/TeamCard'

import styles from "../../styles/pages/Teams_pages.module.scss"

const TeamsSeriA = () => {
  const [ teams , setTeams ] = useState<TeamType[]>()

  useEffect(() => {
    axios.get('/api/getTeams',{
      params:{
        league : "Seri A"
      }
    })
      .then(res => {
        setTeams(res.data.data)
      })
  },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Seri A | Equipes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <div className={styles.cards_container}>
      {teams && teams.map((team)=> {
        return(
          <TeamCard key={team.id} team={team}/>
        )
      })}
      </div>
    </div>
  )
}

export default TeamsSeriA