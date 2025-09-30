import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function Home({ searchResults }) {
const [product, setProduct] = useState([]);
const [showModal, setShowModal] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
const navigate = useNavigate();


async function Productget() {
try {
const res = await axios.get("http://localhost:8080/getproducts");
setProduct(res.data);
} catch (err) {
console.log("Fetch error:", err);
}
}

useEffect(() => {
Productget();
}, []);


const handleView = (item) => {
setSelectedProduct(item);
setShowModal(true);
};

const displayData = searchResults?.length > 0 ? searchResults : product;
const handleAddToCart = (item) => {
let existingCart = JSON.parse(localStorage.getItem("Cart")) || [];
existingCart.push(item);
localStorage.setItem("Cart", JSON.stringify(existingCart));
navigate(`/cart/${item._id}`);
};

return (
<div style={{ height: "auto", marginTop: "30px" }}>
<div className='d-flex flex-wrap justify-content-center'>
{displayData?.length > 0 ? Array.isArray(displayData) && (
displayData.map((item) => (
<Card className='m-3' style={{ width: '25rem', borderRadius:"20px"}} key={item._id}>
{item.image && ( <Card.Img variant="top" src={item.image} alt={item.Productname} style={{ height: "300px", width: "300px", marginLeft: "40px", marginTop: "10px" }} /> )}
<Card.Body>
<Card.Title>{item.Productname}</Card.Title>
<Card.Text>
<strong>Size:</strong> {item.size} <br />
<strong>Price:</strong> ₹{item.price}
</Card.Text>
<Button variant="primary" className='mt-2' onClick={() => handleAddToCart(item)}>
AddCart
</Button>
<Button variant="info" className='mt-2 ms-2' onClick={() => handleView(item)}>
View
</Button>
</Card.Body>
</Card>
))
) : (
<div className="text-center mt-5">
<h3>No Result Found</h3>
</div>
)}
</div>

{/* View-Only Modal */}
{selectedProduct && (
<Modal show={showModal} onHide={() => setShowModal(false)}>
<Modal.Header closeButton>
<Modal.Title>Product Details</Modal.Title>
</Modal.Header>
<Modal.Body>
{selectedProduct.image && (
<img
src={selectedProduct.image}
alt={selectedProduct.Productname}
style={{ width: "300px", height: "300px", marginBottom: "15px",marginLeft:"80px", }}
/>
)}
<h5>{selectedProduct.Productname}</h5>
<p><strong>Description:</strong> {selectedProduct.description}</p>
<p><strong>Size:</strong> {selectedProduct.size}</p>
<p><strong>Price:</strong> ₹{selectedProduct.price}</p>
</Modal.Body>
<Modal.Footer>

</Modal.Footer>
</Modal>
)}
</div>
);
}

export default Home;
