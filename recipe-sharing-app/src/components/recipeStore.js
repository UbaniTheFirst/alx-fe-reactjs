import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
    recipes: [
        {
            id: '1',
            title: 'Jollof Rice',
            description: 'A West African spicy rice dish.'
        },
        {
            id: '2',
            title: 'Egusi Soup',
            description: 'A Nigerian melon seed soup.'
        },
        {
            id: '3',
            title: 'Suya',
            description: 'Spicy meat skewer popular in Nigeria.'
        }
    ],
    searchTerm: '',

    setSearchTerm: (term) => set({ searchTerm: term }),

    filteredRecipes: () => {
        const term = get().searchTerm.toLowerCase();
        return get().recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(term)
        );
    }
}));