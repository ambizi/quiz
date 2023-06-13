import {imagens} from '../uteis/helper'
import Image from 'next/image'

export default function Article01 () {
    return(
        <>
          <article className='art1'>
            <div className='box2'>
              <div className='art1_box_text'>
                <h1>A revolução técnologica na saúde</h1>
                <h2 className='text1'>Descubra se voce tem algum transtorno mental e como tratá-los</h2>
                <p className='text2'>Realizamos com precisão a triagem primária, usando inteligencia artificial para identificar os fatores relacionados ao desenvolvimento de transtornos mentais</p>
                <p className='text3'>Partcipe do teste
                  <Image src={imagens.Arrow} alt="Arrow" width={20} height={15}/></p>
              </div>
              <Image src={imagens.Hero} alt="Hero" width={475} height={350}/>
            </div>
          </article>
        </>
    )

}