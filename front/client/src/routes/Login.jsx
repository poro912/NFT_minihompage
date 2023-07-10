import {Link} from "react-router-dom"
import styles from "./Login.module.css"


function Login() {
  const onChange = (event) => {
    console.log(event.target.value);
}

  return <div><h1 className={styles.title}>Debutante Housing</h1>
      <div/>
     <div>
            <input className={styles.id} 
            type="text" 
            placeholder="ID"
            onChange={onChange} />
            <div>
            <input className={styles.pass} 
            type="text" 
            placeholder="PASSWORD"
            onChange={onChange} />
            <Link to="/Home"><button className={styles.btn}>
            login</button></Link>
            </div>
            </div>
  <div>
    <br />
            <Link to="/non"><button className={styles.btn2}>Guest</button></Link>
    <Link to="/Join"><button className={styles.btn3}>Join</button></Link>

    </div>
    <img className={styles.bookcover} alt="bookcover" src="./img/bookcover.jpg" />
  </div>;
}




export default Login;