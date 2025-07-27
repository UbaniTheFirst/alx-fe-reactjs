import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from "./components/RecipeList";
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

const App = () => {
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