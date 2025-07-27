import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
    setSearchTerm: (term) => {
        set({ searchTerm: term });
        set((state) => ({
            filteredRecipes: state.recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(term.toLowerCase())
            ),
        }));
    },
    setRecipes: (recipes) => {
        set({ recipes });
        set((state) => ({
            filteredRecipes: recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
        }));
    },
}));