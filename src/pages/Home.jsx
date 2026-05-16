
import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen bg-orange-50">

      {/* HERO */}
      <section className="px-6 md:px-16 py-16 md:py-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>

            <p className="text-orange-500 font-semibold text-lg mb-4">
              🍲 Plataforma de recetas saludables
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Descubre la mejor
              <span className="text-orange-500">
                {" "}comida peruana
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-8">
              Busca recetas por ingredientes, organiza tu menú semanal
              y explora platos peruanos saludables desde una sola app.
            </p>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row gap-4">

              <Link to="/recipes">

                <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition">
                  Explorar recetas
                </button>

              </Link>

              <Link to="/menu">

                <button className="w-full sm:w-auto border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition">
                  Ver menú semanal
                </button>

              </Link>

            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-8 mt-12">

              <div>
                <h2 className="text-3xl font-bold text-orange-500">
                  100+
                </h2>
                <p className="text-gray-600">
                  Recetas
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-500">
                  7 días
                </h2>
                <p className="text-gray-600">
                  Menú semanal
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-500">
                  Gratis
                </h2>
                <p className="text-gray-600">
                  Para estudiantes
                </p>
              </div>

            </div>

          </div>

          {/* IMAGEN */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947"
              alt="Comida peruana"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />

            {/* CARD FLOTANTE */}
            <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 bg-white p-5 rounded-2xl shadow-xl w-[90%] md:w-[70%]">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-gray-500 text-sm">
                    Receta destacada
                  </p>

                  <h3 className="font-bold text-xl">
                    Ají de Gallina
                  </h3>
                </div>

                <div className="bg-orange-500 text-white px-4 py-2 rounded-xl font-bold">
                  ⭐ 4.9
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-16 py-20">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Qué puedes hacer?
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            SmartMeal está diseñado para ayudarte a encontrar
            recetas fáciles y organizar tu alimentación.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">

            <div className="text-5xl mb-6">
              🔎
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Buscar recetas
            </h3>

            <p className="text-gray-600 leading-7">
              Encuentra platos usando ingredientes que ya tienes en casa.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">

            <div className="text-5xl mb-6">
              ❤️
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Guardar favoritos
            </h3>

            <p className="text-gray-600 leading-7">
              Guarda tus recetas favoritas para acceder rápidamente.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">

            <div className="text-5xl mb-6">
              📅
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Plan semanal
            </h3>

            <p className="text-gray-600 leading-7">
              Organiza tus comidas durante toda la semana fácilmente.
            </p>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Home;
