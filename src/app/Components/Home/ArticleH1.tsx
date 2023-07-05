import { imagens } from "@/app/uteis/helper";
import Image from "next/image";

export default function ArticleH1 () {
    return(
        <>  
            <article>
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
                                <a href="#" className="bipolar">Triagem</a>
                            </div>
                            <div className="link">
                                <div className="box_img">
                                    <p className="number">2</p>
                                    <Image src={imagens.Therapy} alt='Therapy' width={50} height={50} />
                                </div>
                                <a href="#" className="therapy">Atendimento</a>
                            </div>
                            <div className="link">
                                <div className="box_img">
                                    <p className="number">3</p>
                                    <Image src={imagens.Growing} alt='Growing' width={50} height={50} />
                                </div>
                                <a href="#" className="growing">Acompanhamento</a>
                            </div>
                            <div className="link">
                                <div className="box_img">
                                    <p className="number">4</p>
                                    <Image src={imagens.Goal} alt='Goal' width={50} height={50} />
                                </div>
                                <a href="#" className="goal">Redefinição</a>
                            </div>
                        </div>
                        <div className="box_link_text">
                            <div className="box_text">
                                <Image src={imagens.Feature} alt='Feature' width={50} height={30} />
                                <div>
                                    <p className="text_link1">Por meio de algoritmos avançados e análise de dados, a inteligência artificial é capaz de identificar padrões e sinais de alerta que podem indicar problemas emocionais e distúrbios mentais.</p>
                                </div>
                                <div>
                                    <p className="text_link2">Essa abordagem objetiva e baseada em evidências permite uma triagem mais precisa e eficiente, ajudando a identificar indivíduos que possam necessitar de intervenções e tratamentos específicos.</p>
                                </div>
                                <div>
                                    <a href="#" className="want">Quero experimentar</a>
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