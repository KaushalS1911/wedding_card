import React from 'react';
import { Box, Container, Grid } from "@mui/material";
import Img1 from "../../assets/Home/Img3.webp";

function HeroSection() {
    return (
        <Container maxWidth="lg">
            <Grid container alignItems="center" justifyContent="center" spacing={{ xs: 4, md: 8 }} sx={{ paddingTop: "50px" }}>
                {/* Left Section - Text */}
                <Grid item xs={12} sm={6}>
                    <Box sx={{ maxWidth: "500px", textAlign: { xs: "center", sm: "left" } }}>
                        <Box sx={{
                            fontSize: { xs: "36px", sm: "50px", md: "70px" },
                            fontWeight: "500",
                            lineHeight: "110%",
                            marginBottom: "16px", color:'#20282d'
                        }}>
                            Ready to <br /> celebrate?
                        </Box>
                        <Box sx={{
                            fontSize: { xs: "18px", sm: "21px" },
                            fontWeight: "300", color:'#20282d'
                        }}>
                            Life's a party, and it all starts with the <br /> perfect invite or card.
                        </Box>
                    </Box>
                </Grid>

                {/* Right Section - Image */}
                <Grid item xs={12} sm={6} display="flex" justifyContent="center">
                    <Box
                        component="img"
                        src={Img1}
                        alt="Invitation Card"
                        sx={{
                            width: "100%",
                            maxWidth: { xs: "280px", sm: "400px", md: "500px" },
                            height: "auto",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default HeroSection;
