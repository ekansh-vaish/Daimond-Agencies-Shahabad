import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutUs() {
return (
<Container className="mt-5 mb-5">
<Row className="text-center mb-4">
<Col>
<h2>About Daimond Agency</h2>
<p className="text-muted">Luxury meets performance. We redefine tech shopping.</p>
</Col>
</Row>

<Row className="align-items-center mb-5">
<Col md={6}>
<Image
src="https://www.buid.ac.ae/wp-content/uploads/2021/01/who-we-are.png"
alt="Brand"
fluid
rounded
/>
</Col>
<Col md={6}>
<h4>Who We Are</h4>
<p>
Daimond Agency is a premium tech destination where innovation meets elegance.
We’re not just sellers—we’re curators of cutting-edge experiences. From flagship smartphones
to futuristic wearables, we bring the best of global tech to your doorstep.
</p>
</Col>
</Row>

<Row className="align-items-center mb-5">

<Col md={6}>
<h4>What We Do</h4>
<p>
We specialize in sourcing, showcasing, and delivering high-end gadgets with unmatched service.
Our platform offers seamless browsing, EMI options, and personalized recommendations.
Whether you're upgrading your phone or building your dream setup—we make it effortless.
</p>

</Col>
<Col md={6}>
<Image
src="https://cdn.prod.website-files.com/5f1840665928895a221fb731/652ed7c952b46666bfa996d6_zutZmVT1Zz6His6eLaJkp3Es14LcHmB3Mqb6N7QyvU3OkPS8vSGwFgYWbxb2lkR-a64xRjdw20UN0kGNB-DFdyXtLMkJ-0zQ_yKS5DhnEOtpe9lQxb0IvBeLgleFV1tov8Dv5J1NWw6C-Mmvyz86wEA.png"
alt="Brand"
fluid
rounded
/>
</Col>
</Row>

<Row className="mb-5">
<Col>
<h4>Our Mission</h4>
<p>
To make premium technology accessible, exciting, and empowering. We believe tech should
elevate your lifestyle—not complicate it. That’s why we focus on simplicity, speed, and support.
</p>
</Col>

</Row>

<Row className="mb-5">
<Col>
<h4>Our Goals</h4>
<ul>
<li>Deliver top-tier products with verified quality</li>
<li>Offer flexible payment and EMI solutions</li>
<li>Build trust through transparent service</li>
<li>Expand into smart home and wearable tech</li>
<li>Launch exclusive deals and loyalty rewards</li>
</ul>
</Col>
<Col md={6}>
<Image
src="https://www.shutterstock.com/image-vector/business-mission-vision-flat-icon-260nw-1690338043.jpg"
alt="Brand"
fluid
rounded
/>
</Col>
</Row>

<Row className="mb-5">
<Col>
<h4>How We Do It</h4>
<p>
We partner directly with manufacturers and certified distributors. Our backend is powered by
scalable APIs and real-time inventory systems. Every product is handpicked, verified, and packed
with care. Our support team is trained to guide you from selection to setup.
</p>
</Col>
</Row>

<Row className="mb-5">
<Col>
<h4>Why Choose Us</h4>
<ul>
<li>Curated premium tech—no clutter, no compromise</li>
<li>Fast delivery and easy returns</li>
<li>Dedicated support via chat, call, and email</li>
<li>Secure payments and EMI flexibility</li>
<li>Real reviews, real people, real trust</li>
</ul>
</Col>
<Col md={6}>
<Image
src="https://british-academy.in/images/about/choose-us.png"
alt="Brand"
fluid
rounded
/>
</Col>
</Row>

<Row className="mb-5">
<Col>
<h4>Our Values</h4>
<p>
Integrity, innovation, and customer obsession. We don’t just sell products—we build relationships.
Every click, every cart, every call matters to us.
</p>
</Col>
</Row>

<Row>
<Col>
<h4>Contact Us</h4>
<p>Email: <a href="mailto:support@daimondagency.com">support@daimondagency.com</a></p>
<p>Phone: +91 9411996777</p>
</Col>
</Row>
</Container>
);
}

export default AboutUs;
