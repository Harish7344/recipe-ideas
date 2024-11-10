import React from "react";
import { useDispatch } from "react-redux";
import { setMood, setDietaryPreference } from "../redux/actions";

const MoodFilter = () => {
  const dispatch = useDispatch();

  const handleMoodChange = (e) => {
    dispatch(setMood(e.target.value));
  };

  const handleDietaryChange = (e) => {
    dispatch(setDietaryPreference(e.target.value));
  };

  return (
    <div>
      <select onChange={handleMoodChange}>
        <option value="comfort">Comfort Food</option>
        <option value="healthy">Healthy</option>
        <option value="experimental">Experimental</option>
      </select>

      <select onChange={handleDietaryChange}>
        <option value="vegetarian">Vegetarian</option>
        <option value="gluten-free">Gluten-Free</option>
      </select>
    </div>
  );
};

export default MoodFilter;
