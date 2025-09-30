import React from 'react'
import Home from './Home'
import Content from './Content'
function Main({ searchResults }) {
  return (
    <div>
     <Content/>
      <Home searchResults={searchResults} />
    </div>
  )
}

export default Main
