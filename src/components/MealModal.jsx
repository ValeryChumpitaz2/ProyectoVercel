function MealModal({
  selectedMeal,
  setSelectedMeal,
}) {

  if (!selectedMeal) return null;
const translateText = async (text) => {

  try {

    const response = await fetch(
      "https://libretranslate.de/translate",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          q: text,
          source: "en",
          target: "es",
          format: "text",
        }),
      }
    );

    const data = await response.json();

    return data.translatedText;

  } catch (error) {

    console.log(error);

    return text;
  }
};
  return (

    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-6">

      <div className="bg-white max-w-3xl w-full rounded-3xl overflow-y-auto max-h-[90vh] relative">

        {/* CERRAR */}
        <button
          onClick={() => setSelectedMeal(null)}
          className="absolute top-5 right-5 bg-black text-white w-10 h-10 rounded-full"
        >

          ✕

        </button>

        {/* IMAGEN */}
        <img
          src={selectedMeal.image}
          alt={selectedMeal.name}
          className="w-full h-80 object-cover"
        />

        {/* CONTENIDO */}
        <div className="p-8">

          <h1 className="text-4xl font-bold mb-6 text-orange-500">

            {selectedMeal.name}

          </h1>

          {/* INFO */}
          <div className="flex flex-wrap gap-4 mb-8">

            <div className="bg-orange-100 px-4 py-2 rounded-xl">

              ⏱ {selectedMeal.cookTimeMinutes} min

            </div>

            <div className="bg-orange-100 px-4 py-2 rounded-xl">

              🔥 {selectedMeal.caloriesPerServing} kcal

            </div>

            <div className="bg-orange-100 px-4 py-2 rounded-xl">

              ⭐ {selectedMeal.rating}

            </div>

          </div>

          {/* INGREDIENTES */}
          <h2 className="text-2xl font-bold mb-4">

            🥗 Ingredientes

          </h2>

          <ul className="mb-8 space-y-3">

            {selectedMeal.ingredients?.map(
              (ingredient, index) => (

                <li
                  key={index}
                  className="bg-gray-100 p-3 rounded-xl"
                >

                  {ingredient}

                </li>

              )
            )}

          </ul>

          {/* PASOS */}
          <h2 className="text-2xl font-bold mb-4">

            👨‍🍳 Preparación

          </h2>

          <div className="space-y-4">

            {selectedMeal.instructions?.map(
              (step, index) => (

                <div
                  key={index}
                  className="bg-orange-50 p-5 rounded-2xl"
                >

                  <span className="font-bold text-orange-500">

                    Paso {index + 1}

                  </span>

                  <p className="mt-2 text-gray-700">

                    {step}

                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>

  );
}

export default MealModal;