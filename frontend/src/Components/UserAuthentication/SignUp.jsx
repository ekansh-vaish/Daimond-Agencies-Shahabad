import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
function SignUp() {
let navigate = useNavigate()
let[register,setRegister] = useState(
{
username : "",
email : "",
password : ""
}
);

const [error, setError] = useState("");

function handleChange(e)
{
let name = e.target.name;
let value = e.target.value;
setRegister((prev => ({...prev,[name] : value})))
}

async function RegisterForm (e) {
e.preventDefault();
try{
let result = await axios.post("http://localhost:8080/signup",register)
console.log(result);
navigate("/login")
}

catch (err) {
  console.log(err);
alert("Something went Wrong")
}
setRegister(
{
username : "",
email : "",
password : "" 
}
)

}

return (
<div>
  <h3 style={{ textAlign: "center" }}>Create Your Account</h3>
<Form onSubmit={RegisterForm} className='d-flex flex-column justify-content-xl-around' style={{maxWidth:"700px", height:"auto",marginLeft:'400px', marginTop:"30px", justifyContent:"center", marginBottom:"20px"}}>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>UserName :</Form.Label>
<Form.Control type="text" placeholder="username >>" value={register.username} onChange={handleChange} name='username'/>
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
<Form.Label>Email address :</Form.Label>
<Form.Control type="email" placeholder="name@example.com" value={register.email} onChange={handleChange} name='email' />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
<Form.Label>Password :</Form.Label>
<Form.Control type="password" placeholder="password ..." value={register.password} onChange={handleChange} name='password'/>
</Form.Group>
<Button variant="primary" type='submit'>SignUp</Button>
</Form>
</div>
)
}

export default SignUp
