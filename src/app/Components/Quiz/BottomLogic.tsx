import React, { useContext, SetStateAction, Dispatch, useState } from "react";


type PropsAnswer = {
    questionOne: String,
    questionTwo: String,
    questionTree: String,
    questionFour: String,
    questionFive: String,
    questionSix: String,
    questionSeven: String,
    questionEight: String,
    questionNine: String,
    questionTen: String,
    questionEleven: String
}

type PropsQuiz = {
    getCurrently: Number
    setCurrently: Dispatch<SetStateAction<Number>>
    getAnswers: PropsAnswer
    setAnswers:Dispatch<SetStateAction<PropsAnswer>>
}


