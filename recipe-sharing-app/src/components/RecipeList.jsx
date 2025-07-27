import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const recipes = useRecipeStore(state => state.recipes);

    return (
        <div>
            {filteredRecipes.map((recipe, index) => {
                // Find the index of the recipe in the original array
                const recipeIndex = recipes.findIndex(r => r.title === recipe.title);

                return (
                    <div key={index}>
                        <Link to={`/recipe/${recipeIndex}`}>
                            <h3>{recipe.title}</h3>
                        </Link>
                        <p>{recipe.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default RecipeList;