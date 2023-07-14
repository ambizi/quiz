import Image from "next/image"
import { imagens } from "@/app/uteis/helper"
import BoxWhy, { BoxWhyType } from "./BoxWhy"
import { dataContent } from "@/app/uteis/DataContent"

export default function ArticleH4 () {
    return(
        <>
            <article className="articleh4">
                <div className="box_articleh4">
                    <div className="box_title">
                        <h2 className="articleh4_title">Por que usamos Inteligência Artificial</h2>
                        <h3 className="articleh4_title2">A inteligência artificial traz uma nova era da medicina.</h3>
                    </div>
                    <BoxWhy data={dataContent} />
                </div>
            </article>
        </>
    )
}