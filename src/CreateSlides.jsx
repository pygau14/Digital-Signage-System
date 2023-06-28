import React from "react";
import "./App.css";

function CreateSlideShow(props){
    const handleButtonClick = (page) =>{
        props.onButtonClick(page);
    }

    return(
        <>
        <h1 id="create_slideshow_heading">Create Slide Show</h1>
        <p id="para_create_slideshow">Create your Slide show by selecting the Number of Frames and uploading the Images</p>
        <div id="create_slideshow_container">
            <h3>*/ Add create slide show component /*</h3>

            <button id="create_slideshow_back_options_btn" onClick={()=>{handleButtonClick('options')}}>Back</button>
        </div>
        </>
    )
}

export default CreateSlideShow;