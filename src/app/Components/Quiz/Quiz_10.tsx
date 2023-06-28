import Image from 'next/image'
import { imagens } from '../../uteis/helper'
import quizContext from '@/app/Context/quizContext'
import { useContext } from 'react'


export default function Quiz_10 () {

  const { getCurrently, setCurrently, setAnsewers10, getAnsewers10 } = useContext(quizContext)

  function registerQuiz (a:boolean){
    setAnsewers10(a)
    setCurrently (getCurrently + 1)
  }

    return(
        <>
          <article className='art2'>
            <div className='box3'>
              <div className='circles'>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_1'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_2'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_3'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_4'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_5'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_6'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_7'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_8'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_9'/>
                <Image src={imagens.Blue_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_10'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_11'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_12'/>
              </div>
              <h2 className='text4'>Tem experimentado sensações de pânico, como batimentos cardíacos acelerados, falta de ar ou tonturas frequentes?</h2>
              <div className='quiz_box'>
                <button className='quiz10_yes button_answers'onClick={a => registerQuiz(true)}>Sim</button>
                <button className='quiz10_no button_answers'onClick={a => registerQuiz(false)}>Não</button>
              </div>
            </div>
          </article>
        </>
    )
}