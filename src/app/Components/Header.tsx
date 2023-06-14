
import { imagens } from '../uteis/helper'
import Image from 'next/image'

export default function Header () {
    
    return(
        <>
      <header>
        <div className='box1'>
          <menu>
            <Image src={imagens.Logo} alt="Logo" width={110} height={50}/>
            <div className='tab'>
              <a href="#" className='link_c'>Como funciona</a>
              <button className='pesquisa'>Participar da Pesquisa</button>
            </div>
          </menu>
        </div>
      </header>
        </>
    )

}