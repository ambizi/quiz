import { imagens } from "@/app/uteis/helper";
import Image from "next/image";
import { datatestemony } from "@/app/uteis/DataContent";
import BoxTestemony from "./BoxText/BoxTestemony";

export default function ArticleH5 () {
    return(
        <>  
            <article className="articleh5">
                    <div className="box_articleh5">
                        <div className="head_box_articleh5">
                            <h2 className="title_articleh5">Depoimentos</h2>
                            <h3 className="text_articleh5">A inteligência artificial traz uma nova era da medicina.</h3>
                        </div>
                        <div className="box_testimony">
                            <BoxTestemony data={datatestemony}/>
                            <div className="box_msg_p">
                                <div className="box_img_testimony">
                                    <Image src={imagens.Talk_2} alt='Talk_2' width={30} height={30} className="talk2"/>
                                </div>
                                <div className="star">
                                    <Image src={imagens.Star_2} alt='Star_2' width={22} height={22} />
                                </div>
                                <div className="box_text_testimony">
                                    <p className="next_testimony">O próximo(a)  pode ser você</p>
                                    <p className="call_testimony">Por meio de algoritmos avançados e análise Por meio de algoritmos avançados.</p>
                                    <a href="#" className="link_testimony">Quero experimentar</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </article>
        </>
    )
}