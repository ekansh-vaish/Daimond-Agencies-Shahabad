import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Success() {
const navigate = useNavigate();

return (
<div className="text-center mt-5">
<h2>✅ Payment Successful!</h2>
<p>Thank you for your purchase. Your order has been confirmed.</p>
<Button variant="primary" onClick={() => navigate("/product")}>
Continue Shopping
</Button>
</div>
);
}

export default Success;
