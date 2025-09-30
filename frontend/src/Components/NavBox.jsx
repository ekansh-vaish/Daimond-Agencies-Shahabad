import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { IoCartOutline } from "react-icons/io5";
import { useNavigate, Link } from 'react-router-dom';

function NavBox({ setSearchResult }) {
let cart = JSON.parse(localStorage.getItem("Cart"));
const storedUser = JSON.parse(localStorage.getItem("UserDetails"));

const navigate = useNavigate();
const [search, setSearch] = useState("");

useEffect(() => {
if (!storedUser) {
navigate('/login');
}
}, []);

async function SearchProduct(e) {
e.preventDefault();
try {
const res = await axios.get(`http://localhost:8080/search/${search}`);
setSearchResult(res.data);
} catch (error) {
console.log(error);
}
}

function Logout() {
localStorage.removeItem("UserDetails");
localStorage.removeItem("Cart");
navigate('/product');

}

return (

<Navbar expand="lg" style={{ backgroundColor: "white"} }>
<Container fluid>
<img
src="https://tse2.mm.bing.net/th/id/OIP.HzC2Y8zcdAEkqeCWPd2FFQHaHa"
alt="logo"
width="50px"
height="50px"
/>
<Navbar.Brand as={Link} to="/product" className='m-2'><b>Diamond Agency</b><br />
<p className="text-muted"  style={{textDecoration:"underline purple"}}>Har Budget Ka Hero, Har Brand Ka Star</p>
</Navbar.Brand>

<Nav.Link style={{margin:"20px", textDecoration:"underline orange"}} as={Link} to="/product">Explore</Nav.Link>

<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Nav className="me-auto my-2 my-lg-0" navbarScroll>
{storedUser?.role === "admin"  ?  (
<>
<Nav.Link as={Link} to="/addproduct">AddProduct</Nav.Link>
<Nav.Link as={Link} to="/userproduct">UserProduct</Nav.Link>

</>
) : (
 !storedUser && (   
<Nav.Link as={Link} to="/login"><b>Login</b></Nav.Link>
 )
)}
</Nav>

<Form className="d-flex me-3" role="search" onSubmit={SearchProduct}>
<FormControl
type="search"
placeholder="Search"
className="me-2"
value={search}
onChange={(e) => setSearch(e.target.value)}
aria-label="Search"
/>
<Button variant="outline-success" type="submit">Search</Button>
</Form>
<Nav>

{cart ? (
<Nav.Link as={Link} to={`/cart/${cart._id}`}>
<IoCartOutline size={24} />
</Nav.Link>

) : (
<p className="text-muted mt-2">Cart is empty</p>
)}

<Nav.Link onClick={() => { Logout(); navigate("/register"); }}>
<b>Logout</b>
</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
);
}

export default NavBox;
