import React from 'react';
import './App.css';





function Options(props) {
  const handleButtonClick = (page) => {
    props.onButtonClick(page);
  };

  return (
    <div>
      <h1 id='options_heading'>Options</h1>
      <p id="para_options">Do What you Want!!</p>
      <div id="options_btns">
      <button id="add_devices" onClick={()=>handleButtonClick('add_devices')}>Add Devices</button>
      <button id="show_devices" onClick={()=>handleButtonClick('show_devices')}>Show Devices</button>
      <button id="create_slideshow" onClick={()=>handleButtonClick('create_slideshow')}>Create Slides</button>
      <button id="add_team" onClick={()=> handleButtonClick('add_team')}>Add Team</button>
      <button id="misc" onClick={()=> handleButtonClick('misc')}>Misc</button>
      <button onClick={() => handleButtonClick('home')} id='options_back_home_btn'>Home</button>
      </div>
    </div>
  );
}

export default Options;

