import axios from "axios";
import { createContext,useContext,useEffect,useReducer} from "react";
import { reducer } from "../reducers/reducer";
import { data } from "react-router-dom";


const CharStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  chars: [],
  favs: lsFavs,
  theme: "light",
  data : []
};

export const CharProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const urlBase = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);
  
    useEffect(() => {
    axios(urlBase).then((res) =>
      dispatch({ type: "GET_CHARS", payload: res.data})
    );
  }, []);



  return (
    <CharStates.Provider value={{ state, dispatch }}>
      {children}
    </CharStates.Provider>
  );
};


export const useCharStates = () => useContext(CharStates);
