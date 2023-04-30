import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className='searchCont'>
      <input type='search' placeholder='Search Restaurant, Food, Cuisine or Dish' id='search'/>
      <button disabled><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}

export default Search
