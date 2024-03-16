import CanvasModel from "../canvas"
import Customizer from "../pages/Customizer";
import HomePage from "../pages/HomePage";
import { Link } from "react-router-dom"

import styles from "./Home.module.css";


function Homec() {
  return (

    <div className="app transition-all ease-in">
        <HomePage />
        <CanvasModel />
        <Customizer />
       
    </div>
    
 
  )
}

export default Homec;