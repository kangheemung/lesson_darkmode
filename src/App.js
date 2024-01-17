import {useState} from 'react'
import './App.css';
import Body from './body/Body';
import Header from './header/Header';

function App() {
  const [darkMode,setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // クラス名を生成
  const style = darkMode ? 'dark-mode' : 'light-mode';

  return (
    < style = {themeStyle} >
    <Header
    darkMode={darkMode}
      setDarkMode={setDarkMode}/>
    <Body
    darkMode={darkMode}/>
    </>
  );
}

export default App;
