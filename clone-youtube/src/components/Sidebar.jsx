import React from 'react'

import { categories } from '../utils/constants';

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <div id="sidebar">
      {
        categories.map((category) => {
          return (
            <button 
              className="category-btn"
              style={{
                background: category.name === selectedCategory && "#FC1503",
                color: "white",
              }}
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
                {category.icon}
              </span>
              <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                {category.name}
              </span>
            </button>
          )
        })
      }
    </div>
  )
}

export default Sidebar;