import React from 'react'

function Header({darkMode,setDarkMode}) {
  //handler darkモード
const toggleDarkMode=()=>setDarkMode(!darkMode);

  return (
    <header style={{display:"flex",justifyContent : "space-between"}}>
      <h1>Header</h1>
      <button onClick={toggleDarkMode}>{darkMode ? 'white' : 'dark mode'}</button>
    </header>
  )
}

export default Header
