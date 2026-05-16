function Trending() {

  const recipes = [
    "Ceviche",
    "Pizza",
    "Sushi",
    "Tacos",
  ];

  return (

    <div className="px-6 md:px-16 py-16 min-h-screen bg-orange-50">

      <h1 className="text-5xl font-bold mb-12 text-center">
        🔥 Trending Recipes
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {recipes.map((recipe, index) => (

          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition"
          >

            <div className="text-5xl mb-6">
              🍽
            </div>

            <h2 className="text-2xl font-bold mb-4">
              {recipe}
            </h2>

            <div className="flex justify-between text-gray-600">

              <span>⭐ 4.9</span>

              <span>❤️ 2.1k</span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Trending;