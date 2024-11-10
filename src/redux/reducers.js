const initialState = {
    ingredients: "",
    mood: "",
    dietaryPreference: "",
    recipes: [],
    savedRecipes: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_INGREDIENTS":
        return {
          ...state,
          ingredients: action.payload,
        };
      case "SET_MOOD":
        return {
          ...state,
          mood: action.payload,
        };
      case "SET_DIETARY_PREFERENCE":
        return {
          ...state,
          dietaryPreference: action.payload,
        };
      case "SET_RECIPES":
        return {
          ...state,
          recipes: action.payload,
        };
      case "SAVE_RECIPE":
        return {
          ...state,
          savedRecipes: [...state.savedRecipes, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  