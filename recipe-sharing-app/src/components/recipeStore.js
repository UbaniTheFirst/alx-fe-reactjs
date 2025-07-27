import { create } from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [],
    filteredRecipes: [],
    favorites: [],
    recommendations: [],
    searchTerm: '',

    setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
    setSearchTerm: (term) => set(state => {
        const filtered = state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(term.toLowerCase())
        );
        return { searchTerm: term, filteredRecipes: filtered };
    }),

    // Favorites
    addFavorite: (recipeId) => set(state => {
        if (!state.favorites.includes(recipeId)) {
            return { favorites: [...state.favorites, recipeId] };
        }
        return {};
    }),
    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
    })),

    // Recommendations
    generateRecommendations: () => set(state => {
        const recommended = state.recipes.filter(recipe =>
            state.favorites.includes(recipe.id) && Math.random() > 0.3
        );
        return { recommendations: recommended };
    })
}));

export default useRecipeStore;