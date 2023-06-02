

const initialState = {
    myFavorites: [],
    allCharacters: [],
   
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FAV":
        return {
          ...state,
          myFavorites: action.payload,
          allCharacters: action.payload,
        };
      case "REMOVE_FAV":
        return {
          ...state,
          myFavorites: action.payload,
          allCharacters: action.payload
  
        };

        case "FILTER_CARD":
            const allCharactersFiltered = [...state.allCharacters].filter((char) => char.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharactersFiltered

            }

        case "ORDER_CARD":
            const allCharactersCopy = [...state.allCharacters]
           
            return {
                ...state,
                myFavorites: 
                action.payload === "A"  
                 ? allCharactersCopy.sort((a,b) => a.id - b.id)
                 :allCharactersCopy.sort((a,b) => b.id - a.id)
            }

        default: return { ...state }
    }
}

export default reducer;