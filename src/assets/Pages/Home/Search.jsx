import React, { useState } from 'react';

const Search = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = () => {
        // Perform your search logic here
        // onSearch({ name, category });
    };

    return (
        <div className="flex w-full lg:w-10/12 ">
            <input
                type="text"
                id="name"
                value={name}
                placeholder='Search by name'
                onChange={(e) => setName(e.target.value)}
                className='w-2/3 p-1 border-2 border-blue-500 rounded-l-full sm:w-full sm:p-2 sm:pl-3 '
            />
            <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='hidden p-1 border-2 border-blue-500 rounded-l-none border-x sm:p-2 text-slate-500 sm:block'
            >
                <option value="">Category</option>
                <option value="category1">Service Provider</option>
                <option value="category2">Service Holder</option>
            </select>

            <button className='p-1 text-white bg-blue-500 rounded-r-full sm:p-2 sm:px-5' onClick={handleSearch}>
                Search
            </button>
        </div>


    );
};

export default Search;
