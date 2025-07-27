import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes());

    return (
        <div>
            {filteredRecipes.map((recipe, index) => (
                <div key={index}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;