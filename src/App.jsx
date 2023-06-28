import React, { useState } from 'react';
import Home from './Home';
import Signup from './SignUp';
import Options from './Options';
import AddDevices from './AddDevices';
import ShowDevices from './ShowDevices';
import CreateSlideShow from './CreateSlides';
import AddTeam from './AddTeam';
import Misc from './Misc';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home onButtonClick={setCurrentPage} />;
    } else if (currentPage === 'signup') {
      return <Signup onButtonClick={setCurrentPage} />;
    } else if (currentPage === 'options') {
      return <Options onButtonClick={setCurrentPage} />;
    } else if (currentPage === 'add_devices') {
      return <AddDevices onButtonClick={setCurrentPage} />;
    } else if(currentPage === 'show_devices'){
      return <ShowDevices onButtonClick={setCurrentPage} />;
    } else if (currentPage === 'create_slideshow'){
      return <CreateSlideShow onButtonClick={setCurrentPage} />;
    } else if (currentPage === 'add_team'){
      return <AddTeam onButtonClick={setCurrentPage} />;
    } else if (currentPage === 'misc'){
      return <Misc onButtonClick={setCurrentPage} />;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
