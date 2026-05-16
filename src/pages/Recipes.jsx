import { useState } from "react";

import MealModal from "../components/MealModal";

function Recipes() {

  const [search, setSearch] = useState("");

  const [recipes, setRecipes] = useState([]);

  const [selectedRecipe, setSelectedRecipe] =
    useState(null);

  // TRADUCCIONES ESPAÑOL → INGLÉS
  const translations = {

    pollo: "chicken",
    arroz: "rice",
    carne: "meat",
    pescado: "fish",
    papa: "potato",
    queso: "cheese",
    tomate: "tomato",
    leche: "milk",
    huevo: "egg",
    pan: "bread",
    pasta: "pasta",
    atun: "tuna",
    cerdo: "pork",
    cebolla: "onion",
    ajo: "garlic",
    limon: "lemon",
    camarones: "shrimp",
    fideos: "noodles",
    ensalada: "salad",

  };

  // BUSCAR RECETAS
  const searchRecipes = async () => {

    try {

      // TRADUCE SI EXISTE EN EL DICCIONARIO
      const translatedSearch =
        translations[search.toLowerCase()] || search;

      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${translatedSearch}`
      );

      const data = await response.json();

      setRecipes(data.recipes || []);

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="min-h-screen bg-orange-50 px-6 md:px-16 py-16">

      {/* TITULO */}
      <div className="text-center mb-14">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">

          🔎 Buscar Recetas

        </h1>

        <p className="text-gray-600 text-lg mb-3">

          Busca recetas internacionales con instrucciones completas.

        </p>

        <p className="text-orange-500 font-semibold">

          ✅ Puedes escribir ingredientes en español
          o inglés.

        </p>

      </div>

      {/* SEARCH */}
      <div className="flex flex-col md:flex-row gap-4 mb-16">

        <input
          type="text"
          placeholder="Ejemplo: pollo, arroz, pasta..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-5 rounded-2xl border border-orange-200 text-lg outline-none focus:ring-4 focus:ring-orange-200"
        />

        <button
          onClick={searchRecipes}
          className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition"
        >

          Buscar

        </button>

      </div>

      {/* SIN RESULTADOS */}
      {recipes.length === 0 && (

        <div className="text-center text-gray-500 text-lg">

          🍽 Busca un ingrediente para descubrir recetas.

        </div>

      )}

      {/* RECETAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {recipes.map((recipe) => (

          <div
            key={recipe.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >

            {/* IMAGEN */}
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-64 object-cover"
            />

            {/* CONTENIDO */}
            <div className="p-6">

              {/* INFO SUPERIOR */}
              <div className="flex justify-between items-center mb-4">

                <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-xl text-sm font-semibold">

                  ⏱ {recipe.cookTimeMinutes} min

                </span>

                <span className="font-bold text-yellow-500">

                  ⭐ {recipe.rating}

                </span>

              </div>

              {/* NOMBRE */}
              <h2 className="text-2xl font-bold mb-4">

                {recipe.name}

              </h2>

              {/* NUTRICION */}
              <div className="flex flex-wrap gap-3 mb-5">

                <div className="bg-gray-100 px-3 py-2 rounded-xl text-sm">

                  🔥 {recipe.caloriesPerServing} kcal

                </div>

                <div className="bg-gray-100 px-3 py-2 rounded-xl text-sm">

                  🍽 {recipe.servings} porciones

                </div>

              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-6">

                {recipe.tags?.map((tag, index) => (

                  <span
                    key={index}
                    className="bg-orange-500 text-white px-3 py-1 rounded-xl text-sm"
                  >

                    {tag}

                  </span>

                ))}

              </div>

              {/* BOTON */}
              <button
                onClick={() => setSelectedRecipe(recipe)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold transition"
              >

                Ver preparación

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* MODAL */}
      <MealModal
        selectedMeal={selectedRecipe}
        setSelectedMeal={setSelectedRecipe}
      />

    </div>

  );
}

export default Recipes;