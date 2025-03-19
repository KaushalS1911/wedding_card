import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import Img1 from "../../assets/Home/Img3.webp";
import LightbulbIcon from "@mui/icons-material/LightbulbOutlined";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Img2 from "../../assets/Home/Img3.webp";
import CakeIcon from "@mui/icons-material/Cake";
import Img3 from "../../assets/Home/Img3.webp";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";

function PerfectMatch() {
    const sections = [
        {
            title: "Make a wish and celebrate with style",
            borderColor: "#ff9059",
            image: Img1,
            buttons: [
                { label: "Birthday invites", icon: <LightbulbIcon sx={{ color: "#ff9059" }} /> },
                { label: "Birthday cards", icon: <InsertPhotoIcon sx={{ color: "#ff9059" }} /> },
            ],
        },
        {
            title: 'Say "I do" to happily ever after',
            borderColor: "#ff5985",
            image: Img2,
            buttons: [
                { label: "Wedding invites", icon: <CakeIcon sx={{ color: "#ff5985" }} /> },
                { label: "Engagement party", icon: <InsertPhotoIcon sx={{ color: "#ff5985" }} /> },
                { label: "Save the date", icon: <LightbulbIcon sx={{ color: "#ff5985" }} /> },
            ],
        },
        {
            title: "Welcome tiny treasures",
            borderColor: "#4dc6d6",
            image: Img3,
            buttons: [
                { label: "Baby shower", icon: <BabyChangingStationIcon sx={{ color: "#4dc6d6" }} /> },
                { label: "Gender reveal", icon: <LightbulbIcon sx={{ color: "#4dc6d6" }} /> },
                { label: "Baptism", icon: <InsertPhotoIcon sx={{ color: "#4dc6d6" }} /> },
            ],
        },
    ];

    return (
        <Container maxWidth="xl">
            <Typography 
                component="h1" 
                sx={{ textAlign: "center", color: "#20282D", fontSize: { xs: "32px", md: "47px" }, fontWeight: 500, pt: 4 }}>
                Find your perfect match
            </Typography>

            <Box sx={{ py: 6, px: { xs: 2, md: 8 } }}>
                {sections.map((section, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column-reverse", md: index % 2 === 0 ? "row-reverse" : "row" },
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: { xs: 4, md: 6 },
                            mb: 6,
                            border: `2px solid ${section.borderColor}`,
                            borderRadius: "35px",
                            overflow: "hidden",
                            width: "100%",
                            minHeight: { xs: "auto", md: "350px" }
                        }}
                    >
                        {/* Image Section */}
                        <Box sx={{ flex: 1, width: "100%", height: "100%", display: "flex" }}>
                            <Box
                                component="img"
                                src={section.image}
                                alt="Invitation Card"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: { xs: "35px", md: index % 2 === 0 ? "35px 0 0 35px" : "0 35px 35px 0" }
                                }}
                            />
                        </Box>

                        {/* Content Section */}
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                padding: { xs: "20px", md: "40px" },
                                textAlign: { xs: "center", md: "left" },
                                alignItems: { xs: "center", md: "flex-start" }
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: "26px", md: "32px", lg: "40px" },
                                    fontWeight: "600",
                                    color: "#20282D",
                                    mb: 2
                                }}
                            >
                                {section.title}
                            </Typography>

                            <Grid container spacing={2} sx={{ width: "100%" }}>
                                {section.buttons.map((btn, idx) => (
                                    <Grid item xs={12} sm={6} key={idx}>
                                        <Box
                                            sx={{
                                                background: "#F5F5F5",
                                                borderRadius: "50px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                py: "8px",
                                                px: 2,
                                                fontSize: "16px",
                                                fontWeight: 500,
                                                cursor: "pointer",
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    background: "#e0e0e0"
                                                }
                                            }}
                                        >
                                            <Typography>{btn.label}</Typography>
                                            {btn.icon}
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default PerfectMatch;
