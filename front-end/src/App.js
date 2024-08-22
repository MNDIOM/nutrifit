import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Headerstyle from './Headerstyle';
 
import SignUp from './SignUp';
import Login from './Login';
import Welcome from './Welcome';
import GetStarted from './GetStarted';

const App = () => {
  return (
    <>
      <Headerstyle /> {/* Use HeaderStyle instead of Navbar */}
      <div className="App">
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
