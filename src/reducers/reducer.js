export const reducer = (state,action) => {
  switch (action.type) {
    case "GET_CHARS":
      return {
        ...state,
        chars: action.payload,
      };
    case "ADD_FAV":
      const updatedFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(updatedFavs)); 
      return { ...state, favs: updatedFavs };
    
    case "DELETE_FAV":
        const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload.id);
      return {
        ...state,
        favs: filteredFavs,
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: "",
      };
    default:
      return state;
  }
};