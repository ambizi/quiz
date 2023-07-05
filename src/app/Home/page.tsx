"use client";
import style from './Style/Quiz.module.css' 
import React, { useState } from 'react'
import Header from '../Components/Quiz/Header'
import Article01 from '../Components/Quiz/Article01'
import ArticleH1 from '../Components/Home/ArticleH1';
import ArticleH2 from '../Components/Home/ArticleH2';
import ArticleH3 from '../Components/Home/ArticleH3';




export default function Home() {

  return (
    <>
        <Header/>
        <Article01/>
        <ArticleH1/>
        <ArticleH2/>
        <ArticleH3/>
    </>
  )
}

