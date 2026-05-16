import countries from "../data/countries";

function WorldCuisine() {

  return (

    <div className="px-6 md:px-16 py-16 bg-orange-50 min-h-screen">

      <h1 className="text-5xl font-bold text-center mb-14">
        🌎 Cocinas del Mundo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {countries.map((country, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition"
          >

            <img
              src={country.image}
              alt={country.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold mb-2">
                {country.flag} {country.name}
              </h2>

              <p className="text-gray-600 mb-6">
                Explora recetas típicas y platos populares.
              </p>

              <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl hover:bg-orange-600 transition">
                Ver recetas
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default WorldCuisine;