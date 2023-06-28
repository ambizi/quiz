import React, { useContext, createContext, Dispatch, SetStateAction } from "react"

type QuizProps = {
    getCurrently: number
    setCurrently: Dispatch<SetStateAction<number>>

    getAnsewers1: string
    setAnsewers1: Dispatch<SetStateAction<string>>

    getAnsewers2: boolean
    setAnsewers2: Dispatch<SetStateAction<boolean>> 
    
    getAnsewers3: boolean
    setAnsewers3: Dispatch<SetStateAction<boolean>>

    getAnsewers4: boolean
    setAnsewers4: Dispatch<SetStateAction<boolean>> 

    getAnsewers5: boolean
    setAnsewers5: Dispatch<SetStateAction<boolean>> 

    getAnsewers6: boolean
    setAnsewers6: Dispatch<SetStateAction<boolean>> 

    getAnsewers7: boolean
    setAnsewers7: Dispatch<SetStateAction<boolean>> 

    getAnsewers8: boolean
    setAnsewers8: Dispatch<SetStateAction<boolean>> 

    getAnsewers9: boolean
    setAnsewers9: Dispatch<SetStateAction<boolean>> 

    getAnsewers10: boolean
    setAnsewers10: Dispatch<SetStateAction<boolean>> 

    getAnsewers11: boolean
    setAnsewers11: Dispatch<SetStateAction<boolean>> 
    
    getAnsewers12: boolean
    setAnsewers12: Dispatch<SetStateAction<boolean>>

    getAnsewers13: boolean
    setAnsewers13: Dispatch<SetStateAction<boolean>>

}

const quizContext = createContext({} as QuizProps)


export default quizContext

