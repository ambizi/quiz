import Image from 'next/image'
import { imagens } from '../../uteis/helper'
import quizContext from '@/app/Context/quizContext'
import { useContext } from 'react'
import styles from '../../Quiz/Quiz.module.css'


export default function Quiz_09 () {

const { getCurrently, setCurrently, setAnsewers9, getAnsewers9 } = useContext(quizContext)

function registerQuiz (a:boolean){
  setAnsewers9(a)
  setCurrently (getCurrently + 1)
}

    return(
        <>
          <article className={styles.art2}>
            <div className={styles.box3}>
              <div className={styles.circles}>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className={styles.Circle_Quiz_1}/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className={styles.Circle_Quiz_2}/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className={styles.Circle_Quiz_3}/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className={styles.Circle_Quiz_4}/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className={styles.Circle_Quiz_5}/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className={styles.Circle_Quiz_6}/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className={styles.Circle_Quiz_7}/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className={styles.Circle_Quiz_8}/>
                <Image src={imagens.Blue_Circle} alt="Circle" width={14} height={14} className={styles.Circle_Quiz_9}/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className={styles.Circle_Quiz_10}/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className={styles.Circle_Quiz_11}/>
                <Image src={imagens.Gray_Circle} alt="Circle" width={14} height={14} className={styles.Circle_Quiz_12}/>
              </div>
              <h2 className={styles.text4}>Tem notado baixo nível de energia ou motivação?</h2>
              <div className={styles.quiz_box}>
                <button className={styles.quiz09_yes} onClick={a =>registerQuiz(true)}>Sim</button>
                <button className={styles.quiz09_no}  onClick={a =>registerQuiz(false)} >Não</button>
              </div>
            </div>
          </article>
        </>
    )
}