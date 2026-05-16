function SearchBar({
  ingredient,
  setIngredient,
  searchMeals,
}) {

  return (

    <div className="flex gap-4 mb-10">

      <input
        type="text"
        placeholder="Buscar ingrediente..."
        value={ingredient}
        onChange={(e) =>
          setIngredient(e.target.value)
        }
        className="border p-4 rounded-2xl w-full"
      />

      <button
        onClick={searchMeals}
        className="bg-orange-500 text-white px-8 rounded-2xl"
      >
        Buscar
      </button>

    </div>

  );
}

export default SearchBar;