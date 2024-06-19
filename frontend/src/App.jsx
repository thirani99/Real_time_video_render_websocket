import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

import Websocket from './pages/websocket';

const App = () => {
    return (
        <div className='w-full h-screen bg-[#f8f4ec]'>
            <Navbar />
            <div className='w-full h-[calc(100vh-5rem)] overflow-auto z-0'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/websocket' element={<Websocket />} />
                </Routes>
            </div>
        </div>

    )
}

export default App
