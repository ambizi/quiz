import { useContext } from 'react'
import Image from 'next/image'
import { imagens } from '../../uteis/helper'
import quizContext from '@/app/Context/quizContext'


export default function Quiz_06 () {

  const { getCurrently, setCurrently, setAnsewers6, getAnsewers6 } = useContext(quizContext)
    
    const positiveQuiz = () => {
      setAnsewers6(true)
      setCurrently(7)
    }

    const negativeQuiz = () => {
      setAnsewers6(false)
      setCurrently(7)
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
                <Image src={imagens.Blue_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_6'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_7'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_8'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_9'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_10'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_11'/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className='Circle_Quiz_12'/>
              </div>
              <h1>Resultado da resposta {getCurrently} é: {getAnsewers6 ? 'Sim' : 'Não' }</h1>
              <h2 className='text4'>Sente-se constantemente irritado(a) ou com explosões de raiva sem motivo aparente?</h2>
              <div className='quiz_box'>
                <button className='quiz06_button1' onClick={() => positiveQuiz()}>Sim</button>
                <button className='quiz06_button2' onClick={() => negativeQuiz()}>Não</button>
              </div>
            </div>
          </article>
        </>
    )
}