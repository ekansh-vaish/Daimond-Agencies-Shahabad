
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBox from './Components/NavBox'
import { HiH1 } from 'react-icons/hi2'
import AddProduct from './Components/AdminPAnel/AddProduct';
import UserProduct from './Components/AdminPAnel/UserProduct'
import Footer from './Components/Footer'
import { useState } from 'react';
import Login from './Components/UserAuthentication/Login';
import SignUp from './Components/UserAuthentication/SignUp';
import ShoppingCart from './Components/ShoppingCart';
import NotFound from "./Components/NotFound";
import Main from './Components/Home/Main';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import Success from './Components/PaymentResult/Success';
import Failure from './Components/PaymentResult/Failure';
function App() {
const [searchResults, setSearchResult] = useState([]);
return (
<>
<BrowserRouter>
<NavBox   setSearchResult={setSearchResult}/>

<Routes>
 
<Route path="/product" element={<Main searchResults={searchResults}/>} />
<Route path="/addproduct" element={<AddProduct/>} />

<Route path="/userproduct" element={<UserProduct/>} />
<Route path="/cart/:id" element={<ShoppingCart/>} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<SignUp/>} />
<Route path="*" element={<NotFound/>} />
<Route path="/contactus" element={<ContactUs/>} />
<Route path="/aboutus" element={<AboutUs/>} />
<Route path="/success" element={<Success/>} />
<Route path="/cancel" element={<Failure/>} />
</Routes>
<Footer/>
</BrowserRouter>

</>
)
}

export default App
