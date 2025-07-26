import { useState } from 'react';
import useRecipeStore from './store/recipeStore';

function App() {
  const [title, setTitle] = useState('');
  const recipes = useRecipeStore((state) => state.recipes);
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleAdd = () => {
    if (title.trim()) {
      addRecipe({ title });
      setTitle('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Recipe Sharing App</h1>

      <input
        type="text"
        placeholder="Enter recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', marginRight: '10px', width: '250px' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 16px' }}>
        Add Recipe
      </button>

      <ul style={{ marginTop: '20px' }}>
        {recipes.map((recipe, index) => (
          <li key={index} style={{ padding: '4px 0' }}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;