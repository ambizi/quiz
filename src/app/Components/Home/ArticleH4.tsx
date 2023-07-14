import Image from "next/image"
import { imagens } from "@/app/uteis/helper"

export default function ArticleH4 () {
    return(
        <>
            <article className="articleh4">
                <div className="box_articleh4">
                    <div className="box_title">
                        <h2 className="articleh4_title">Por que usamos Inteligência Artificial</h2>
                        <h3 className="articleh4_title2">A inteligência artificial traz uma nova era da medicina.</h3>
                    </div>
                    <div className="box_data">
                        <div className="box_data_number">
                            <p className="data_number"><span className="simbol_h4">+</span>71%</p>
                            <p className="data_number_text">de melhora clínica dos colaboradores após a conclusão do programa.</p>
                        </div>
                        <div className="box_text_data">
                            <Image src={imagens.Check} alt='Check' width={30} height={30}/>
                            <p className="text_data">De melhora clínica dos colaboradores após a conclusão do programa.de melhora clínica dos colaboradores após a conclusão do programa <span className="digit_h4">80% </span>elhora clínica dos colaboradores após a conclusão do programa.</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="box_data">
                        <div className="box_data_number">
                            <p className="data_number"><span className="simbol_h4">+</span>71%</p>
                            <p className="data_number_text">de melhora clínica dos colaboradores após a conclusão do programa.</p>
                        </div>
                        <div className="box_text_data">
                            <Image src={imagens.Check} alt='Check' width={30} height={30}/>
                            <p className="text_data">De melhora clínica dos colaboradores após a conclusão do programa.de melhora clínica dos colaboradores <span className="digit_h4">67%</span> após a conclusão do programa de melhora clínica dos colaboradores após a conclusão do programa.</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="box_data">
                        <div className="box_data_number">
                            <p className="data_number"><span className="simbol_h4">+</span>71%</p>
                            <p className="data_number_text">de melhora clínica dos colaboradores após a conclusão do programa.</p>
                        </div>
                        <div className="box_text_data">
                            <Image src={imagens.Check} alt='Check' width={30} height={30}/>
                            <p className="text_data">De melhora clínica dos colaboradores após a conclusão do programa.de <span className="digit_h4">32%</span> melhora clínica dos colaboradores após a conclusão do programa de melhora clínica dos colaboradores após a conclusão do programa.</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}