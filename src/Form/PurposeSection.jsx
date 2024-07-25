import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
const PurposeSection = () => {
   

      const maxLength = 300;
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>

        
<div>
<h2 className="mb-4 mt-4 para">In Statement of Purpose section the following data should be collected:</h2>
     <Form.Group className="mb-3" controlId="firstName">
      <Form.Label className="w-100 text-start text-capitalize">Tell me about a time you were asked to do something you had never done
       before. How did you react? What did you learn?</Form.Label>
       <Form.Control type="text" value={inputValue} onChange={handleInputChange} maxLength={maxLength} />
    </Form.Group>
      <p className='text-end'>{inputValue.length} / {maxLength}</p>

      <Form.Group className="mb-3" controlId="firstName">
      <Form.Label className="w-100 text-start text-capitalize">Tell me about the last time something significant didn’t go according to plan at
      work. What was your role? What was the outcome?</Form.Label>
       <Form.Control type="text" value={inputValue} onChange={handleInputChange} maxLength={maxLength} />
    </Form.Group>
      <p className='text-end'>{inputValue.length} / {maxLength}</p>


      <Form.Group className="mb-3" controlId="firstName">
      <Form.Label className="w-100 text-start text-capitalize">What are the three things that are most important to you in a job?</Form.Label>
       <Form.Control type="text" value={inputValue} onChange={handleInputChange} maxLength={maxLength} />
    </Form.Group>
      <p className='text-end'>{inputValue.length} / {maxLength}</p>
    </div>
    </>
  )
}

export default PurposeSection