import React from 'react'
import Form from "react-bootstrap/Form";
const AvailabiltySection = () => {
  return (
    <>  
    <h2 className="mb-4 mt-4 para">In Interview Availability section the following data should be collected:</h2>
        <Form.Group className="mb-3" controlId="lastName">
        <Form.Label className="w-100 text-start text-capitalize">Email</Form.Label>
         <Form.Control type="email" name="email"/>
          </Form.Group>

        <Form.Group className="mb-3" controlId="emailAddress">
         <Form.Label className="w-100 text-start text-capitalize">Interview Dates</Form.Label>
          <Form.Control type="date" name="date"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="emailAddress">
         <Form.Label className="w-100 text-start text-capitalize">Interview Time</Form.Label>
          <Form.Control type="time" name="time"/>
        </Form.Group>
    </>
  )
}

export default AvailabiltySection