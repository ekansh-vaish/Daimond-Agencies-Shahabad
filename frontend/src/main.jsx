import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
