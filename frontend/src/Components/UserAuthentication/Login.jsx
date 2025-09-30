import React, { use, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Login() {

const navigate = useNavigate();
let[login,setLogin] = useState(
{
email : "",
password : ""
}
);


function handleChange(e)
{
let name = e.target.name;
let value = e.target.value;
setLogin((prev => ({...prev,[name] : value})))
}

async function LoginForm (e) {
e.preventDefault();
try {
const result = await axios.post("http://localhost:8080/login", login);


// Backend se JWT token aur role milega
const user = {
email: result.data.email,
username: result.data.username,
token: result.data.Jwttoken,
role: result.data.role || "user"  // backend me role bhi bhej rahe ho
};

// LocalStorage me save karo
localStorage.setItem("UserDetails", JSON.stringify(user));

alert("You are successfully logged in!");


if (user.role === "admin") {
navigate("/product");
} else {
navigate("/product");  
}
} catch (err) {
console.log(err);
alert("Incorrect Email or Password");
}

setLogin({
email: "",
password: ""
});
}

return (
<div>
<h3 style={{ textAlign: "center", marginTop:"20px"}}>Login to Your Account</h3>
<Form onSubmit={LoginForm} className='d-flex flex-column justify-content-xl-around' style={{maxWidth:"700px", height:"auto",marginLeft:'400px', marginTop:"40px", justifyContent:"center", marginBottom:"20px"}}>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
<Form.Label>Email address :</Form.Label>
<Form.Control type="email" placeholder="name@example.com" value={login.email} onChange={handleChange} name='email' />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
<Form.Label>Password :</Form.Label>
<Form.Control type="password" placeholder="password ..." value={login.password} onChange={handleChange} name='password'/>
</Form.Group>
<p className='m-2'>Is not Register?<Link to="/register">Register</Link></p>
<Button variant="primary" className='mt-2' type='submit'>Login</Button>

</Form>

</div>
)
}

export default Login
