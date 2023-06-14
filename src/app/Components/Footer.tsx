import { imagens } from "../uteis/helper"
import Image from "next/image"

export default function Footer () {
    return(
        <>
          <article className='art3'>
            <div className='box4'>
              <div className='brand'>
                <Image src={imagens.Logo} alt="Logo" width={110} height={50}/>
                <p className='text5'>Realizamos com precisão a triagem primária usando inteligencia artificial.</p>
              </div>
              <div className='who'>
                <a href="#" className='link_fo'>A ambizi</a>
                <a href="#" className='link_f'>Quem somos</a>
                <a href="#" className='link_f'>Para Empresas</a>
                <a href="#" className='link_f'>Para voce</a>
              </div>
              <div className='content'>
                <a href="#" className='link_fo'>Conteúdo</a>
                <a href="#" className='link_f'>Blog</a>
              </div>
              <div className='topic'>
                <a href="#" className='link_fo'>Tópicos</a>
                <a href="#" className='link_f'>Depressão</a>
                <a href="#" className='link_f'>Ansiedade</a>
                <a href="#" className='link_f'>Síndromes</a>
                <a href="#" className='link_f'>Relacionamento Abusivo</a>
              </div>
            </div>
          </article>
        </>
    )
}

