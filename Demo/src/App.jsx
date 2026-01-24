
import './App.css'
import Map from './map'
function App() {


  return (
    <>
     {/* <div id="navbar" >
      <p id="logo">Webfolio X</p>
      <ul id='components'>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Pages</li>
      </ul>
     </div>
     <div id='middle'>
      <h1>Webfolio X Webflow Template and UI Kit</h1>
      <h6>Presenting Webfolio X, our ultimate multi purpose portfolio Webflow Template & UI Kit.</h6>
      <div id='btns'>
        <p>Get template</p>
        <p>Browse pages</p>
      </div> */}
     {/* </div> */}
{/* 
      <Map/>


      <Map/> */}
      <BrowserRouter>
      <nav>
        <Link to= "/">Home Page</Link>
        <Link to= "/counter">Counter</Link>
        <Link to= "/map">Map</Link>
        <Link to= "/studmanager">Student Manager</Link>
        <Link to= "/toggle">Toggle</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/map" element={<Map />} />
        <Route path="/studmanager" element={<StudentManager />} />
        <Route path="/toggle" element={<Toggle />} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
