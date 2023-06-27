import Image from 'next/image'
import { imagens } from '../../uteis/helper'
import quizContext from '@/app/Context/quizContext'
import {useContext} from 'react'
import { useState } from 'react'
import Quiz_02 from './Quiz_02'


export default function Quiz_01 () {

  const {getCurrently, setCurrently, setAnsewers1} = useContext (quizContext)

  function registerQuiz (result: string){
    setAnsewers1(result)
    setCurrently(getCurrently + 1)
  }


  /*const circleQuiz = () =>{
    for (var cont = 1; cont < 12; cont++) {
        if (cont === getCurrently){
        return <Image src={imagens.Blue_Circle} alt="Circle" width={14} height={14} className={`circle_Quiz_${cont}`}/>
      } else{
        return <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className={`circle_Quiz_${cont}`}/>
      }
    }
    } */


    return(
        <>
          <article className='art2'>
            <div className='box3'>
              <div className='circles'>
                <Image src={imagens.Blue_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_1'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_2'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_3'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_4'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_5'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_6'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_7'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_8'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_9'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_10'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_11'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_12'/>
              </div>
              <h2 className='text4'>Qual a sua idade?</h2>
              <div className='quiz_box'>
                <button className='quiz01_button1'onClick={()=>registerQuiz('-18') }>-18</button>
                <button className='quiz01_button2' onClick={()=>registerQuiz('18 a 25')}>18 a 25</button>
                <button className='quiz01_button3'onClick={()=>registerQuiz('26 a 35')}>26 a 35</button>
                <button className='quiz01_button4'onClick={()=>registerQuiz('36 a 45')}>36 a 45</button>
                <button className='quiz01_button5'onClick={()=>registerQuiz('45 a 60')}>46 a 60</button>
                <button className='quiz01_button6'onClick={()=>registerQuiz('61 a 70')}>61 a 70</button>
                <button className='quiz01_button7'onClick={()=>registerQuiz('+70')}>+70</button>
              </div>
            </div>
          </article>
        </>
    )
}