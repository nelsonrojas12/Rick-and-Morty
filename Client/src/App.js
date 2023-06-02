import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/navcito/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Detail from './components/Deatil/Deatil';
import About from './components/about/About';
import Form from './components/Form/Form';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import Favorites from './components/favorites/Favorites'




function App() {


  const [characters, setCharacters] = useState([]);
  const location = useLocation()

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  


  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
  
      const response = await axios.get(URL, {
        params: {
          email: email,
          password: password
        }
      });
  
      const { data } = response;
      const { access } = data;
      setAccess(data);
      
      if (access) {
        navigate('/home');
      }
    } catch (error) {
      console.error(error);
     
    }
  }

  useEffect(() => {

    !access && navigate('/');

  }, [access]);

  async function onSearch(id) {
    try {
      const endpoint = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      const { data } = endpoint;
      
      const respuesta = verificarPersonaje(data.id, characters);
      if (respuesta === true) {
        window.alert("El personaje ya existe, no se puede repetir");
      } else {
        if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  const verificarPersonaje = (id, characters) => {
    let aux = false;
    for (const i of characters) {
      if (id === i.id) {
        aux = true;
        break;
      }
    }
    return aux;
  };


  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };



  return (
    <div className='App'>



      {location.pathname !== '/' && <Nav onSearch={onSearch} />}

      <Routes>

        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='/' element={<Form login={login} />} />
        <Route path='/Favorites' element={<Favorites />} />
      </Routes>


    </div>
  );



}


export default App;
