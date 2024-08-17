import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className="searchForm" onSubmit={(e) =>e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input 
        id='search'
        type="text"
        role='searchbox'
        placeholder='Search task'
        value={search} // Ensure this is a string
        onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem