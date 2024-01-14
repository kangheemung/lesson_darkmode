import React,{useState} from 'react'
import './App.css';
import Body from './body/Body';
import Header from './header/Header';

function App() {
  const [darkMode,setDarkMode]=useState(false);
  //darkモード
//handler darkモード
const toggleDarkMode=()=>setDarkMode(!darkMode);
//スタイルを定義する
const Styles={
  backgroundColor: darkMode? '#333':'#FFF',
  color: darkMode? '#FFF':'#333'
}
  return (
    <div style={Styles}>
    <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    <Body/>
    </div>
  );
}

export default App;
