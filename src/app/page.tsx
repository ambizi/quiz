import Image from 'next/image'
import { imagens } from './uteis/helper'
import Header from './Components/Header'
import Article01 from './Components/Article01'
import Article02 from './Components/Article02'
import Footer from './Components/Footer'

export default function Home() {

  return (
    <>
      <Header/>
      <Article01/>
      <Article02/>
      <Footer/>
    </>
  )
}
