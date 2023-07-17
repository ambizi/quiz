import Image from "next/image"
import { imagens } from "@/app/uteis/helper"
import { dataprofessionals } from "@/app/uteis/DataContent"
import BoxProfessionals from "./BoxText/BoxProfessionals"


export default function ArticleH6 () {
    return(
        <>
            <article>
                <div className="box_articleh6">
                    <div className="box_titleh6">
                        <h2 className="titleh6_1">Acesso a uma rede de profissionais</h2>
                        <h3 className="titleh6_2">A inteligência artificial traz uma nova era da medicina.</h3>
                    </div>
                    <BoxProfessionals data={dataprofessionals} />
                </div>
            </article>
        </>
    )
}