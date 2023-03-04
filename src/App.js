// import { useContext, useState } from 'react';
// import axios from 'axios';


import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Beach from './Beach';
import Bird from './Bird';
import Food from './Food';
import { ImgContext } from './ImgContext';
import Mount from './Mount';
import SearchPage from './searchPage';

function App(props) {
  const imgdata = props.imglink
  return (
    <div >
      <ImgContext.Provider value={{imgdata}} >
        {props.children}
      </ImgContext.Provider>
      <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SearchPage />} />
                    <Route path="/mountains" element={<Mount />} />
                    <Route path='/beaches' element={<Beach/>} />
                    <Route path="/birds" element={<Bird />} />
                    <Route path="/food" element={<Food />} />
                </Routes>
            </BrowserRouter>
    </div>
  );
}
export default App;


// Key:
// 2efb06c783bd237eedfe29abcf3f08c0

// Secret:
// 7fab2901a88b3cae