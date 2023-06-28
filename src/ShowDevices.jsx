import React from "react";
import "./App.css";

function ShowDevices(props){
    const handleButtonClick =(page) =>{
        props.onButtonClick(page);
    }

    return (
        <>
        <h1 id="show_devices_heading">Show Devices</h1>
        <p id="para_show_devices">Note: Please enter the email ID which is used for Sign Up</p>
        <div id="show_devices_container">
            <input type="email" id="show_devices_email" placeholder = "Enter your email.." autoComplete="off" />
            <br />
            <button id="show_devices_page_btn">Search</button>
            <button id="show_devices_back_options_btn" onClick={()=>{handleButtonClick('options')}}>Back</button>
        </div>
        </>
    )
}

export default ShowDevices;