import { DataBase } from "josm"
import ger from "./../res/lang/ger.json"

interface Lang {
  "tingoMaxoChato": {
    "longName": "Tingo maxo chato"
  }
}



export const lang = new DataBase<Lang>(ger as Lang)
export default lang

