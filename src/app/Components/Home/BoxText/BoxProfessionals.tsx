
import Image from "next/image"
import { imagens } from "@/app/uteis/helper"
import { dataprofessionals } from "@/app/uteis/DataContent"


type BoxProfessionalsProps = {
    professionals: any,
    text: string,
    percetage1: number,
    data1: string,
    percetage2: number,
    data2: string,
}

type DataType = {
    data: BoxProfessionalsProps []
}


function BoxProfessionals ({data}: DataType) {

    function changeImg (props: BoxProfessionalsProps) {
        if(props.professionals === 'Psicólogos'){
            return <div className="img_articleh6">
                        <Image src={imagens.Profession1} alt='Profission_1' width={600} height={614} />
                    </div>
        } else if (props.professionals === 'Psiquiatras') {
            return <div className="img_articleh6">
                        <Image src={imagens.Profession2} alt='Profission_2' width={600} height={591} />
                    </div>
        } else if (props.professionals === 'Terapeutas Ocupacionais'){
            return <div className="img_articleh6">
                        <Image src={imagens.Profession3} alt='Profission_3' width={600} height={561} />
                    </div>
        }
    }

    return(
        <>
            {data.map((names)=>{
                return <div className="box_profession">
                            {changeImg(names.professionals)}
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
                
                    }
                )
            }
        </>
    )
} export default BoxProfessionals