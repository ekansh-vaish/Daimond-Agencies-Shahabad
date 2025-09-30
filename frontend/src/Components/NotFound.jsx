import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
const navigate = useNavigate();

useEffect(() => {
setTimeout(() => {
navigate('/product');
}, 3000);
}, []);

return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
<h1>404 - Page Not Found</h1>
<p>Redirecting to home...</p>
<img src="https://static.vecteezy.com/system/resources/previews/008/568/884/non_2x/website-page-not-found-wrong-url-address-error-404-broken-robot-character-keeps-socket-off-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-online-bot-assistance-failure-eps-vector.jpg" alt="img" width={"500px"} height={"300px"} />
</div>
);
}

export default NotFound;