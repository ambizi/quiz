
import { imagens } from '../uteis/helper'
import Image from 'next/image'

export default function Header () {
    
    return(
        <>
      <header>
        <div className='box1'>
          <menu>
            <Image src={imagens.Logo} alt="Logo" width={110} height={50}/>
            <ul className='tab'>
              <a href="#" className='link_c'>Como funciona</a>
              <a href="#" className='pesquisa'>Participar da Pesquisa</a>
            </ul>
          </menu>
        </div>
      </header>
        </>
    )

}