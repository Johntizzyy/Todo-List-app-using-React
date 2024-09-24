import React from "react";

function FoodList() {
  const [foods, setFood] = React.useState(["Apple", "Banana"]);

  function handleClick() {
    const foodList = document.getElementById("foodList").value;

    // const foodValue = foodList.trim();
    if (foodList) {
      setFood(f => [...f, foodList]);
      document.getElementById("foodList").value = "";

    }
  }

  function remove (index) {
    setFood(foods.filter((_,i) => i!== index))
  }

  return (
    <div>
      <h1>List of Foods</h1>

      <ul>
        {foods.map((food, i) => (
          <li key={i} onClick={() => remove(i)}>{food}</li>
        ))}
      </ul>

      <input type="text" id="foodList" placeholder="Enter Food" />
      <button onClick={handleClick} id="bttn">
        Add food
      </button>
    </div>
  );
}

export default FoodList;



