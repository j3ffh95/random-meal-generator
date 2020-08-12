// Global Variables
const getMealBtn = document.querySelector("#get_meal");
const mealContainer = document.querySelector("#meal");

getMealBtn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
});
