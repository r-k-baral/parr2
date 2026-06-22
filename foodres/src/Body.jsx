import React from 'react'
import "./Body.css"
import ResCard from './Res-card'


const Body = () => {
  return (
    <div>
      <div className='par-search'>
        <input type="text" placeholder='Enter the name of dish' className='search-in' />
        <button type='submit' className='search-btn'>Search</button>
      </div>

        <div className='card-view'>
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
        </div>

    </div>
  )
}

export default Body
