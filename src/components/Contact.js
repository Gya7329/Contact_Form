import React from "react";
import Css from "./form.css";
import { useState } from "react";

function Contact() {
  const [user, setstate] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  let name,value;
  const userSetData=(e)=>{
name=e.target.name;
value=e.target.value;
setstate({...user,[name]:value})

  }

const postData=async(e)=>{
	e.preventDefault();
	
	const{name,email,phone,address,message}=user;
	
	if(name && email && phone && address && message){

		const res=await fetch(
		
			'https://contact-form-b80ad-default-rtdb.firebaseio.com/formdata.json',{
				method: "POST",
				headers:{
				 "Content-Type":'application/json',
	
				},
	
				body:JSON.stringify({
					name,
					email,
					phone,
					address,
					message,
	
	
	
				})
			})
			if(res){
				setstate({
	
					name: "",
					email: "",
					phone: "",
					address: "",
					message: "",
	
	
				})
				alert("Thanks For filling Form ")
			
	
			}


	}else{
		alert("Please Fill All Fields")
	}
	


}



  return (
    <div className="container" >
      <div className="row">
		 <form  method='POST'/>
        <h1>contact us</h1>
      </div>
      <div className="row">
        <h4>We'd love to hear from you!</h4>
      </div>
      <div className="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input type="text" 
			required 
		    name='name'
			value={user.name} 
			onChange={userSetData}/>
            <label>Name</label>
		
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input type="text" required 
			name='email'
				value={user.email} 
				onChange={userSetData}/>
            <label>Email</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input" style={{ float: "right" }}>
            <input type="text" required 
			name='phone'
				value={user.phone} 
				onChange={userSetData}/>
            <label>Phone Number</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input type="text" required 
			name='address'
				value={user.address} 
				onChange={userSetData}/>
            <label>Address</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea required
			name='message'
				value={user.message} 
				onChange={userSetData}></textarea>
            <label>Message</label>
          </div>
        </div>

        <div className="col-xs-12">
          <button  className="btn-lrg submit-btn" onClick={postData}>
            Send Message
          </button>
        </div>
	
      </div>
    </div>
  );
}

export default Contact;
