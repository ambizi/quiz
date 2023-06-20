import React, { useContext, createContext, Dispatch, SetStateAction } from "react"

type QuizProps = {
    getCurrently:number
    setCurrently: Dispatch<SetStateAction<number>>
    getAnsewers6: boolean
    setAnsewers6: Dispatch<SetStateAction<boolean>>
}

const quizContext = createContext({} as QuizProps)

export default quizContext