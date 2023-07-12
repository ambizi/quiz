import Image from "next/image"
import { imagens } from "@/app/uteis/helper"


export default function ArticleH6 () {
    return(
        <>
            <article>
                <div className="box_articleh6">
                    <div className="box_titleh6">
                        <h2 className="titleh6_1">Acesso a uma rede de profissionais</h2>
                        <h3 className="titleh6_2">A inteligência artificial traz uma nova era da medicina.</h3>
                    </div>
                    <div className="box_professions">
                        <div className="img_articleh6">
                            <Image src={imagens.Profession1} alt='Profission_1' width={600} height={614} />
                        </div>
                        <div className="box_profession">
                            <div className="box_texth6">
                                <h3 className="title_profession">Psicólogos</h3>
                                <p className="text_profession">De melhora clínica dos colaboradores após a conclusão do programa.de melhora clínica dos colaboradores <span>67%</span> após a conclusão do programa.de melhora clínica dos colaboradores após a conclusão do programa.</p>
                            </div>
                            <div className="data_box_articleh6">
                                <div className="data_1">
                                    <p className="number_data_articleh6"><span className="simbol_h6">+</span>71%</p>
                                    <p className="text_data_h6">De melhora clínica dos colaboradores após a conclusão do programa.</p>
                                </div>
                                <div className="data_2">
                                    <p className="number_data_articleh6"><span className="simbol_h6">+</span>71%</p>
                                    <p className="text_data_h6">De melhora clínica dos colaboradores após a conclusão do programa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box_professions">
                        <div className="img_articleh6">
                            <Image src={imagens.Profession2} alt='Profission_2' width={600} height={591} />
                        </div>
                        <div className="box_profession">
                            <div className="box_texth6">
                                <h3 className="title_profession">Psiquiatras</h3>
                                <p className="text_profession">De melhora clínica dos colaboradores após a conclusão do programa de melhora clínica dos colaboradores <span>67%</span> após a conclusão do programa.de melhora clínica dos colaboradores após a conclusão do programa.</p>
                            </div>
                            <div className="data_box_articleh6">
                                <div className="data_1">
                                    <p className="number_data_articleh6"><span className="simbol_h6">+</span>71%</p>
                                    <p className="text_data_h6">De melhora clínica dos colaboradores após a conclusão do programa.</p>
                                </div>
                                <div className="data_2">
                                    <p className="number_data_articleh6"><span className="simbol_h6">+</span>71%</p>
                                    <p className="text_data_h6">De melhora clínica dos colaboradores após a conclusão do programa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box_professions">
                        <div className="img_articleh6">
                            <Image src={imagens.Profession3} alt='Profission_3' width={600} height={561} />
                        </div>
                        <div className="box_profession">
                            <div className="box_texth6">
                                <h3 className="title_profession">Terapeutas Ocupacionais</h3>
                                <p className="text_profession">De melhora clínica dos colaboradores após a conclusão do programa.de melhora clínica dos colaboradores <span>67%</span> após a conclusão do programa.de melhora clínica dos colaboradores após a conclusão do programa.</p>
                            </div>
                            <div className="data_box_articleh6">
                                <div className="data_1">
                                    <p className="number_data_articleh6"><span className="simbol_h6">+</span>71%</p>
                                    <p className="text_data_h6">De melhora clínica dos colaboradores após a conclusão do programa.</p>
                                </div>
                                <div className="data_2">
                                    <p className="number_data_articleh6"><span className="simbol_h6">+</span>71%</p>
                                    <p className="text_data_h6">De melhora clínica dos colaboradores após a conclusão do programa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}