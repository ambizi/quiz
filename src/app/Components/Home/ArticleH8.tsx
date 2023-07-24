import Image from "next/image"
import { imagens } from "@/app/uteis/helper"
import Carousel from "../Functions/carousel"

export default function ArticleH8 () {
    return (
        <>
            <article>
                <div className="box_articleh8">
                    <div className="box_titleh8">
                        <h2 className="titleh8">Veja nossas últimas publicações</h2>
                        <h3 className="title2_h8">A inteligência artificial traz uma nova era da medicina.</h3>
                    </div>
                    <div className="box_all_news">
                        <div className="box_news">
                            <Image src={imagens.News_1} alt='News 1' width={356} height={206} className="img_news"/>
                            <p className="title_news">Quais os benefícios de ter um psicologo durante a gestação?</p>
                            <p className="news">A inteligência artificial traz uma nova era da medicina.A inteligência artificial traz uma nova era da medicina. A inteligência artificial traz uma nova era da medicina.A inteligência artificial traz uma nova era da medic...</p>
                            <div className="img_news_plus">
                                <Image src={imagens.Button_Plus} alt='Button_Plus' width={48} height={48}/>
                            </div>
                        </div>
                        <div className="box_news">
                            <Image src={imagens.News_2} alt='News 1' width={356} height={206} className="img_news"/>
                            <p className="title_news">Quais os principais sintomas da depressão infantil?</p>
                            <p className="news">A inteligência artificial traz uma nova era da medicina.A inteligência artificial traz uma nova era da medicina. A inteligência artificial traz uma nova era da medicina.A inteligência artificial traz uma nova era da medic...</p>
                            <div className="img_news_plus">
                                <Image src={imagens.Button_Plus} alt='Button_Plus' width={48} height={48}/>
                            </div>
                        </div>
                        <div className="box_news">
                            <Image src={imagens.News_3} alt='News 1' width={356} height={206} className="img_news"/>
                            <p className="title_news">Descubra se você possui algum tipo de transtorno mental</p>
                            <p className="news">A inteligência artificial traz uma nova era da medicina.A inteligência artificial traz uma nova era da medicina. A inteligência artificial traz uma nova era da medicina.A inteligência artificial traz uma nova era da medic...</p>
                            <div className="img_news_plus">
                                <Image src={imagens.Button_Plus} alt='Button_Plus' width={48} height={48}/>
                            </div>
                        </div>
                    </div>
                    <div className="box_call_news">
                        <h3 className="call_news">Veja todas as nossas publicações</h3>
                    </div>
                </div>
            </article>
        </>
    )
}