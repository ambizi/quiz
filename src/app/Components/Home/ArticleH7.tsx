
import Image from "next/image"
import { imagens } from "@/app/uteis/helper"

export default function ArticleH7 () {
    return(
        <>
            <article className="articleh7">
                <div className="box_articleh7">
                    <div className="box_titleh7">
                        <h2 className="titleh7">Baixe nosso Aplicativo</h2>
                        <p className="texth7">A inteligência artificial traz uma nova era da medicina.A inteligência artificial traz uma nova era da medicina.</p>
                    </div>
                    <div className="box_buttonh7">
                        <button className="button_google"> <Image src={imagens.Google_Play} alt='Google Play' width={48} height={48} className="google"/> Google Play</button>
                        <button className="button_apple"> <Image src={imagens.App_Store} alt='Google Play' width={44} height={44} className="apple"/> Apple Store</button>
                    </div>
                </div>
            </article>
        </>
    )
}