import React, { useContext, createContext, Dispatch, SetStateAction } from "react"

type QuizProps = {
    getCurrently:number
    setCurrently: Dispatch<SetStateAction<number>>
}

const quizContext = createContext({} as QuizProps)

export default quizContext