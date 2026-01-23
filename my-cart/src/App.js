
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';

function App() {
  const product = [
    {
      price: 99999,
      name: "Iphone",
      quantity: 0,
    },
    {
      price: 19999,
      name: "Redmi",
      quantity: 0,
    }
  ]
  return (
  <>
    <Navbar/>
    <ProductList products={product}/>
   
  </>
    
  );
}
export default App;
