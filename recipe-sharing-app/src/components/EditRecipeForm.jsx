import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipeId = parseInt(id, 10);

    const recipe = useRecipeStore((state) =>
        state.recipes.find((r) => r.id === recipeId)
    );
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    useEffect(() => {
        if (recipe) {
            setTitle(recipe.title);
            setIngredients(recipe.ingredients);
            setInstructions(recipe.instructions);
        }
    }, [recipe]);

    const handleSubmit = (event) => {
        event.preventDefault();

        updateRecipe({
            id: recipeId,
            title,
            ingredients,
            instructions,
        });

        navigate(`/recipe/${recipeId}`);
    };

    if (!recipe) return <p>Recipe not found</p>;

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Recipe</h2>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Ingredients:</label>
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Instructions:</label>
                <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipeForm;