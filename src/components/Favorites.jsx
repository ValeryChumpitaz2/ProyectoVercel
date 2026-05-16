function Favorites({ favorites }) {

  return (

    <div>

      {favorites.length === 0 ? (

        <p>No hay favoritos aún.</p>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {favorites.map((meal) => (

            <div
              key={meal.idMeal}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-52 object-cover"
              />

              <div className="p-4">

                <h2 className="text-xl font-bold">
                  {meal.strMeal}
                </h2>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default Favorites;