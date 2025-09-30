import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactUs() {


let [ChangeUser,setChangeUser] =  useState(
{
Name: "",
Email: "",
Message: ""   
}
);

function ChangeInp(e)
{
let name = e.target.name;
console.log(name);
let value = e.target.value;
console.log(value);
setChangeUser((prev) => ({...prev,[name] :value}))
}

async function ContactAuth (e)

{
e.preventDefault();
try {
let response = await axios.post("http://localhost:8080/aboutus",ChangeUser)

if(response.data.message === "Complaint submitted successfully")
{
alert("Your Report is Successfully Registered")  
}
setChangeUser(
{
Name : "",
Email : "",
Message : ""   
}
)
} catch (error) {
console.log(error);

}
}


return (
<Container className="mt-5 mb-5">
<h2 className="text-center mb-4">Contact Us</h2>
<Row>

<Col md={6}>
<h4>Daimond Agency</h4>
<p><strong>Email:</strong> support@daimondagency.com</p>
<p><strong>Phone:</strong> +91 9411996777</p>
<p><strong>Address:</strong> Purani Bazaar, Shahabad, Rampur, Uttar Pradesh, India</p>
<p>We’re here to help! Reach out for product inquiries, support, or partnership opportunities.</p>
</Col>

{/* Contact Form */}
<Col md={6}>
<Form onSubmit={ContactAuth}>
<Form.Group className="mb-3" controlId="formName">
<Form.Label>Your Name</Form.Label>
<Form.Control type="text" name='Name' placeholder="Enter your name" value={ChangeInp.Name} onChange={ChangeInp}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" name='Email' placeholder="Enter your email" value={ChangeUser.Email} onChange={ChangeInp} />
</Form.Group>

<Form.Group className="mb-3" controlId="formMessage">
<Form.Label>Message</Form.Label>
<Form.Control as="textarea" name='Message' rows={4} placeholder="Type your message here..." value={ChangeUser.Message} onChange={ChangeInp}/>
</Form.Group>

<Button variant="primary" type="submit">
Send Message
</Button>
</Form>
</Col>
</Row>
</Container>
);
}

export default ContactUs;
