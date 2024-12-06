export const reducer = (state,action) => {
  switch (action.type) {
    case "GET_CHARS":
      return {
        ...state,
        chars: action.paylopad,
      };
    case "ADD_FAV":
      return {
        ...state,
        chars: action.payloads,
      };
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