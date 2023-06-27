import quizContext from "@/app/Context/quizContext";
import { useContext } from "react";




import Quiz_01 from "../Quiz/Quiz_01";
import Quiz_02 from "../Quiz/Quiz_02";
import Quiz_03 from "../Quiz/Quiz_03";
import Quiz_04 from "../Quiz/Quiz_04";
import Quiz_05 from "../Quiz/Quiz_05";
import Quiz_06 from "../Quiz/Quiz_06";
import Quiz_07 from "../Quiz/Quiz_07";
import Quiz_08 from "../Quiz/Quiz_08";
import Quiz_09 from "../Quiz/Quiz_09";
import Quiz_10 from "../Quiz/Quiz_10";
import Quiz_11 from "../Quiz/Quiz_11";
import Quiz_12 from "../Quiz/Quiz_12";




function setQuizz(){

 const {getCurrently} = useContext(quizContext)

    switch(getCurrently) {
      case 1:
        return <Quiz_01/>
      case 2:
        return <Quiz_02/>
      case 3:
        return <Quiz_03/>
      case 4:
        return <Quiz_04/>
      case 5:
        return <Quiz_05/>
      case 6:
        return <Quiz_06/>
      case 7:
        return <Quiz_07/>
      case 8:
        return <Quiz_08/>
      case 9:
        return <Quiz_09/>
      case 10:
        return <Quiz_10/>
      case 11:
        return <Quiz_11/> 
      case 12:
        return <Quiz_12/>                         
      default:
        return <Quiz_01/>    
    }

  }  export default setQuizz