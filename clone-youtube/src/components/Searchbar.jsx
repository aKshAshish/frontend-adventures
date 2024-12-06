import React from 'react'

const Searchbar = () => {
  return (
    <div className="search-bar">
        <div>
          <input id="search-input" type="text" placeholder="Search..." />
          <button id="search-btn" >
              <span id="search-icon" className="material-icons" onSubmit={() => {}}>search</span>
          </button>
        </div>
    </div>
  )
}

export default Searchbar;