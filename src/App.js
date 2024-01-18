import {useState,createContext} from 'react'
import './App.css';
import Body from './body/Body';
import Header from './header/Header';
import Count from './body/Count';
import Problem from './body/Problem';
import ToggleVisibility from './body/ToggleVisibility';
import CharacterCounter from './body/CharacterCounter';
export const ThemeContext = createContext(null);
function App() {
  const [darkMode,setDarkMode] = useState("light");

  const toggleTheme = () => {
    setDarkMode((curr)=>(curr === "light" ? "dark" : "light"));
  };

  return (
    <>
    <ThemeContext.Provider value={{darkMode,setDarkMode }}>
    <div className={`App ${darkMode === 'dark' ? 'dark-mode' : ''}`} id={darkMode}>
    <Header
      darkMode={darkMode}
      setDarkMode={setDarkMode}/>
    <CharacterCounter />
    <Problem/>
    <Count />
    <ToggleVisibility />
    <Body
    darkMode={darkMode}setDarkMode={setDarkMode}/>
    </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
