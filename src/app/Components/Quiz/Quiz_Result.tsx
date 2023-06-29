import quizContext from "@/app/Context/quizContext";
import { useContext, useState } from "react";
import Image from "next/image";
import { imagens } from "@/app/uteis/helper";
import { useForm } from "react-hook-form";
import { type } from "os";
import Quiz_01 from "./Quiz_01";

type propsInputs = {
    Name: string,
    Email: string
}

export default function Quiz_Result () {

    const {getCurrently, getAnsewers1, getAnsewers2, getAnsewers3, getAnsewers4, getAnsewers5, getAnsewers6, getAnsewers7, getAnsewers8, getAnsewers9, getAnsewers10, getAnsewers11, getAnsewers12, getAnsewers13, setAnsewers13} = useContext (quizContext)

    const [getShow, setShow] = useState <boolean>(false)

    const {register, handleSubmit} = useForm<propsInputs>()

    const onSubmit = (data: propsInputs) => {

        const userData ={
            Nome: data.Name,
            Email: data.Email,
            Quiz_01: getAnsewers1,
            Quiz_02: getAnsewers2,
            Quiz_03: getAnsewers3,
            Quiz_04: getAnsewers4,
            Quiz_05: getAnsewers5,
            QUiz_06: getAnsewers6,
            Quiz_07: getAnsewers7,
            Quiz_08: getAnsewers8,
            Quiz_09: getAnsewers9,
            Quiz_10: getAnsewers10,
            Quiz_11: getAnsewers11,
            Quiz_12: getAnsewers12  
        }
        console.log(userData)
    }

    function somaQuizz(){

        let quiz2: number
        let quiz3: number
        let quiz4: number
        let quiz5: number
        let quiz6: number
        let quiz7: number
        let quiz8: number
        let quiz9: number
        let quiz10: number
        let quiz11: number
        let quiz12: number

        if(getAnsewers2 === true) {
            quiz2 = 1
        } else {
            quiz2 = 0
        }

        if(getAnsewers3 === true){
            quiz3 = 1
        } else {
            quiz3 = 0
        }

        if(getAnsewers4 === true){
            quiz4 = 1
        } else {
            quiz4 = 0
        }

        if(getAnsewers5 === true){
            quiz5 = 1
        } else {
            quiz5 = 0
        }

        if(getAnsewers6 === true){
            quiz6 = 1
        } else {
            quiz6 = 0
        }

        if (getAnsewers7 === true){
            quiz7 = 1
        } else {
            quiz7 = 0
        }

        if (getAnsewers8 === true){
            quiz8 = 1
        } else { 
            quiz8 = 0
        }

        if (getAnsewers9 === true){
            quiz9 = 1
        } else { 
            quiz9 = 0
        }

        if (getAnsewers10 === true){
            quiz10 = 1
        } else {
            quiz10 = 0
        }

        if (getAnsewers11 === true){
            quiz11 = 1
        } else {
            quiz11 = 0
        }

        if (getAnsewers12 === true){
            quiz12 = 1
        } else {
            quiz12 = 0
        }

        return quiz2 + quiz3 + quiz4 + quiz5 + quiz6 + quiz7 + quiz8 + quiz9 + quiz10 + quiz11 + quiz12 
   }

    function msg () {
        if (somaQuizz() >= 6) { 
            return <p className="text_result1"> <Image src={imagens.Warning} alt="Warning" width={20} height={20} className='warning'/> Você provalvemente possui algum transtorno mental.</p>
        } else {return <p className="text_result2">Que tal uma relaxada!? Começe mudando sua rotina, exercícios físicos, boa alimentação e higiene do sono. Alterar alguns dos nossos maus habitos, muitas vezes já é o sufientes para uma melhora significativa no nosso estado mental! </p>}
    }

    return(
        <>
            <article className='art2_1'>
                <div className='box3'>
                    <h2 className='text4_1'>Resultado</h2>
                    <div className="box_result">
                            <div className='quiz_box2'>
                                {msg()}
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="msg">
                                    <div>
                                        <label htmlFor="name"></label>
                                        <input type="text" placeholder={'---Digite seu nome---'} {...register('Name', { required: true })} id="name" className="name"/>
                                    </div>
                                    <div>
                                        <label htmlFor="email"></label>
                                        <input type="email" placeholder={'---Ex: email@gmail.com.br---'} {...register('Email', { required: true })} id="name_e-mail" className="name_e-mail" />
                                    </div>
                                    <div>
                                        <label htmlFor="confirm"></label>
                                        <input type="submit" name="confirm" id="confirm" value="Enviar" className="confirm"/>
                                    </div>
                            </form>
                    </div>
                </div>
          </article>
        </>

    )
}