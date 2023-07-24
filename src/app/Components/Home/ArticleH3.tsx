import { imagens } from "@/app/uteis/helper";
import Image from "next/image";

export default function ArticleH3 () {
    return(
        <>
            <article className="articleh3">
                <div className="box_articleh3">
                    <div className="box_title">
                        <h2 className="title_articleh3">Participe do Quiz de Saúde Mental</h2>
                        <p className="text_articleh3">A inteligência artificial traz uma nova era da medicina.A inteligência artificial traz uma nova era da medicina.</p>
                    </div>
                    <div className="box_button">
                        <a className="articleh3_button" href="/Quiz"><Image src={imagens.Arrow_Blue} alt="Arrow_Blue" width={20} height={17} className="arrow_blue"/>Quero Participar</a>
                        <p className="text_box_buttom">*Totalmente Gratuito</p>
                    </div>
                </div>
            </article>
        </>
    )
}