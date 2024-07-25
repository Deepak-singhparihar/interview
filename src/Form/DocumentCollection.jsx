import React from 'react'
import Form from "react-bootstrap/Form";

const DocumentCollection = () => {
   
  return (
    <>
                <h2 className="mb-4 mt-4 para">In Document Collection section the following data should be collected.</h2>
                <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="w-50 text-start text-capitalize"><sup>10</sup> Marksheet<span>*</span></Form.Label>
                <Form.Control type="file" onChange={(e)=>this.upload(e)} name="img"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="w-50 text-start text-capitalize"><sup>12</sup> Marksheet<span>*</span></Form.Label>
                <Form.Control type="file onChange={(e)=>this.upload(e)}" name="img"/>
                </Form.Group>
                
                
                <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="w-50 text-start text-capitalize">Graduation Marksheet<span>*</span></Form.Label>
                <Form.Control type="file" onChange={(e)=>this.upload(e)} name="img"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="w-50 text-start text-capitalize">Post Graduation Marksheet<span>*</span></Form.Label>
                <Form.Control type="file" onChange={(e)=>this.upload(e)} name="img"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="w-50 text-start text-capitalize">Resume/CV<span>*</span></Form.Label>
                <Form.Control type="file" onChange={(e)=>this.upload(e)} name="img"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="w-50 text-start text-capitalize">Recommendation Letter</Form.Label>
                <Form.Control type="file" onChange={(e)=>this.upload(e)} name="img"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="w-50 text-start text-capitalize">Salary Slips</Form.Label>
                <Form.Control type="file" onChange={(e)=>this.upload(e)} name="img"/>
                </Form.Group>
                
                

               
    </>
  )
}

export default DocumentCollection