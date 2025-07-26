import useRecipeStore from './store/recipeStore';

function RecipeList() {
    const recipes = useRecipeStore((state) => state.recipes);

    return (
        <ul style={{ marginTop: '20px' }}>
            {recipes.map((recipe, index) => (
                <li key={index} style={{ padding: '4px 0' }}>{recipe.title}</li>
            ))}
        </ul>
    );
}

export default RecipeList;