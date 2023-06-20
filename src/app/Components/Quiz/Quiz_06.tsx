import { useContext } from 'react'
import Image from 'next/image'
import { imagens } from '../../uteis/helper'
import quizContext from '@/app/Context/quizContext'


export default function Quiz_06 () {

  const { getCurrently, setCurrently } = useContext(quizContext)
    
    const changeQuiz = (nextQuiz : number) => {
      setCurrently(nextQuiz)
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
              <h1>{getCurrently}</h1>
              <h2 className='text4'>Sente-se constantemente irritado(a) ou com explosões de raiva sem motivo aparente?</h2>
              <div className='quiz_box'>
                <button className='quiz06_button1' onClick={() => changeQuiz(7)}>Avançar</button>
                <button className='quiz06_button2' onClick={() => changeQuiz(5)}>Voltar</button>
              </div>
            </div>
          </article>
        </>
    )
}