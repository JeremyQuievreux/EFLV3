import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from "../../styles/pages/Results_pages.module.scss"

import axios from 'axios'
import { FeededMatchType } from '../../types/FeededMatchType'
import ResultMatchLine from '../../comps/ResultMatchLine'


const ResultsLiga = () => {
  const [allMatchs, setAllMatchs] = useState<FeededMatchType[]>()
  const [optionsList, setOptionsList] = useState<string[]>()

  const [optionSelected, setoptionSelected] = useState<string>("")
  const [matchsSelect, setMatchsSelect] = useState<FeededMatchType[]>()

  useEffect(() => {
    axios.get('/api/getLeagueLastMatchs', {
      params: {
        league: "Liga",
      }
    })
      .then(res => {
        setAllMatchs(res.data.data)
      })
  }, [])

  useEffect(() => {
    let days: string[] = []
    allMatchs?.map((match) => {
      if (!days.includes(match.info)) {
        days = [...days, match.info]
      }
    })
    setOptionsList(days)
  }, [allMatchs])

  useEffect(() => {
    const test = allMatchs?.filter((match) => {
      return match.info === optionSelected
    })
    setMatchsSelect(test)
  }, [optionSelected])

  const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setoptionSelected(e.target.value)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>EFL | Liga | Résultats</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_ball.ico" />
      </Head>
      <select className={styles.day_selector} name="day" id="day" value={optionSelected} onChange={(e) => handleChangeOption(e)}>
        <option value="">--- Choisir Journée ---</option>
        {optionsList?.map((optionValue) => {
          return <option key={optionValue} value={optionValue}>{optionValue}</option>
        })}
      </select>
      <div className={styles.matchs_container}>
        {matchsSelect && matchsSelect.map((match) => {
          return (
            <ResultMatchLine match={match} key={match.id} />
          )
        })
        }
      </div>
    </div>
  )
}

export default ResultsLiga