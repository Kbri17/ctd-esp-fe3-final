import "./index.css";
import { Routes, Route } from "react-router-dom";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Layouts from "./Layouts/Layout";
import { ThemeProvider } from './Context/ThemeContext';
import Contact from "./Routes/Contact";


function App() {
  return (
    <div className="App">
    
    <ThemeProvider>
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/envio" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Route>
    </Routes>
    </ThemeProvider>
    </div>

  );
}

export default App;
