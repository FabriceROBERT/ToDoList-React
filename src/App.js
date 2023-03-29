import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./css/app.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AddTechno from "./pages/AddTechno";
import AllTechno from "./pages/AllTechno";

function App() {
  const [technos, setTechnos] = useState([]);

  function handleAddTechno(techno) {
    console.log("handleAddTechno", techno);
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }
  // fonction du bouton delete
  function handleDeleteTechno(id) {
    setTechnos(technos.filter((tech) => tech.technoid !== id));
  }

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add"
            element={<AddTechno handleAddTechno={handleAddTechno} />}
          />
          <Route
            path="/all"
            element={
              <AllTechno
                technos={technos}
                handleDeleteTechno={handleDeleteTechno}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
