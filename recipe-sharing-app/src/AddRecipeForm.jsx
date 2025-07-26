import { useState } from 'react';
import useRecipeStore from './store/recipeStore';

function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const addRecipe = useRecipeStore((state) => state.addRecipe);

    const handleAdd = () => {
        if (title.trim()) {
            addRecipe({ title });
            setTitle('');
        }
    };

    return (
        <div>
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
        </div>
    );
}

export default AddRecipeForm;