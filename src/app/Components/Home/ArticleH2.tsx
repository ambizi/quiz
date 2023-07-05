import { imagens } from "@/app/uteis/helper";
import Image from "next/image";

export default function ArticleH2 () {
    return(
        <>  
            <article>
                <div>
                    <div>
                        <Image src={imagens.Therapy_2} alt='Therapy_2' width={30} height={30} />
                    </div>
                    <div>
                        <div>
                            83%
                            <p>Por meio de algoritmos avançados e análise.</p>
                        </div>
                        <div>
                            83%
                            <p>Por meio de algoritmos avançados e análise.</p>
                        </div>
                        <div>
                            71%
                            <p>Por meio de algoritmos avançados e análise.</p>
                        </div>
                        <div>
                            71%
                            <p>Por meio de algoritmos avançados e análise.</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}