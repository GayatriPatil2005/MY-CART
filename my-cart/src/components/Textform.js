import React, {useState} from 'react'



export default function Textform(props) {


   const[text,setText] = useState('');


   const handleUpClick = ()=>{
    //console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
   }

    const handleLoClick = ()=>{
    //console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
   }

   const handleClearClick = ()=>{
    //console.log("Uppercase was clicked " + text);
    let newText = " ";
    setText(newText);
   }

   const handleOnChange = (event)=>{
    
    setText(event.target.value);
   }

   const handleCopy = () =>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
   }

   const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
   }

   
    // text = "new text";  = wrong way to change state
    //setText("new text"); // correct way to change state
  return (
    <div className='container'>
    <h1>{props.heading} - {text}</h1>
   <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">
      Email
    </label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">
      Password
    </label>
    <input type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">
      Address
    </label>
    <input
      type="text"
      className="form-control"
      id="inputAddress"
      placeholder="1234 Main St"
    />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">
      Address 2
    </label>
    <input
      type="text"
      className="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor"
    />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">
      City
    </label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">
      State
    </label>
    <select id="inputState" className="form-select">
      <option value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">
      Zip
    </label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">
      Sign in
    </button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra spaces</button>
    
    <div className='mb-3'>
        <textarea className='form-control' value={text}  onChange ={handleOnChange} id='myBox' rows= "8"></textarea>
    </div>
  </div>
  <div className='container my-3'>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} word and {text.length}characters</p>
    <p>{0.008* text.split(" ").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
</form>

  </div>
  )
}
