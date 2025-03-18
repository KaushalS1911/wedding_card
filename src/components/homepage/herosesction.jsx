import React from 'react';
import { Box, Container, Grid } from "@mui/material";
import Img1 from "../../assets/Home/Img3.webp";

function HeroSection() {
    return (
        <Container maxWidth={"lg"}>
            <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ paddingTop: "50px" }}>
                {/* Left Section - Text */}
                <Grid item xs={12} sm={6}>
                    <Box sx={{ maxWidth: "500px", textAlign: { xs: "center", sm: "left" } }}>
                        <Box sx={{
                            fontSize: { md: "80px", sm: "50px", xs: "40px" },
                            fontWeight: "600",
                            letterSpacing: "0",
                            lineHeight: "110%",
                            marginBottom: "16px"
                        }}>
                            Ready to <br/> celebrate?
                        </Box>
                        <Box sx={{
                            fontSize: "21px",
                            fontWeight: "500",
                            letterSpacing: "0",
                        }}>
                            Life's a party, and it all starts with the <br/> perfect invite or card.
                        </Box>
                    </Box>
                </Grid>

                {/* Right Section - Image */}
                <Grid item xs={12} sm={6} display="flex" justifyContent="center">
                    <Box component="img"
                         src={Img1}
                         alt="Invitation Card"
                         sx={{
                             width: "100%",
                             // maxWidth: "400px",
                             height: "auto",
                             zIndex: 2,
                             borderRadius: "5%",
                             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
                         }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default HeroSection;
