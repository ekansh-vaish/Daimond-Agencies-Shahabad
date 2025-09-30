import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
function AddProduct() {
const [image, setImage] = useState(null);
let [newData,setNewData] =useState(
{
Productname: "",
description: "",
size: "",
price: ""    
}
);

function ChangeData(e) {
let name = e.target.name;
let value = e.target.value;
setNewData(prev => (
{
...prev,[name] : value    
}
))

}
async function ProductList(e) {
e.preventDefault();
const formData = new FormData();
formData.append("Productname",newData.Productname);
formData.append("description",newData.description);
formData.append("size",newData.size);
formData.append("price",newData.price);

formData.append('file',image);  

try {
const res = await axios.post("http://localhost:8080/product", formData,
{
headers:{
"Content-Type" : 'multipart/form-data'
}  
}

);
console.log(res.data);

setNewData({
Productname: "",
description: "",
size: "",
price: ""
});

} catch (err) {
console.error(err);
} 
}
return (
<div>
<Form onSubmit={ProductList}   className="p-2" style={{ maxWidth: "400px", margin: "auto" }}>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>Productname :</Form.Label>
<Form.Control type="text" placeholder="enter product name" name='Productname' value={newData.Productname} onChange={ChangeData} required/>
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
<Form.Label>Description :</Form.Label>
<Form.Control type="text" placeholder="Enter text here .."  name='description' value={newData.description} onChange={ChangeData} required/>
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
<Form.Label>Size :</Form.Label>
<Form.Control type="text" placeholder="size.." name='size' value={newData.size} onChange={ChangeData} required/>
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
<Form.Label>Price :</Form.Label>
<Form.Control type="number" placeholder="price.." name='price' value={newData.price} onChange={ChangeData} required/>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Product Image :</Form.Label>
<Form.Control type="file" onChange={(e) => setImage(e.target.files[0])}/>       
</Form.Group>
<Button variant="success" type='submit'>Add</Button>
</Form>
</div>
)
}

export default AddProduct
