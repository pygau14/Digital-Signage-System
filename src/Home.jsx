import React from 'react';
import "./App.css";

function Home(props) {
  const handleButtonClick = (page) => {
    props.onButtonClick(page);
  };

  return (
    <>
    <h1 id="main_page_heading">Welcome to my App!</h1>
    <div id="main_container">
      <button id="sign_up_btn" onClick={() => handleButtonClick('signup')}>Sign Up</button>
      <button id="options_btn" onClick={() => handleButtonClick('options')}>Options</button>
    </div>
    </>
  );
}

export default Home;
