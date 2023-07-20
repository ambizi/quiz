import Image from "next/image"

type BoxProfessionalsProps = {
    professionals: string,
    text: string,
    percetage1: number,
    data1: string,
    percetage2: number,
    data2: string,
    img: any
}

type DataType = {
    data: BoxProfessionalsProps []
}

function BoxProfessionals ({data}: DataType) {
    return(
        <>
            {data.map((names)=>{
                return <div className="box_professions">
                            <hr className="line"/>
                            <Image className="img_articleh6" src={names.img} alt="Img" width={550} height={500}/>
                            <div className="box_profession">
                                <div className="box_texth6">
                                    <h3 className="title_profession">{names.professionals}</h3>
                                    <p className="text_profession">{names.text}</p>
                                </div>
                                <div className="data_box_articleh6">
                                    <div className="data_1">
                                        <p className="number_data_articleh6"><span className="simbol_h6">+</span>{names.percetage1}</p>
                                        <p className="text_data_h6">{names.data1}</p>
                                    </div>
                                    <div className="data_2">
                                        <p className="number_data_articleh6"><span className="simbol_h6">+</span>{names.percetage2}</p>
                                        <p className="text_data_h6">{names.data2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                )
            }
        </>
    )
} export default BoxProfessionals