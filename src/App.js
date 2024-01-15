import {useState} from 'react'
import './App.css';
import Body from './body/Body';
import Header from './header/Header';

function App() {
  const [darkMode,setDarkMode]=useState(false);
  return (
    <>
    <Header darkMode={darkMode}
      setDarkMode={setDarkMode}/>
    <Body
    darkMode={darkMode}/>
    </>
  );
}

export default App;
