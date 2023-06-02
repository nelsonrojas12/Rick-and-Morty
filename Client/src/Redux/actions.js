import axios from "axios"




export const addFav =  (character) => {
   return async (dispatch) => {
   try {
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        const response = await axios.post(endpoint, character)
        const { data } = response;

         return dispatch({

            type: 'ADD_FAV',
            payload: data,

         });

   } catch (error) {
     console.error(error);
   }
  };
};

export const removeFav = (id) => { 
   return async(dispatch) => {
try {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    const response = await  axios.delete(endpoint)
    const {data} = response;

         return dispatch({

            type: 'REMOVE_FAV',
            payload: data,

         });
      
   
} catch (error) {
   console.error(error);
}
};
};

export const filterCards = (gender) => {
   return { type: "FILTER_CARD", payload: gender }
}

export const orderCards = (orden) => {
   return { type: "ORDER_CARD", payload: orden }
}
