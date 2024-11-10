import axios from "axios";

export const setIngredients = (ingredients) => ({
  type: "SET_INGREDIENTS",
  payload: ingredients,
});

export const setMood = (mood) => ({
  type: "SET_MOOD",
  payload: mood,
});

export const setDietaryPreference = (diet) => ({
  type: "SET_DIETARY_PREFERENCE",
  payload: diet,
});

export const fetchRecipes = (ingredients, mood, dietaryPreference) => {
  return (dispatch) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
      .then((response) => {
        const filteredRecipes = response.data.meals.filter((recipe) => {
          // Apply filters for mood or dietary preference
          // You can add filtering logic here for mood and diet preferences
          return true;
        });
        dispatch({
          type: "SET_RECIPES",
          payload: filteredRecipes,
        });
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  };
};

export const saveRecipe = (recipe) => ({
  type: "SAVE_RECIPE",
  payload: recipe,
});
