import { useState } from 'react';
import style from '../searchbar/SearchBar.module.css';




const SearchBar = ({ onSearch }) => {

   const [id, setId] = useState('');
   const handleChange = (event) => { setId(event.target.value) }
   const rep = () => { const id = Math.floor(Math.random() * (826 - 0 + 1) + 0); onSearch(id);};
   return (
      <div className={style.barra}>
        <button className={style.randomButton} onClick={rep}>
          Random
        </button>
        <input className={style.searchInput} type="search" value={id} onChange={handleChange} />
        <button className={style.addButton} onClick={() => onSearch(id)}>
          Agregar
        </button>
      </div>
    );
  };
  
  export default SearchBar;
