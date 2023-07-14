import React, {useContext, createContext, Dispatch, SetStateAction} from "react"


type CycleProps = {
    getCurrently: any
    setCurrently: Dispatch<SetStateAction<any>>
}

const homeContext = createContext ({}as CycleProps)

export default homeContext