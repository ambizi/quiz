import Image from "next/image"
import { imagens } from "@/app/uteis/helper"

/*Tipifica o dataContent*/
export type BoxWhyType = {
    percentage: number
    title: string
    content: string
}

/*Transforma a tipificação em uma array para que possa ser acessado seus componentes*/
type Datatype = {
    data: BoxWhyType[]
}

function BoxWhy({data}: Datatype){
    const quantity = data.length
    return ( 
        <>
        {data.map( (names, index) => {
            const newIndex = index + 1
            return(
                <div className="box_data" key={index} style={ quantity === newIndex ? {  borderBottom: '1px solid #fff' } : { borderBottom: '1px solid #c2c2c2'}}>
                    <div className="box_data_number">
                        <p className="data_number"><span className="simbol_h4">+</span>{names.percentage}%</p>
                        <p className="data_number_text">{names.title}</p>
                    </div>
                    <div className="box_text_data">
                        <Image src={imagens.Check} alt='Check' width={30} height={30}/>
                        <p className="text_data">{names.content}</p>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default BoxWhy