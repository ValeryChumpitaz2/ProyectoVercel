function MealCard({
  meal,
  getMealDetails,
}) {

  return (

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold mb-4">
          {meal.strMeal}
        </h2>

        <button
          onClick={() =>
            getMealDetails(meal.idMeal)
          }
          className="bg-orange-500 text-white px-5 py-2 rounded-xl"
        >
          Ver receta
        </button>

      </div>

    </div>

  );
}

export default MealCard;