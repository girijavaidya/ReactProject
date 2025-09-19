
import './App.css';
import { useState } from 'react';
function App() {

   const [formData, setFormData] = useState ({
    name: "",
    email: "",
    message: ""
   });

  //  Error Message
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const [resultData, setResultData] = useState(
    {
      name: "",
    email: "",
    message: ""
    }
  )
  //  create a function of handleSubmit
  const handleSubmit = () =>
  {
    //  console.log(formData);
    // setSubmitted(true);
    if (formData.email && formData.message && formData.name)
    {
      setErrorMessage('');
      setResultData(formData);
      setFormData({
        name: "",
    email: "",
    message: ""
    })
    }else
    {
      setErrorMessage("All Fields are Required");
      setResultData({
         name: "",
    email: "",
    message: ""
      })
    }
  }

  return (
    <div className="App">
      <div class="card" style={{width: '20rem'}}>
  
  <div class="card-body">
    <h5 className="card-title">Contact Form</h5>
   <div class="mb-3">
    <label 
    htmlFor="name" 
    class="form-label">Name</label>
    <input 
    type="text" 
    className="form-control" 
    id="name" 
    placeholder='Enter the name' 
    //myvalue=statevalue
    value={formData.name}  
    //inputhandler
    onChange={(event) => setFormData({
      ...formData,
      name: event.target.value

    }) }  
    />
    </div>


     <div class="mb-3">
    <label 
    htmlFor="email" 
    class="form-label">Email </label>
    <input 
    type="email" 
    className="form-control" 
    id="email" 
    placeholder='Enter the Email' 
     //myvalue=statevalue
    value={formData.email}  
    //inputhandler
    onChange={(event) => setFormData({
      ...formData,
      email: event.target.value
    })}
    />
    </div>


     <div class="mb-3">
    <label 
    htmlFor="message" 
    class="form-label">Message</label>
    <textarea 
    className='form-control' 
    id='message' 
    rows="3"
    //myvalue=statevalue
    value={formData.message}  
    //inputhandler
    onChange={(event) => setFormData({
      ...formData,
      message: event.target.value
    })}  >
      </textarea>


    </div>
    <div className='d-flex justify-content-end'>
    <button 
    type="button" 
    className ="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
    {/* {
      isSubmitted &&
      <> */}
      {errorMessage && <div>
        <p className='text-danger'><strong>{errorMessage}</strong></p>
      </div>} 
       <div>
      <p>
        <strong>
          Name:
        </strong>{resultData.name}
      </p>
      <p>
        <strong>
          Email:
        </strong>{resultData.email}
      </p>
      <p>
        <strong>
          Message:
        </strong>{resultData.message}
      </p>
    </div>

    {/* </> */}
      
    

    
    
   
  </div>
</div>
  
    </div>
  );
}

export default App;
