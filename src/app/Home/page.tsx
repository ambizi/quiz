"use client";
import style from './Style/Quiz.module.css' 
import React, { useState } from 'react'
import Header from '../Components/Quiz/Header'
import Article01 from '../Components/Quiz/Article01'
import ArticleH1 from '../Components/Home/ArticleH1';
import ArticleH2 from '../Components/Home/ArticleH2';
import ArticleH3 from '../Components/Home/ArticleH3';
import ArticleH4 from '../Components/Home/ArticleH4';
import ArticleH5 from '../Components/Home/ArticleH5';
import ArticleH6 from '../Components/Home/ArticleH6';
import ArticleH7 from '../Components/Home/ArticleH7';
import ArticleH8 from '../Components/Home/ArticleH8';
import Footer from '../Components/Quiz/Footer';




export default function Home() {

  return (
    <>
        <Header/>
        <Article01/>
        <ArticleH1/>
        <ArticleH2/>
        <ArticleH3/>
        <ArticleH4/>
        <ArticleH5/>
        <ArticleH6/>
        <ArticleH7/>
        <ArticleH8/>
        <Footer/>
    </>
  )
}

