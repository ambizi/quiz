import {imagens} from '../../uteis/helper'
import Image from 'next/image'

export type BoxArticle01 = {
  title: string,
  subtitle: string,
  text: string,
  set: string
}

type dataType = {
  data: BoxArticle01
}

export default function Article01 ({data}: dataType) {
    function changeSet () {
      if(data.set === 'link'){
        return <a href="#">Saiba Mais</a>
      } else if (data.set === 'button') {
        return <button className='text3'>
                  Participe do Teste
                  <Image src={imagens.Arrow} alt="Arrow" width={20} height={15} className='arrow'/>
                </button>
      }
    }

    return(
        <>
          <article className='art1'>
            <div className='box2'>
              <div className='art1_box_text'>
                <h1 className='h1'>{data.subtitle}</h1>
                <h2 className='text1'>{data.title}</h2>
                <p className='text2'>{data.text}</p>
                {changeSet()}
              </div>
              <div className='hero_box'>
                <Image src={imagens.Hero} alt="Hero" width={542} height={420} className='hero'/>
              </div>
            </div>
          </article>
        </>
    )

}