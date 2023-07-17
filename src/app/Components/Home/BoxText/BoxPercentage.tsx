import Image from "next/image";
import { imagens } from "@/app/uteis/helper";
import { useEffect } from "react";

export type BoxPercentageType = {
    percentile: number,
    text: string
}

type dataType = {
    data: BoxPercentageType []
}

function BoxPercentage ({data}: dataType) {
    return(
        <>
            {data.map((names)=>{
                return (
                            <div className="box_percent">
                                <div className="box_analysis">
                                    <p className="number_blue"><span className="simbol_h2">+</span>{names.percentile}</p>
                                    <p className="text_blue">{names.text}</p>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </>
    )
}
export default BoxPercentage