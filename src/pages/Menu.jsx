import { useState, useRef } from "react";
import html2canvas from "html2canvas";

function Menu() {

  const plannerRef = useRef();

  // 🍽 comidas con calorías
  const meals = {

    breakfast: [
      { name: "🥣 Avena", kcal: 250 },
      { name: "🥚 Huevos", kcal: 200 },
      { name: "🥑 Pan con palta", kcal: 300 },
      { name: "🍞 Tostadas", kcal: 180 },
    ],

    lunch: [
      { name: "🍗 Pollo con arroz", kcal: 650 },
      { name: "🍝 Pasta", kcal: 700 },
      { name: "🐟 Pescado", kcal: 500 },
      { name: "🍛 Arroz chaufa", kcal: 750 },
    ],

    dinner: [
      { name: "🥗 Ensalada", kcal: 250 },
      { name: "🍲 Sopa", kcal: 300 },
      { name: "🥪 Sándwich", kcal: 400 },
      { name: "🍳 Omelette", kcal: 280 },
    ],

    snacks: [
      { name: "🍌 Banana", kcal: 100 },
      { name: "🍎 Manzana", kcal: 80 },
      { name: "🥜 Maní", kcal: 200 },
      { name: "🍫 Chocolate", kcal: 220 },
    ],

    drinks: [
      { name: "💧 Agua", kcal: 0 },
      { name: "☕ Café", kcal: 20 },
      { name: "🧃 Jugo natural", kcal: 120 },
      { name: "🥤 Gaseosa", kcal: 150 },
    ],

  };

  const days = [
    "Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"
  ];

  const [plan, setPlan] = useState(null);

  // 🔄 generar plan
  const generatePlan = () => {

    const newPlan = {};

    days.forEach((day) => {

      newPlan[day] = {

        breakfast: meals.breakfast[Math.floor(Math.random() * meals.breakfast.length)],

        lunch: meals.lunch[Math.floor(Math.random() * meals.lunch.length)],

        dinner: meals.dinner[Math.floor(Math.random() * meals.dinner.length)],

        snacks: meals.snacks[Math.floor(Math.random() * meals.snacks.length)],

        drinks: meals.drinks[Math.floor(Math.random() * meals.drinks.length)],

      };

    });

    setPlan(newPlan);
  };

  // 🔥 total calorías por día
  const getCalories = (day) => {

    if (!plan) return 0;

    const d = plan[day];

    return (
      d.breakfast.kcal +
      d.lunch.kcal +
      d.dinner.kcal +
      d.snacks.kcal +
      d.drinks.kcal
    );

  };

  // 📸 export PNG
  const exportPNG = async () => {

    const canvas = await html2canvas(plannerRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const link = document.createElement("a");

    link.download = "smartmeal-nutrition.png";
    link.href = canvas.toDataURL();

    link.click();

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6">

      {/* HEADER */}
      <div className="text-center mb-8">

        <h1 className="text-4xl font-bold text-orange-600">

          🥗 Nutrición Smart SaaS

        </h1>

        <p className="text-gray-600">

          Plan con calorías reales por día

        </p>

        <div className="flex justify-center gap-3 mt-5">

          <button
            onClick={generatePlan}
            className="bg-orange-500 text-white px-6 py-2 rounded-xl"
          >

            🔄 Generar

          </button>

          <button
            onClick={exportPNG}
            className="bg-black text-white px-6 py-2 rounded-xl"
          >

            📸 Exportar PNG

          </button>

        </div>

      </div>

      {/* PLAN */}
      {!plan ? (

        <div className="text-center text-gray-500 mt-10">

          Genera tu plan nutricional

        </div>

      ) : (

        <div
          ref={plannerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >

          {days.map((day) => (

            <div
              key={day}
              className="bg-white rounded-3xl shadow-lg p-5"
            >

              {/* HEADER DIA */}
              <div className="flex justify-between mb-4">

                <h2 className="font-bold text-orange-600">

                  📅 {day}

                </h2>

                <span className="text-sm font-bold text-red-500">

                  🔥 {getCalories(day)} kcal

                </span>

              </div>

              {/* CARDS */}
              <div className="space-y-3 text-gray-700">

                <div className="bg-orange-50 p-3 rounded-xl">
                  🌅 <b>Desayuno:</b> {plan[day].breakfast.name} ({plan[day].breakfast.kcal} kcal)
                </div>

                <div className="bg-orange-50 p-3 rounded-xl">
                  🍱 <b>Almuerzo:</b> {plan[day].lunch.name} ({plan[day].lunch.kcal} kcal)
                </div>

                <div className="bg-orange-50 p-3 rounded-xl">
                  🌙 <b>Cena:</b> {plan[day].dinner.name} ({plan[day].dinner.kcal} kcal)
                </div>

                <div className="bg-blue-50 p-3 rounded-xl">
                  🍿 <b>Snacks:</b> {plan[day].snacks.name} ({plan[day].snacks.kcal} kcal)
                </div>

                <div className="bg-cyan-50 p-3 rounded-xl">
                  🥤 <b>Bebidas:</b> {plan[day].drinks.name} ({plan[day].drinks.kcal} kcal)
                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default Menu;