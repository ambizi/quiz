import { imagens } from "@/app/uteis/helper";
import Image from "next/image";
import homeContext from "@/app/Context/homeContext";
import React, { useContext, useState } from "react";
import { type } from "os";


type CycleProps = {
    id: number,
    text1: string,
    text2: string
}


export default function ArticleH1 () {
    

    const cycle = [
        {
            id: 1,
            text1: "Por meio de algoritmos avançados e análise de dados, a inteligência artificial é capaz de identificar padrões e sinais de alerta que podem indicar problemas emocionais e distúrbios mentais",
            text2: "Essa abordagem objetiva e baseada em evidências permite uma triagem mais precisa e eficiente, ajudando a identificar indivíduos que possam necessitar de intervenções e tratamentos específicos"
        },
        {
            id: 2,
            text1: "Uma vez que a triagem é realizada, podemos orientar quais profissionais entre nossos parceiros são especializados no distúrbio. Através de nossa plataforma é possível localizar consultórios utilizando critérios como cidade e bairro.",
            text2: "Essa etapa visa estreitar o difícil percurso que é localizar um consultório que melhor atenda suas necessidades. Entre em contato e agende uma consulta com um de nossos parceiros."
        },
        {
            id: 3,
            text1: "Nosso sistema integrado permitirá uma melhor sinergia entre paciente e médico. Contando com questionários e “diário de bordo” onde o paciente pode relatar seu estado sem esperar pela data da consulta, obtemos uma análise mais pura do relato.",
            text2: "Do outro lado o médico pode ter acesso ao sentimento do paciente assim que o evento ocorrer. Isso não vai eliminar o face a face, mas vai fornecer insumos para uma melhor interação."
        },
        {
            id: 4,
            text1: "Toda a informação colhida retroalimenta o algoritmo tornando todas as etapas mais efetivas, mais ágil além de contribuir com insumos para toda comunidade da psiquiatria.",
            text2: "Modernizar não significa que vamos abrir mão do que funciona, queremos elevar o padrão dos atendimentos e democratizar o acesso a especialistas de todas as áreas. Tecnologia a serviço do bem maior."
        }
    ]


    const [getCurrently, setCurrently] = useState <number>(1)
    const [getcycle, setCycle] = useState <CycleProps | undefined> (inicialValue())
    

    function inicialValue () {
        const search = cycle.find(({id}) => id === Number(getCurrently))
        return search
    }

    function registerButton ( but: number){
        setCurrently(but)
        const search = cycle.find(({id}) => id === Number(but))
        setCycle(search)
    }
      

    return(
        <>  
            <article className="articleh1">
                <div className="box_article1">
                    <div className="article_title">
                        <h2 className="title1">Ciclo da Saúde Mental</h2>
                        <h3 className="title2">A inteligência artificial traz uma nova era da medicina.</h3>
                    </div>
                    <div className="box_artucle_link">
                        <div className="box_link">
                            <div className="link">
                                <div className="box_img">
                                    <p className="number">1</p>
                                    <Image src={imagens.Bipolar} alt='Bipolar' width={50} height={50} />
                                </div>
                                <p className="bipolar" onClick={e=>registerButton(1)}>Triagem</p>
                            </div>
                            <div className="link">
                                <div className="box_img">
                                    <p className="number">2</p>
                                    <Image src={imagens.Therapy} alt='Therapy' width={50} height={50} />
                                </div>
                                <p className="therapy" onClick={e=>registerButton(2)}>Atendimento</p>
                            </div>
                            <div className="link">
                                <div className="box_img">
                                    <p className="number">3</p>
                                    <Image src={imagens.Growing} alt='Growing' width={50} height={50} />
                                </div>
                                <p className="growing" onClick={() =>registerButton(3)}>Acompanhamento</p>
                            </div>
                            <div className="link">
                                <div className="box_img">
                                    <p className="number">4</p>
                                    <Image src={imagens.Goal} alt='Goal' width={50} height={50} />
                                </div>
                                <p className="goal"onClick={()=>registerButton(4)}>Redefinição</p>
                            </div>
                        </div>
                        <div className="box_link_text">
                            <div className="box_text">
                                <Image src={imagens.Feature} alt='Feature' width={50} height={30} />
                                <div>
                                    <div className="text_link1">
                                        {getcycle?.text1}
                                    </div>
                                    <div className="text_link2">
                                        {getcycle?.text2}
                                    </div>
                                </div>
                                <div>
                                    <p className="want">Quero experimentar</p>
                                </div>
                            </div>
                            <div>
                                <Image src={imagens.Hand_Phone} alt='Hand Phone' width={530} height={550} className="hand_phone"/>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}