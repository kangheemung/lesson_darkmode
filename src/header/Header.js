

function Header({darkMode,setDarkMode}) {
  //handler darkモード
const toggleDarkMode=()=>setDarkMode(!darkMode);


  return (
    <header  className={darkMode ? 'dark-mode' : ''}>
      <h1>Header</h1>
      <button onClick={toggleDarkMode}>{darkMode ? 'white' : 'dark mode'}</button>
    </header>
  )
}

export default Header
