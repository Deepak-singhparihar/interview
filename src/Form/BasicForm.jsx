import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DocumentCollection from './DocumentCollection';
import PurposeSection from './PurposeSection';
import AvailabiltySection from './AvailabiltySection';



const BasicForm = () => {
    const data={name:"", email:"", phone:"", date:""};
    const [inputData, setInputData]= useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
            console.log("registered")
    },[flag])
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.phone || !inputData.date){
            alert("All fields are Mandatory")
        }
        else{
            setFlag(true)
        }
    }

  return (
    <>
        <div className='form'>
        <Container>
            <pre>{(flag)?<h2 className='ui-define'>hello {inputData.name}, you've Registered Successfully</h2>:""}</pre>
        
        <Form className="bg-light text-dark p-5 border shadow" onSubmit={handleSubmit}>
        <h2 className="mb-2 para">In Basic Details section the following data should be collected.</h2>
                <div className="row">
                <Form.Group className="mb-3" controlId="firstName">
                <Form.Label className="w-100 text-start text-capitalize">Name<span>*</span></Form.Label>
                <Form.Control type="text" name="name" value={inputData.name} onChange={handleData} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                <Form.Label className="w-100 text-start text-capitalize">Email<span>*</span></Form.Label>
                <Form.Control type="email" name="email" value={inputData.email} onChange={handleData}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="emailAddress">
                <Form.Label className="w-100 text-start text-capitalize">Mobile Number</Form.Label>
                <Form.Control type="text" name="phone" value={inputData.phone} onChange={handleData}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="emailAddress">
                <Form.Label className="w-100 text-start text-capitalize">Date of Birth</Form.Label>
                <Form.Control type="date" name="date" value={inputData.date} onChange={handleData}/>
                </Form.Group>
                <DocumentCollection />
               <PurposeSection />
               <AvailabiltySection />
              
                <Button variant="primary" type="submit">Submit</Button>
                </div>
                
            </Form>
        </Container>
           
       
        </div>
        
      
    </>
    
  )
}

export default BasicForm