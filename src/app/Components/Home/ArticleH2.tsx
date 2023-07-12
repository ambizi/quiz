import { imagens } from "@/app/uteis/helper";
import Image from "next/image";

export default function ArticleH2 () {
    return(
        <>  
            <article className="articleh2">
                <div className="box_article2">
                    <div>
                        <Image src={imagens.Therapy_1} alt='Therapy_2' width={650} height={450} className="img_therapy"/>
                    </div>
                    <div className="box_percent">
                        <div className="box_analysis1">
                            <p className="number_grey">0%</p>
                            <p className="text_grey">Por meio de algoritmos avançados e análise.</p>
                        </div>
                        <div className="box_analysis2">
                            <p className="number_blue"><span className="simbol_h2">+</span>71%</p>
                            <p className="text_blue">Por meio de algoritmos avançados e análise.</p>
                        </div>
                        <div className="box_analysis3">
                            <p className="number_grey">0%</p>
                            <p className="text_grey">Por meio de algoritmos avançados e análise.</p>
                        </div>
                        <div className="box_analysis4">
                            <p className="number_blue"><span className="simbol_h2">+</span>71%</p>
                            <p className="text_blue">Por meio de algoritmos avançados e análise.</p>
                        </div>
                    </div>
                    <Image src={imagens.Circle_Gradient} alt='Circle Gradient' width={800} height={800} className="circle_3"/>
                    <Image src={imagens.Circle_Gradient} alt='Circle Gradient' width={800} height={800} className="circle_4"/>
                </div>
            </article>
        </>
    )
}