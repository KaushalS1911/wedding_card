import React from 'react';
import {Box, Typography, Button, Container} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function SavedDraft() {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#F5F5F5',
                    borderRadius: '12px',
                    padding: '40px',
                    textAlign: 'center',
                    margin: 'auto',
                    mt:5
                }}
            >
                <StarOutlineIcon sx={{fontSize: 40, color: 'black'}}/>
                <Typography sx={{mt: 2 , fontSize:"27px" , fontWeight:500 , color:"#20282D"}}>
                    Starting a design?
                </Typography>
                <Typography variant="body2" sx={{mt: 1 ,fontSize:"16px" , color:"#20282D"}}>
                    Save your drafts and come <br/> back to them anytime
                </Typography>
                <Box sx={{display: {sm:'flex' , xs:"none"}, gap: 2, mt: 3}}>
                    <Button variant="contained" sx={{bgcolor: '#18C37D', borderRadius: '30px' , fontSize:"14px" , padding:"0 12px" , width:"184px" , height:"48px"}}>
                        Invitations
                    </Button>
                    <Button variant="contained" sx={{bgcolor: '#18C37D', borderRadius: '30px' , fontSize:"14px" , padding:"0 12px" , width:"184px" , height:"48px"}}>
                        Cards
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default SavedDraft;