function WeeklyMenu({ meals = [] }) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {meals.map((meal, index) => (

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

            <h2 className="text-xl font-bold mb-2">
              Día {index + 1}
            </h2>

            <h3 className="text-lg font-semibold">
              {meal.name}
            </h3>

            <p className="text-gray-600 mt-2">
              {meal.description}
            </p>

          </div>

        </div>

      ))}

    </div>

  );
}

export default WeeklyMenu;