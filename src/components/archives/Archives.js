import React, { useContext } from 'react'

import { Box,Grid,styled} from '@mui/material';
// import {styled } from '@mui/material/styles';
import { DataContext } from '../../context/DataProvider';
import Archive from './Archive';





const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));



const Archives = () => {
    const {archiveNotes} = useContext(DataContext);
  return (
    <>
    <Box sx={{display:'flex',width: '100%' }}>
        <Box component="main" sx = {{p:3,width: '100%' }}>
            <DrawerHeader 
            PaperProps={{
                sx: {
                  backgroundColor: 'red',
                  color: 'white'
                }
              }}
            />
                <Grid container style={{marginTop:16}}>{
                    archiveNotes.map(note=>{
                        return (<Grid item>
                                <Archive archive = {note}/>
                            </Grid>)
                        })
                }
                </Grid>
        </Box>
    </Box>
    </>
  )
}

export default Archives