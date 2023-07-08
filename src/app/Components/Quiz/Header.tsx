
import { imagens } from '../../uteis/helper'
import Image from 'next/image'
import Link from 'next/link'

export default function Header () {
    return(
        <>
      <header>
        <div className='box1'>
          <menu>
            <Link href={'#'}>
              <Image src={imagens.Logo_2} alt="Logo" width={110} height={50}/>
            </Link>
            <div className='tab'>
              <a href="#" className='link_c text-navbar'>Para você</a>
              <a href="#" className='link_c text-navbar'>Para empresas</a>
              <a href="#" className='link_c text-navbar'>Conteúdos</a>
              <button className='pesquisa'>Quero Experimentar</button>
            </div>
          </menu>
        </div>
      </header>
        </>
    )
}