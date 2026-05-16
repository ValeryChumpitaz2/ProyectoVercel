import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import FavoritesPage from "./pages/FavoritesPage";
import Peru from "./pages/Peru";
import Menu from "./pages/Menu";
import Donations from "./pages/Donations";

function App() {

  return (

    <BrowserRouter>

      <div className="min-h-screen bg-orange-50">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/recipes"
            element={<Recipes />}
          />

          <Route
            path="/favorites"
            element={<FavoritesPage />}
          />

          <Route
            path="/peru"
            element={<Peru />}
          />

          <Route path="/Menu" element={<Menu />} />

          <Route
            path="/donations"
            element={<Donations />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;