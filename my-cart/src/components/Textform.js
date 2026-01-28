import React, {useState} from 'react'



export default function Textform(props) {
   const handleUpClick = ()=>{
    //console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
   }

   const handleOnChange = (event)=>{
    
    setText(event.target.value);
   }





    const[text,setText] = useState('enter text here');
    // text = "new text";  = wrong way to change state
    //setText("new text"); // correct way to change state
  return (
    <div>
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
    <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>

    <div className='mb-3'>
        <textarea className='form-control' value={text}  onChange ={handleOnChange} id='myBox' rows= "8"></textarea>
    </div>
  </div>
</form>
  </div>
  )
}
