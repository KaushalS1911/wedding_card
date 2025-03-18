import React, { useState } from "react";
import { Card,  Typography, Button, Box, IconButton, Grid, Chip, Paper, Stack } from "@mui/material";
import { Share,  Download, Print, PictureAsPdf, ShoppingCart } from "@mui/icons-material";
import img from '../../assets/TemplatePage/up-and-away-48012.avif'

const InvitationCard = () => {

    const [color, setColor] = useState("gold");

    const handleColorChange = (event, newColor) => {
        if (newColor !== null) {
            setColor(newColor);
        }
    };

    return (
        <Box sx={{ p: 4, minHeight: "100vh" }}>
            <Grid container spacing={4} justifyContent="center">
                {/* Invitation Preview */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 2, textAlign: "center", boxShadow: 3, height: '100%' }}>
                        <Box sx={{ border: "2px dashed gray", p: 5, height: '100%' }}>
                            <Typography component={'img'} src={img} width={'100%'} />
                        </Box>
                    </Card>
                </Grid>

                <Box sx={{ maxWidth: 350, p: 2 ,pt:4 }}>
                    {/* Title */}
                    <Typography variant="h5" fontWeight={600}>Up and away</Typography>
                    <Typography variant="body2" color="textSecondary">Birthday invitation</Typography>

                    {/* Size & Premium Label */}
                    <Stack direction="row" display={'flex'} justifyContent={'space-between'} alignItems="center" spacing={1} my={2}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>Size <strong>5” x 7”</strong></Typography>
                        <Chip label="Premium" color="secondary" variant="outlined" sx={{ fontSize: "12px", fontWeight: 500 }} />
                    </Stack>

                    {/* Customize Button */}
                    <Button variant="contained" fullWidth sx={{ mt: 2,boxShadow:'none', bgcolor: "#1BC47D",borderRadius:'25px', "&:hover": { bgcolor: "#18B071" } }}>
                        Customize
                    </Button>

                    {/* Color Picker */}
                    <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
                        <Typography variant="body2" fontWeight={500} mb={1}>Color {color === "gold" ? "Gold" : "Pink"}</Typography>
                        <Box value={color} exclusive onChange={handleColorChange} sx={{display:'flex', gap:1}} >
                            <Box value="gold" sx={{ bgcolor: "#FFD700", width: 24, height: 24, borderRadius: "50%" }} />
                            <Box value="pink" sx={{ bgcolor: "#FF69B4", width: 24, height: 24, borderRadius: "50%" }} />
                        </Box>
                    </Paper>

                    {/* Spread the Joy Section */}
                    <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
                        <Typography variant="body2" sx={{fontSize:'14px',fontWeight:'600',mb:2}} >Spread the joy</Typography>
                        <Stack direction="column" spacing={1}>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><Download fontSize="small" /></IconButton>
                                <Typography variant="body2">Download image</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><PictureAsPdf fontSize="small" /></IconButton>
                                <Typography variant="body2">Download PDF</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><Print fontSize="small" /></IconButton>
                                <Typography variant="body2">Print</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><Share fontSize="small" /></IconButton>
                                <Typography variant="body2">Share</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><ShoppingCart fontSize="small" /></IconButton>
                                <Typography variant="body2">Order prints</Typography>
                            </Stack>
                        </Stack>
                    </Paper>

                    {/* RSVP Section */}
                    <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
                        <Typography variant="body2" fontWeight={600}>Add RSVP page</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Get your own event webpage to track RSVPs, view responses, and manage your guest list.
                        </Typography>
                    </Paper>
                </Box>
            </Grid>
        </Box>
    );
};

export default InvitationCard;
