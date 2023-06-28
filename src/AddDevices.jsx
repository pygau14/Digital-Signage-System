import React from "react";
import "./App.css";


function AddDevices(props){
    const handleButtonClick = (page) =>{
        props.onButtonClick(page);
    }

    return (
        <>
        <h1 id="add_devices_heading">Add Devices</h1>
        <p id="para_add_devices">Note : Please use the same Email used for Sign Up.</p>
        <div id="add_devices_container">
            <input type="text" id="deviceName" placeholder="Enter your device name.." autoComplete="off" />
            <br />
            <input type="email" id="deviceEmail" placeholder="Enter your email.." autoComplete="off" />
            <br />
            <input type="text" id="name_devicePage" placeholder="Enter your name.." autoComplete="off" />
            <br />
            <button id="add_device_btn">Add</button>
            <button id="add_device_back_options_btn" onClick={()=> {handleButtonClick('options')}}>Back</button>
         </div>
        </>
    )
}

export default AddDevices;