import Image from "next/image";
import { imagens } from "@/app/uteis/helper";
import Carousel from "../../Functions/carousel";
import React, { use, useState } from "react";




export type BoxTestemonyProps = {
    name: string
    testemony: string
}

type dataType = {
    data: BoxTestemonyProps[]
}

function BoxTestemony({ data }: dataType) {
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);

    function changeWindow() {
        if (widthWindow <= 540) {
            return (
                <>
                    <Carousel>
                        {data.map((name) => {
                            return (
                                <div className="box_msg">
                                    <div className="box_img_testimony">
                                        <Image src={imagens.Talk_1} alt='Talk_1' width={30} height={30} className="talk" />
                                    </div>
                                    <div className="star" >
                                        <Image src={imagens.Star_1} alt='Star_1' width={22} height={22} />
                                    </div>
                                    <div className="box_text_testimony">
                                        <p className="title_name">{name.name}</p>
                                        <p className="testimony">{name.testemony}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </>
            )
        } else if (widthWindow > 540) {
            return (
                <>
                    {data.map((name) => {
                        return (
                            <div className="box_msg">
                                <div className="box_img_testimony">
                                    <Image src={imagens.Talk_1} alt='Talk_1' width={30} height={30} className="talk" />
                                </div>
                                <div className="star" >
                                    <Image src={imagens.Star_1} alt='Star_1' width={22} height={22} />
                                </div>
                                <div className="box_text_testimony">
                                    <p className="title_name">{name.name}</p>
                                    <p className="testimony">{name.testemony}</p>
                                </div>
                            </div>
                        )
                    })}
                </>

            )
        }
    }
    return (
        <>
            {changeWindow()}
        </>
    )
}

export default BoxTestemony