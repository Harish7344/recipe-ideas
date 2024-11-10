import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import SavedRecipes from "./pages/SavedRecipes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/saved-recipes" element={<SavedRecipes />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
