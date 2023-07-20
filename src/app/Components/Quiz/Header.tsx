
import { imagens } from '../../uteis/helper'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'

export default function Header () {

  const [menuItens,menuItensSet] = useState (false)

  const openMenu = () => {
    menuItensSet(!menuItens)
  }
    return(
        <>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>  
      <header className='header'>
        <div className='box1'>
          <menu className='box_menu'>
            <div className='menu'>
              <Link href={'#'}>
                <Image src={imagens.Logo_2} alt="Logo" width={110} height={50}/>
              </Link>
              <span className="material-icons" onClick={openMenu}>menu</span>
            </div>
            <div className='box_menus'>
              <ul className={menuItens ? "menuOpen" : "menuClase"}>
                    <li><a href="#" className='link_c'>Para você</a></li>
                    <li><a href="#" className='link_c'>Para empresas</a></li>
                    <li><a href="#" className='link_c'>Conteúdos</a></li>
                    <li><button className='pesquisa'>Quero Experimentar</button></li>
              </ul>
            </div>
          </menu>
        </div>
      </header>
        </>
    )
}