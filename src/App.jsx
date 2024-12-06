import "./index.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/envio" element={<Form />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>

      <Footer />
    </div>

  );
}

export default App;
