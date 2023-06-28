import React from "react";
import "./App.css";

function Misc(props){
    const handleButtonClick = (page) =>{
        props.onButtonClick(page);
    }

    return(
        <>
        <h1 id="misc_heading">Misc</h1>
        <p id="para_misc">Miscellaneous</p>
        <div id="misc_container">
            <h3>*/ Add Misc component /*</h3>
            <button id="misc_back_options_btn" onClick={()=>{handleButtonClick('options')}}>Back</button>
        </div>
        </>
    )

}


export default Misc;