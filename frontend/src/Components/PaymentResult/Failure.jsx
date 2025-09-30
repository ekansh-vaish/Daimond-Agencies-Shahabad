import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Failure() {
const navigate = useNavigate();

return (
<div className="text-center mt-5">
<h2>❌ Payment Failed or Cancelled</h2>
<p>Something went wrong or you cancelled the payment.</p>
<Button variant="danger" onClick={() => navigate("/cart")}>
Try Again
</Button>
</div>
);
}

export default Failure;
