import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="bg-white shadow-md px-10 py-5 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-orange-500">
        🍲 SmartMeal
      </h1>

      <div className="flex gap-8 font-medium">

        <Link to="/">Inicio</Link>

        <Link to="/recipes">Recetas</Link>

        <Link to="/favorites">Favoritos</Link>

        <Link to="/peru">Comidas del Mundo</Link>

        <Link to="/menu">Menú</Link>

        <Link to="/donations">Donaciones</Link>

      </div>

    </nav>

  );
}

export default Navbar;