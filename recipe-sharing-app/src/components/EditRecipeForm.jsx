import React, { useState } from "react";

const EditRecipeForm = ({ recipe, onUpdate }) => {
    const [title, setTitle] = useState(recipe.title);
    const [ingredients, setIngredients] = useState(recipe.ingredients);
    const [instructions, setInstructions] = useState(recipe.instructions);

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedRecipe = {
            ...recipe,
            title,
            ingredients,
            instructions,
        };

        onUpdate(updatedRecipe);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Recipe</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Ingredients"
            />
            <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Instructions"
            />
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditRecipeForm;