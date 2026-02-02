
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import About from './components/About';
import  { useState } from 'react';
function App() {
   const [mode, setMode] = useState('light');  //whether dark mode is enabled or not


   const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
   };
  return (
  <>
      <Navbar mode={mode} toggleMode={toggleMode} />
    <div className='container'>
     <Textform heading= "enter the text to analyze" mode={mode}/>
    </div>
   
   

   
  </>
    
  );
}
export default App;
