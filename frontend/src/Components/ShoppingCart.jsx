import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Form, Row, Col, Modal } from 'react-bootstrap';

function ShoppingCart() {
const { id } = useParams();
const navigate = useNavigate();
const [cartItem, setCartItem] = useState({});
const [quantity, setQuantity] = useState(1);
const [isLoading, setIsLoading] = useState(true);
const [showModal, setShowModal] = useState(false);

const [address, setAddress] = useState({
name: '',
phone: '',
pincode: '',
city: '',
state: '',
fullAddress: ''
});

useEffect(() => {
async function fetchItem() {
try {
const res = await axios.post(`http://localhost:8080/cart/${id}`);
setCartItem(res.data);
setIsLoading(false);
} catch (err) {
console.log("Error fetching item:", err);
}
}
fetchItem();
}, [id]);

const handleRemove = async () => {
try {
await axios.delete(`http://localhost:8080/itemdelete/${id}`);
localStorage.removeItem("Cart");
alert("Item removed from cart");
navigate("/product");
} catch (err) {
console.log("Remove error:", err);
}
};

const handlePayment = async () => {
for (let key in address) {
if (!address[key]) {
alert("Please fill all address fields");
return;
}
}

try {
const res = await axios.post("http://localhost:8080/payment");
const approvalUrl = res.data.links[1].href;
window.location.href = approvalUrl;
} catch (err) {
console.log("Payment error:", err);
alert("Payment initiation failed");
}
};

const totalPrice = (cartItem.price || 0) * quantity;

return (
<div className="container mt-4">
<h4 className="text-center mb-3">🛒 Your Cart</h4>
{isLoading ? (
<p className="text-center">Loading item...</p>
) : (
<Card className="p-3 mx-auto" style={{ maxWidth: '500px', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
<Row>
<Col xs={4}>
<Card.Img
src={cartItem.image}
alt={cartItem.Productname}
style={{ height: "100px", width: "100px", objectFit: "cover", borderRadius: "8px" }}
/>
</Col>
<Col xs={8}>
<Card.Body className="p-2">
<Card.Title style={{ fontSize: "1rem" }}>{cartItem.Productname}</Card.Title>
<Card.Text>₹{cartItem.price}</Card.Text>
<Form.Control
type="number"
min="1"
value={quantity}
onChange={(e) => setQuantity(parseInt(e.target.value))}
style={{ width: "60px", fontSize: "0.8rem" }}
/>
<Card.Text className="mt-2">Total: ₹{totalPrice}</Card.Text>
<div className="d-flex justify-content-between mt-2">
<Button variant="outline-danger" size="sm" onClick={handleRemove}>Remove</Button>
<Button variant="primary" size="sm" onClick={() => setShowModal(true)}>Enter Address</Button>
</div>
</Card.Body>
</Col>
</Row>
</Card>
)}

{/* Address Modal */}
<Modal show={showModal} onHide={() => setShowModal(false)} centered>
<Modal.Header closeButton>
<Modal.Title>📍 Delivery Address</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form>
{["name", "phone", "pincode", "city", "state", "fullAddress"].map((field, idx) => (
<Form.Group key={idx} className="mb-2">
<Form.Control
type={field === "fullAddress" ? "textarea" : "text"}
placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
value={address[field]}
onChange={(e) => setAddress({ ...address, [field]: e.target.value })}
as={field === "fullAddress" ? "textarea" : "input"}
rows={field === "fullAddress" ? 2 : undefined}
/>
</Form.Group>
))}
</Form>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
<Button variant="success" onClick={handlePayment}><i className="fab fa-paypal">Pay with PayPal</i></Button>
</Modal.Footer>
</Modal>
</div>
);
}

export default ShoppingCart;
