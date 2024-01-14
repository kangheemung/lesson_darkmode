import React from 'react'

function Header({darkMode,toggleDarkMode}) {
  return (
    <header style={{display:"flex",justifyContent : "space-between"}}>
      <h1>Header</h1>
      <button onClick={toggleDarkMode}>{darkMode ? 'white' : 'dark mode'}</button>
    </header>
  )
}

export default Header
