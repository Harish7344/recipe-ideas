# Recipe Finder Application

## Overview

The Recipe Finder Application is a React-based web app that allows users to search for recipes based on ingredients, mood, and dietary preferences. It fetches data from the MealDB API and displays relevant recipes. Users can view detailed recipes, including ingredients and instructions, and save recipes for future reference.

## Features

- **Search Recipes by Ingredients**: Enter ingredients and search for recipes that use those ingredients.
- **Filter Recipes by Mood**: Choose from different mood-based recipe filters like "Comfort Food," "Healthy," and "Experimental."
- **Filter Recipes by Dietary Preferences**: Select from "Vegetarian" and "Gluten-Free" options.
- **Recipe Details**: View detailed information about a selected recipe, including ingredients and instructions.
- **Save Recipes**: Save favorite recipes for easy access later.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: State management library for managing global state.
- **Redux Thunk**: Middleware for handling asynchronous actions in Redux.
- **React Router**: For handling navigation between different pages.
- **Axios**: For making HTTP requests to the MealDB API.

## File Structure

```
/src
  /components
    IngredientInput.js      // Component for entering ingredients and searching recipes.
    MoodFilter.js           // Component for selecting mood and dietary filters.
    RecipeCard.js           // Component for displaying individual recipe cards.
    RecipeList.js           // Component for displaying a list of recipes.
    RecipeDetails.js        // Component for displaying detailed recipe information.
  /redux
    /actions.js             // Redux actions for setting ingredients, mood, and dietary preferences.
    /reducers.js            // Redux reducers for managing state.
    /store.js               // Redux store configuration.
  /services
    api.js                  // API services for fetching recipes and details from the MealDB API.
  /pages
    Home.js                 // Main page for searching and displaying recipes.
    SavedRecipes.js         // Page for displaying saved recipes.
  App.js                    // Main application component.
  index.js                  // Entry point for the React application.
  App.css                   // Styles for the app.
```

## Setup

To get started with the project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/Harish7344/recipe-ideas.git
```

### 2. Install dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
cd recipe-finder-app
npm install
```

### 3. Run the application

Once the dependencies are installed, you can start the application:

```bash
npm start
```

This will start the development server and open the app in your default web browser at `http://localhost:3000`.

## Functionality

### Home Page (`Home.js`)

The Home page allows users to:
- **Search by Ingredients**: Enter ingredients into the input field and search for recipes.
- **Filter by Mood and Dietary Preferences**: Choose the mood (Comfort, Healthy, Experimental) and dietary preferences (Vegetarian, Gluten-Free) to filter recipes.
- **View Recipe List**: Recipes are displayed as cards with a thumbnail and a link to view the recipe in detail.

### Ingredient Input Component (`IngredientInput.js`)

- Users can enter ingredients in a text input field and either press Enter or click the "Search" button to fetch recipes containing those ingredients.
- The component updates the Redux state with the entered ingredients.

### Mood Filter Component (`MoodFilter.js`)

- Allows users to select a mood filter (Comfort, Healthy, Experimental) and a dietary preference (Vegetarian, Gluten-Free).
- Updates the Redux state for mood and dietary preference.

### Recipe Card Component (`RecipeCard.js`)

- Displays a card for each recipe, showing its name and thumbnail.
- Provides a link to the recipe details page.

### Recipe Details Page (`RecipeDetails.js`)

- Shows detailed information about the selected recipe, including ingredients and instructions.
- The recipe data is fetched from the MealDB API based on the recipe ID.

### Saved Recipes Page (`SavedRecipes.js`)

- Displays a list of saved recipes with their name and thumbnail.
- Users can view and manage their saved recipes.

## Redux Store

The state is managed using Redux. The store holds the following state variables:

- `ingredients`: The ingredients entered by the user.
- `mood`: The selected mood filter (Comfort, Healthy, Experimental).
- `dietaryPreference`: The selected dietary preference (Vegetarian, Gluten-Free).
- `recipes`: The list of recipes fetched based on the entered ingredients, mood, and dietary preferences.
- `savedRecipes`: The list of recipes saved by the user.

### Actions (`actions.js`)

- `setIngredients`: Sets the ingredients in the Redux state.
- `setMood`: Sets the mood filter in the Redux state.
- `setDietaryPreference`: Sets the dietary preference in the Redux state.
- `fetchRecipes`: Fetches recipes based on ingredients, mood, and dietary preferences from the MealDB API.
- `saveRecipe`: Adds a recipe to the saved recipes list in the Redux state.

### Reducers (`reducers.js`)

The reducers handle the updates to the state based on the dispatched actions.

### Store (`store.js`)

The store is created using Redux's `createStore` method, with `redux-thunk` middleware for handling asynchronous actions.

## API Integration

### Fetching Recipes

The `fetchRecipes` action makes a GET request to the MealDB API to search for recipes that contain the entered ingredients:

```javascript
axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
```

### Fetching Recipe Details

The `fetchRecipeDetails` function fetches detailed information about a recipe by its ID:

```javascript
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
```

## Usage

### Searching Recipes

1. Enter ingredients in the **Ingredient Input** field and press "Search" or hit Enter.
2. Recipes will be fetched based on the entered ingredients, mood, and dietary preferences.
3. Recipes will be displayed in a list of cards, and users can click to view more details.

### Filtering Recipes

1. Select a **Mood** from the dropdown (Comfort, Healthy, Experimental).
2. Select a **Dietary Preference** from the dropdown (Vegetarian, Gluten-Free).
3. The recipe list will automatically update based on the selected filters.

### Viewing Recipe Details

- Click on any recipe card to view detailed information about the recipe, including its ingredients and cooking instructions.

### Saving Recipes

- Currently, the functionality to save recipes is implemented but not linked to a page in this version. The action `saveRecipe` can be dispatched to save a recipe to the Redux state.

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.