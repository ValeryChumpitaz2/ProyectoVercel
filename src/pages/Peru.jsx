// src/pages/Peru.jsx

import peruvianMeals from "../data/countries";

function Peru() {

  return (

    <div className="px-10 py-16">

      <h1 className="text-5xl font-bold text-orange-500 mb-10">
        🇵🇪 Comida Peruana
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {peruvianMeals.map((meal, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >

            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">

              <h2 className="text-2xl font-bold mb-2">
                {meal.name}
              </h2>

              <p className="text-gray-600">
                {meal.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Peru;