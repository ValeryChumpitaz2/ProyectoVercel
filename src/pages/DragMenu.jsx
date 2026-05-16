import { useState } from "react";

import {
  DndContext,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";

function MealItem({ meal }) {

  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({
      id: meal.name,
    });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (

    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="bg-white p-4 rounded-2xl shadow-md cursor-grab active:cursor-grabbing"
    >

      🍽 {meal.name}

    </div>

  );
}

function DropZone({ id, children }) {

  const { setNodeRef } = useDroppable({
    id,
  });

  return (

    <div
      ref={setNodeRef}
      className="bg-orange-50 p-4 rounded-2xl min-h-[80px]"
    >

      {children}

    </div>

  );
}

export default function DragMenu() {

  const meals = [
    { name: "Chicken" },
    { name: "Rice" },
    { name: "Salad" },
    { name: "Pizza" },
    { name: "Pasta" },
    { name: "Sushi" },
  ];

  const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const [planner, setPlanner] = useState({});

  const onDragEnd = (event) => {

    const { active, over } = event;

    if (!over) return;

    const mealName = active.id;

    const [day, slot] = over.id.split("-");

    setPlanner((prev) => ({

      ...prev,

      [day]: {

        ...prev[day],

        [slot]: mealName,

      },

    }));

  };

  return (

    <div className="min-h-screen bg-orange-50 p-10">

      {/* TITULO */}
      <h1 className="text-5xl font-bold text-center mb-10">

        📅 Drag & Drop Meal Planner

      </h1>

      <DndContext onDragEnd={onDragEnd}>

        <div className="grid md:grid-cols-3 gap-10">

          {/* MEALS */}
          <div className="bg-white p-6 rounded-3xl shadow">

            <h2 className="text-2xl font-bold mb-6">

              🍽 Comidas

            </h2>

            <div className="space-y-4">

              {meals.map((meal) => (

                <MealItem key={meal.name} meal={meal} />

              ))}

            </div>

          </div>

          {/* PLANNER */}
          <div className="md:col-span-2 space-y-6">

            {days.map((day) => (

              <div
                key={day}
                className="bg-white p-6 rounded-3xl shadow"
              >

                <h2 className="text-xl font-bold mb-4">

                  {day}

                </h2>

                <div className="grid md:grid-cols-3 gap-4">

                  {/* BREAKFAST */}
                  <DropZone id={`${day}-breakfast`}>

                    <p className="font-bold mb-2">

                      🌅 Desayuno

                    </p>

                    {planner[day]?.breakfast}

                  </DropZone>

                  {/* LUNCH */}
                  <DropZone id={`${day}-lunch`}>

                    <p className="font-bold mb-2">

                      🍽 Almuerzo

                    </p>

                    {planner[day]?.lunch}

                  </DropZone>

                  {/* DINNER */}
                  <DropZone id={`${day}-dinner`}>

                    <p className="font-bold mb-2">

                      🌙 Cena

                    </p>

                    {planner[day]?.dinner}

                  </DropZone>

                </div>

              </div>

            ))}

          </div>

        </div>

      </DndContext>

    </div>

  );
}