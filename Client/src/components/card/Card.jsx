import { connect } from 'react-redux';
import style from './Card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { useState, useEffect } from 'react';

const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {
  const [isFav, setIsFav] = useState(false);
  const location = useLocation();

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose });
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.contenedor}>
      <div className={style.boton}>
        {location.pathname === '/home' && <button onClick={() => onClose(id)}>X</button>}
        
        {isFav ? (
          <button onClick={handleFavorite}>💚</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <img className={style.imagen} src={image} alt="" />
      <div>
        <Link to={`/detail/${id}`} style={{ color: 'black', textDecoration: 'none' }}>
          <div className={style.name}>
            <h2>Name: {name}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
//smat
