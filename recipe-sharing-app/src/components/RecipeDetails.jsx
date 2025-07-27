import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = useRecipeStore((state) =>
        state.recipes.find((r) => r.id.toString() === id)
    );

    if (!recipe) return <p>Recipe not found</p>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>

            {/* Optional: Form and Delete button */}
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton id={recipe.id} />

            {/* Bonus: Back to Home link */}
            <div style={{ marginTop: '1rem' }}>
                <Link to="/">← Back to Recipe List</Link>
            </div>
        </div>
    );
};

export default RecipeDetails;