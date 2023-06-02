import SearchBar from "../searchbar/SearchBar";
import style from'./Nav.module.css'
import { Link } from "react-router-dom";

const Nav = ({onSearch})=>{
return(

    <div className={style.barraNav}>
        <SearchBar onSearch={onSearch}/>

         <div className={style.btAbout}>
         <Link to="/about"><button>About👦🏽</button></Link>
         </div>

         <div className={style.btHome}>
         <Link to="/home"><button>Home<span>🏠</span></button></Link>
         </div>
         
        <div className={style.btFav}>
        <Link to="/Favorites"><button>Favorite💚</button></Link>
        </div>
         
         
    </div>

    
)
};

export default Nav;