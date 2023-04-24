import React from 'react'
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteNotes from './delete/DeleteNotes';
import Archives from './archives/Archives';


const Home = () => {
  return (
    <Box style={{display:'flex',width:'100%'}}>
      <BrowserRouter>
        <SwipeDrawer />
        <Routes>
          <Route exact path='/' element={<Notes/>}/>
          <Route exact path='/archive' element={<Archives/>}/>
          <Route exact path='/delete' element={<DeleteNotes/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
    )
}

export default Home