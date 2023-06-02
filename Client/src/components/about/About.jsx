import style from './about.module.css'
import myPhoto from "./foto.jpg";

const about = () => {
    return (

        <div className={style.info}>

            <div className={style.foto}>
                <img src={myPhoto} alt="Mi foto" />
                <h1>Un Poco Sobre Mi</h1>
                <h2>Nelson Jose Gabriel Rojas</h2>
                <h2>Edad: 19 años</h2>
                <h2>vivo en : Argentina-Tucuman</h2>
                <h2>apacionado por aprender nuevas tec</h2>
            </div>

        </div>
    )
}
export default about;