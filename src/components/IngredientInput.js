import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIngredients } from "../redux/actions";

const IngredientInput = () => {
  const [ingredient, setIngredient] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setIngredients(ingredient));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={ingredient}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter ingredients"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default IngredientInput;
