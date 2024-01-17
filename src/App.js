import {useState} from 'react'
import './App.css';
import Body from './body/Body';
import Header from './header/Header';
import Count from './body/Count';
import Problem from './body/Problem';
import ToggleVisibility from './body/ToggleVisibility';
import CharacterCounter from './body/CharacterCounter';
function App() {
  const [darkMode,setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // クラス名を生成
  const style = darkMode ? 'dark-mode' : 'light-mode';

  return (
    <>
    <Header
    darkMode={darkMode}
      setDarkMode={setDarkMode}/>
    <CharacterCounter />
    <Problem/>
    <Count />
    <ToggleVisibility />

    <Body
    darkMode={darkMode}/>
    </>
  );
}

export default App;
