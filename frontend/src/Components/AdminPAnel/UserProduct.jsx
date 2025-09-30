import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UserProduct() {
const [product, setProduct] = useState([]);
const [showModal, setShowModal] = useState(false);
const [selectedId, setSelectedId] = useState(null);
const [updatedData, setUpdatedData] = useState({
Productname: '',
description: '',
price: '',
size: ''
});

// Fetch products
async function Productget() {
try {
const res = await axios.get('http://localhost:8080/getproducts');
setProduct(res.data);
} catch (err) {
console.error('Error fetching products:', err);
}
}

// Delete product
async function DeleteListing(id) {
try {
await axios.delete(`http://localhost:8080/removeproduct/${id}`);
toast.success("Product deleted successfully!");
Productget();
} catch (error) {
console.error('Error deleting product:', error);
}
}

// Open modal and prefill data
function openModal(item) {
setSelectedId(item._id);
setUpdatedData({
Productname: item.Productname,
description: item.description,
price: item.price,
size: item.size
});
setShowModal(true);
}

// Update product
async function handleUpdate(e) {
e.preventDefault();
try {
await axios.put(`http://localhost:8080/update/${selectedId}`, updatedData);
toast.success("Product updated successfully!");
Productget();
setShowModal(false);
} catch (err) {
console.error('Error updating product:', err);
}
}

useEffect(() => {
Productget();
}, []);

return (
<div style={{height:"auto"}}>
<div className='d-flex flex-wrap justify-content-center'>
{product.length > 0 ? Array.isArray(product) && product.map((item) => (
<Card className='m-3' style={{ width: '25rem', border: '2px solid red' }} key={item._id}>
{item.image && (
<Card.Img
variant="top"
src={item.image}
alt={item.Productname}
style={{ height: "300px", width:"300px", marginLeft:"40px", marginTop:"10px" }}
/>
)}
<Card.Body>
<Card.Title>{item.Productname}</Card.Title>
<Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
<Card.Text>
<strong>Size:</strong> {item.size} <br />
<strong>Price:</strong> ₹{item.price}
</Card.Text>
<Button variant="danger" onClick={() => DeleteListing(item._id)}>Delete</Button>{' '}
<Button variant="primary" onClick={() => openModal(item)}>Update</Button>
</Card.Body>
</Card>
)) : <h1>No Result Found</h1>}

{/* Modal */}
<Modal show={showModal} onHide={() => setShowModal(false)}>
<Form onSubmit={handleUpdate}>
<Modal.Header closeButton>
<Modal.Title>Update Product</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form.Group className="mb-2">
<Form.Label>Productname</Form.Label>
<Form.Control
type="text"
value={updatedData.Productname}
onChange={(e) => setUpdatedData(prev => ({ ...prev, Productname: e.target.value }))}
/>
</Form.Group>
<Form.Group className="mb-2">
<Form.Label>Description</Form.Label>
<Form.Control
type="text"
value={updatedData.description}
onChange={(e) => setUpdatedData(prev => ({ ...prev, description: e.target.value }))}
/>
</Form.Group>
<Form.Group className="mb-2">
<Form.Label>Price</Form.Label>
<Form.Control
type="number"
value={updatedData.price}
onChange={(e) => setUpdatedData(prev => ({ ...prev, price: e.target.value }))}
/>
</Form.Group>
<Form.Group className="mb-2">
<Form.Label>Size</Form.Label>
<Form.Control
type="text"
value={updatedData.size}
onChange={(e) => setUpdatedData(prev => ({ ...prev, size: e.target.value }))}
/>
</Form.Group>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
<Button variant="success" type="submit">Save</Button>
</Modal.Footer>
</Form>
</Modal>
</div>
</div>
);
}

export default UserProduct;
