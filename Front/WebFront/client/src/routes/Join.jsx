import { useState } from "react";
import {Link} from "react-router-dom"
import styles from "./Join.module.css"

function Join() {
  const [id, setid] = useState();
  const onChangeid = (event) => {
    setid(event.target.value);
  }
  const [nname, setnname] = useState();
  const onChangenname = (event) => {
    setnname(event.target.value);
  }
  const [pass, setpass] = useState();
  const onChangepass = (event) => {
    setpass(event.target.value);
  }

  const LogSubmit = (event) => {
    event.preventDefault();
  }
  return <div>

    <div>
    <button className={styles.backarrow}>➤</button>
    <h4 className={styles.ID}>ID :</h4>
    <h4 className={styles.PASS}>PASS :</h4>
    <h4 className={styles.NAME}>NAME :</h4>
    <button className={styles.btn2}>Join</button>
    <button className={styles.btn3}>Login</button>
    <h1 className={styles.Login}>Login</h1>
        
        <form onSubmit={LogSubmit}>
            <input className={styles.id}
            type="text" 
            placeholder="애오"
            name="id"
            value={id}
            onChange={onChangeid} />

            <input className={styles.nname}
            type="text" 
            placeholder="애애애오"
            name=""
            value={nname}
            onChange={onChangenname} />
            
            <input className={styles.pass}
            type="text" 
            placeholder="애애애오"
            name="pass"
            value={pass}
            onChange={onChangepass} />
            <button className={styles.btn}>Join</button>
            
            </form>
            
            </div>
            <img className={styles.ui} alt="ui" src="./img/ui.png" />
            <img className={styles.Fbg} alt="Fbg2" src="./img/Fbg2.png" />
         </div>
           
      
}

export default Join;