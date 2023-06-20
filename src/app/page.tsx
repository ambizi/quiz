"use client"; 
import React, { useState } from 'react'
import Image from 'next/image'
import { imagens } from './uteis/helper'
import Header from './Components/Header'
import Article01 from './Components/Article01'
import Footer from './Components/Footer'
import Quiz_01 from './Components/Quiz/Quiz_01'
import Quiz_02 from './Components/Quiz/Quiz_02'
import Quiz_03 from './Components/Quiz/Quiz_03'
import Quiz_04 from './Components/Quiz/Quiz_04'
import Quiz_05 from './Components/Quiz/Quiz_05'
import Quiz_06 from './Components/Quiz/Quiz_06'
import Quiz_07 from './Components/Quiz/Quiz_07'
import Quiz_08 from './Components/Quiz/Quiz_08'
import Quiz_09 from './Components/Quiz/Quiz_09'
import Quiz_10 from './Components/Quiz/Quiz_10'
import Quiz_11 from './Components/Quiz/Quiz_11'
import Quiz_12 from './Components/Quiz/Quiz_12'

import quizContext from './Context/quizContext'

export default function Home() {
  const [getCurrently, setCurrently] = useState<number>(6)
  const [getAnsewers6, setAnsewers6] = useState<boolean>(false)
  return (
    <>
      <quizContext.Provider
        value={{getCurrently, setCurrently, getAnsewers6, setAnsewers6}}
      >
        <Header/>
        <Article01/>
        <Quiz_06/>
        <Footer/>
      </quizContext.Provider>
    </>
  )
}
