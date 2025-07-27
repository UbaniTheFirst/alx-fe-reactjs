import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const { filteredRecipes, favorites, addFavorite, removeFavorite } = useRecipeStore();

    const toggleFavorite = (id) => {
        favorites.includes(id) ? removeFavorite(id) : addFavorite(id);
    };

    return (
        <div>
            <h2>All Recipes</h2>
            {filteredRecipes.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <button onClick={() => toggleFavorite(recipe.id)}>
                        {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
                    </button>
                    <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;