import React from "react";
import { Card, CardContent, Typography, Button, Box, IconButton, Grid } from "@mui/material";
import { Share, Favorite, Download, Print } from "@mui/icons-material";

const InvitationCard = () => {
    return (
        <Box sx={{ p: 4, minHeight: "100vh" }}>
            <Grid container spacing={4} justifyContent="center">
                {/* Invitation Preview */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 2, textAlign: "center", boxShadow: 3 }}>
                        <Box sx={{ border: "2px dashed gray", p: 5 }}>
                            <Typography variant="h6" color="textSecondary">
                                Upload your own design
                            </Typography>
                        </Box>
                    </Card>
                </Grid>

                {/* Details Section */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h1" sx={{fontSize:'27px', fontWeight:'500'}}>
                        Geometric polygon - portrait
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Invitation | Size 5”x7”
                    </Typography>

                    <Button variant="contained" sx={{ mt: 2, backgroundColor: "#1bc47d" }}>
                        Customize
                    </Button>

                    <Box sx={{ mt: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            Spread the joy
                        </Typography>
                        <Button startIcon={<Download />} sx={{ display: "block", textTransform: "none" }}>
                            Download Image
                        </Button>
                        <Button startIcon={<Download />} sx={{ display: "block", textTransform: "none" }}>
                            Download PDF
                        </Button>
                        <Button startIcon={<Print />} sx={{ display: "block", textTransform: "none" }}>
                            Print
                        </Button>
                        <Button startIcon={<Share />} sx={{ display: "block", textTransform: "none" }}>
                            Share
                        </Button>
                    </Box>

                    {/* Save & Share */}
                    <Box sx={{ mt: 2 }}>
                        <IconButton>
                            <Share />
                        </IconButton>
                        <IconButton>
                            <Favorite />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InvitationCard;
