import React from "react";
import { useSelector } from "react-redux";

const SavedRecipes = () => {
  const savedRecipes = useSelector((state) => state.savedRecipes);

  return (
    <div className="container">
      <header>Saved Recipes</header>
      <div className="recipe-list">
        {savedRecipes.map((recipe) => (
          <div key={recipe.idMeal}>
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedRecipes;
