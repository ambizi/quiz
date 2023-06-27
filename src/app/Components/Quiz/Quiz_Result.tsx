import quizContext from "@/app/Context/quizContext";
import { useContext, useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { imagens } from "@/app/uteis/helper";
import { type } from "os";
import { createContext } from "vm";




export default function Quiz_Result () {

    const {getCurrently, getAnsewers2, getAnsewers3, getAnsewers4, getAnsewers5, getAnsewers6, getAnsewers7, getAnsewers8, getAnsewers9, getAnsewers10, getAnsewers11, getAnsewers12, getAnsewers13, setAnsewers13} = useContext (quizContext)

    const [getShow, setShow] = useState <boolean>(false)

   function somaQuizz(quiz2: number, quiz3: number, quiz4: number, quiz5: number, quiz6: number, quiz7: number, quiz8: number, quiz9: number, quiz10: number, quiz11: number, quiz12: number)
    {
        if(getAnsewers2 === true) {
            quiz2 = (1)
        } else {quiz2 = 0}

        if(getAnsewers3 === true){
            quiz3 = Number(1)
        } else {quiz3 = 0}

        if(getAnsewers4 === true){
            quiz4 = Number(1)
        } else {quiz4 = 0}

        if(getAnsewers5 === true){
            quiz5 = Number(1)
        } else {quiz5 = 0}

        if(getAnsewers6 === true){
            quiz6 = Number(1)
        } else {quiz6 = 0}

        if (getAnsewers7 === true){
            quiz7 = Number(1)
        } else {quiz7 = 0}

        if (getAnsewers8 === true){
            quiz8 = Number(1)
        } else { quiz8 = 0}

        if (getAnsewers9 === true){
            quiz9 = Number(1)
        } else { quiz9 = 0}

        if (getAnsewers10 === true){
            quiz10 = Number(1)
        } else {quiz10 = 0}

        if (getAnsewers11 === true){
            quiz11 = Number(1)
        } else {quiz11 = 0}

        if (getAnsewers12 === true){
            quiz12 = Number(1)
        } else {quiz12 = 0}

        return quiz2 + quiz3 + quiz4 + quiz5 + quiz6 + quiz7 + quiz8 + quiz9 + quiz10 + quiz11 + quiz12 
   }



   function msg () {
    if (somaQuizz() >= 6) { 
        return <p className="text_result1"> <Image src={imagens.Warning} alt="Warning" width={20} height={20} className='warning'/> Você provalvemente possui algum transtorno mental.</p>
    } else {return <p className="text_result2">Que tal uma relaxada!? Começe mudando sua rotina, exercícios físicos, boa alimentação e higiene do sono. Alterar alguns dos nossos maus habitos, muitas vezes já é o sufientes para uma melhora significativa no nosso estado mental! </p>}
   }


  /* function msgEmail () {
    if (!getShow){
    return <button className="e-mail" onClick={()=>setShow(true)}>Cadastre seu e-mail para receber o pré diagnóstico</button>
    }
   } */

   /* function nameEmail () {
    if (getShow){
        return <div className="msg"><input type="email" value={'Ex: email@gmail.com.br'} name="name_e-mail" id="name_e-mail" className="name_e-mail" />
        <input type="submit" value="Enviar" />
        </div>     
    }
   } */


    return(

        <>
            <article className='art2_1'>
             <div className='box3'>
                <h2 className='text4_1'>Resultado</h2>
              <div className="box_result">
                  <div className='quiz_box2'>
                    {msg()}
                  </div>
                  <div className="msg">
                    <div>
                        <label htmlFor="name"></label>
                        <input type="text" value={'---Digite seu nome---'} name="name" id="name" className="name"/>
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="email" value={'---Ex: email@gmail.com.br---'} name="name_e-mail" id="name_e-mail" className="name_e-mail" />
                    </div>
                    <div>
                        <label htmlFor="confirm"></label>
                        <input type="submit" name="confirm" id="confirm" value="Enviar" className="confirm"/>
                    </div>
                  </div>
              </div>
            </div>
          </article>
        </>

    )
}