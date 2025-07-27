import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from "./components/RecipeList";
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import { useRecipeStore } from './components/recipeStore'; // ✅ Add this

const App = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes); // ✅ Access store action

  useEffect(() => {
    const initialRecipes = [
      { title: 'Spaghetti Bolognese', description: 'A classic Italian dish.' },
      { title: 'Jollof Rice', description: 'West African spicy rice dish.' },
      { title: 'Pancakes', description: 'Fluffy breakfast favorite.' },
    ];

    setRecipes(initialRecipes); // ✅ Set on mount
  }, [setRecipes]);

  return (
    <Router>
      <div>
        <h1>Recipe App</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;