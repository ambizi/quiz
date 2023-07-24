"use client"; 
import React, { useState } from 'react'
import Header from '../Components/Quiz/Header'
import Article01 from '../Components/Quiz/Article01'
import Footer from '../Components/Quiz/Footer'
import Quiz_01 from '../Components/Quiz/Quiz_01'
import Quiz_02 from '../Components/Quiz/Quiz_02'
import Quiz_03 from '../Components/Quiz/Quiz_03'
import Quiz_04 from '../Components/Quiz/Quiz_04'
import Quiz_05 from '../Components/Quiz/Quiz_05'
import Quiz_06 from '../Components/Quiz/Quiz_06'
import Quiz_07 from '../Components/Quiz/Quiz_07'
import Quiz_08 from '../Components/Quiz/Quiz_08'
import Quiz_09 from '../Components/Quiz/Quiz_09'
import Quiz_10 from '../Components/Quiz/Quiz_10'
import Quiz_11 from '../Components/Quiz/Quiz_11'
import Quiz_12 from '../Components/Quiz/Quiz_12'
import quizContext from '../Context/quizContext'
import Quiz_Result from '../Components/Quiz/Quiz_Result';
import { dataQuiz } from '../uteis/DataContent';

export default function Quiz() {

  const [getCurrently, setCurrently] = useState<number>(1)
  const [getAnsewers1, setAnsewers1] = useState<string>('')
  const [getAnsewers2, setAnsewers2] = useState<boolean>(false)
  const [getAnsewers3, setAnsewers3] = useState<boolean>(false)
  const [getAnsewers4, setAnsewers4] = useState<boolean>(false)
  const [getAnsewers5, setAnsewers5] = useState<boolean>(false)
  const [getAnsewers6, setAnsewers6] = useState<boolean>(false)
  const [getAnsewers7, setAnsewers7] = useState<boolean>(false)
  const [getAnsewers8, setAnsewers8] = useState<boolean>(false)
  const [getAnsewers9, setAnsewers9] = useState<boolean>(false)
  const [getAnsewers10, setAnsewers10] = useState<boolean>(false)
  const [getAnsewers11, setAnsewers11] = useState<boolean>(false)
  const [getAnsewers12, setAnsewers12] = useState<boolean>(false)
  const [getAnsewers13, setAnsewers13] = useState<boolean>(false)

  
  function setQuiz(){
  
      switch(getCurrently) {
        case 1:
          return <Quiz_01/>
        case 2:
          return <Quiz_02/>
        case 3:
          return <Quiz_03/>
        case 4:
          return <Quiz_04/>
        case 5:
          return <Quiz_05/>
        case 6:
          return <Quiz_06/>
        case 7:
          return <Quiz_07/>
        case 8:
          return <Quiz_08/>
        case 9:
          return <Quiz_09/>
        case 10:
          return <Quiz_10/>
        case 11:
          return <Quiz_11/> 
        case 12:
          return <Quiz_12/> 
        case 13:
          return <Quiz_Result/>                          
        default:
          return <Quiz_12/>   
      }
    }

  return (
    <>
      <quizContext.Provider
        value={{getCurrently, setCurrently, getAnsewers1, setAnsewers1, getAnsewers2, setAnsewers2, getAnsewers3, setAnsewers3, getAnsewers4, setAnsewers4, getAnsewers5, setAnsewers5, getAnsewers6, setAnsewers6, getAnsewers7, setAnsewers7, getAnsewers8, setAnsewers8, getAnsewers9, setAnsewers9, getAnsewers10, setAnsewers10, getAnsewers11, setAnsewers11, getAnsewers12, setAnsewers12,getAnsewers13, setAnsewers13}}
      >
        <Header/>
        <Article01 data={dataQuiz}/>
        {setQuiz()}
        <Footer/>
      </quizContext.Provider>
    </>
  )
}

