import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);

    return (
        <ul>
            {recipes.map((recipe) => (
                <li key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default RecipeList;