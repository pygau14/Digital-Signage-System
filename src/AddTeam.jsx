import React from "react";
import "./App.css";

function AddTeam(props) {
    const handleButtonClick = (page) =>{
        props.onButtonClick(page);
    }

    return(
        <>
        <h1 id="add_team_heading">Add Team</h1>
        <p id="para_add_team">Add your Team Members</p>
        <div id="add_team_container">
            <h3>*/ Add Team component /*</h3>
            <button id="add_team_back_options_btn" onClick={()=>{handleButtonClick('options')}}>Back</button>
        
        </div>
        </>
    )
}

export default AddTeam;