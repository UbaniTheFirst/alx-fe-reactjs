import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleSearch}
        />
    );
};

export default SearchBar;