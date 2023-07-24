import { imagens } from "@/app/uteis/helper";
import Image from "next/image";
import { dataPercentage} from "@/app/uteis/DataContent";
import BoxPercentage from "./BoxText/BoxPercentage";

export default function ArticleH2 () {
    return(
        <>  
            <article className="articleh2">
                <div className="box_article2">
                    <div>
                        <Image src={imagens.Therapy_1} alt='Therapy_2' width={650} height={450} className="img_therapy"/>
                    </div>
                    <div className="box_percent">
                        <BoxPercentage data={dataPercentage}/>
                    </div>
                </div>
            </article>
        </>
    )
}