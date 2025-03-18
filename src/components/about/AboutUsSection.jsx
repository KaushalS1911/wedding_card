import React from "react";
import { Box, Grid } from "@mui/material";
import img1 from '../../assets/about/team.avif';
import img2 from '../../assets/about/hand.avif';
import img3 from '../../assets/about/cards.avif';

const AboutUsSection = () => {
    return (
        <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 8 }, textAlign: "center" }}>
            <Grid container spacing={{ xs: 1, sm: 3 }}>
                {/* Top Image - Full Width */}
                <Grid item xs={12}>
                    <Box
                        component="img"
                        src={img1}
                        alt="Our Team"
                        sx={{
                            width: "100%",
                            height: { xs: 150, sm: 350, md: 400 },
                            borderRadius: "16px",
                            objectFit: "cover",
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": { transform: "scale(1.02)" },
                        }}
                    />
                </Grid>

                {/* Bottom Two Images */}
                <Grid item xs={6}>
                    <Box
                        component="img"
                        src={img2}
                        alt="Design Process"
                        sx={{
                            width: "100%",
                            height: { xs: "auto", sm: 250, md: 300 },
                            borderRadius: "16px",
                            objectFit: "cover",
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": { transform: "scale(1.02)" },
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Box
                        component="img"
                        src={img3}
                        alt="Card Designs"
                        sx={{
                            width: "100%",
                            height: { xs: "auto", sm: 250, md: 300 },
                            borderRadius: "16px",
                            objectFit: "cover",
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": { transform: "scale(1.02)" },
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutUsSection;
