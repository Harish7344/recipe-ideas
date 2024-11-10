import React, { useEffect } from "react";
import IngredientInput from "../components/IngredientInput";
// import MoodFilter from "../components/MoodFilter";
import RecipeList from "../components/RecipeList";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const ingredients = useSelector((state) => state.ingredients);
  const mood = useSelector((state) => state.mood);
  const dietaryPreference = useSelector((state) => state.dietaryPreference);

  useEffect(() => {
    if (ingredients) {
      dispatch(fetchRecipes(ingredients, mood, dietaryPreference));
    }
  }, [ingredients, mood, dietaryPreference, dispatch]);

  return (
    <div className="container">
      {/* <header>What's for Dinner, Taylor?</header> */}
      <header>Recipe Ideas</header>
      <IngredientInput />
      {/* <MoodFilter /> */}
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Home;
