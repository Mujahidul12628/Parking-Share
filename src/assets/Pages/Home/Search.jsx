import React, { useState } from 'react';

const Search = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = () => {
        // Perform your search logic here
        // onSearch({ name, category });
    };

    return (
        <div className="flex">
            <input
                type="text"
                id="name"
                value={name}
                placeholder='Search by name'
                onChange={(e) => setName(e.target.value)}
                className='w-2/3 p-1 rounded-l-full sm:w-full sm:p-2 sm:pl-3 '
            />
            <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='hidden p-1 rounded-l-none sm:p-2 text-slate-500 sm:block'
            >
                <option value="">Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
            </select>

            <button className='p-1 rounded-r-full sm:p-2 sm:px-5 bg-cyan-500' onClick={handleSearch}>
                Search
            </button>
        </div>


    );
};

export default Search;
