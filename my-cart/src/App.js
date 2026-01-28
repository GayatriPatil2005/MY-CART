
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  return (
  <>
    <Navbar title="my-cart" linkText="About Link"/>
    
   
    <div className='container'>
     <Textform heading= "enter the text to analyze"/>
    </div>
  </>
    
  );
}
export default App;
