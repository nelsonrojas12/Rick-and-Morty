import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react"; 
import { Link } from "react-router-dom";
import style from "./Detail.module.css"

const Detail = ()=>{
    const { id } = useParams();
    const [character, setCharacter] = useState({});


    
     useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
        if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
         }
        });
        return setCharacter({});
     }, [id]);




     return (
        <div className={style.card}>
          <img src={character?.image} />
          <h1>Name: {character.name && character.name}</h1>
          <h1>Status: {character?.status}</h1>
          <h1>Species: {character?.species}</h1>
          <h1>Gender: {character?.gender}</h1>
          <h1>Origin: {character?.origin?.name}</h1>
      
          <div className={`${style.btDetail} ${style.homeButton}`}>
            <Link to="/home">
              <button>HOME</button>
            </Link>
          </div>
        </div>
      );
};

export default Detail;