import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const features = [
    {
        icon: <CloudDownloadIcon sx={{ fontSize: 50, color: "#20282d" }} />,
        title: "Download",
        description: "Download your card as a printable PDF or shareable image to your device.",
    },
    {
        icon: <PrintIcon sx={{ fontSize: 50, color: "#20282d" }} />,
        title: "Print",
        description: "Download a high-quality PDF and print at home, or let us do the printing!",
    },
    {
        icon: <ShareIcon sx={{ fontSize: 50, color: "#20282d" }} />,
        title: "Share",
        description: "Share your eCard easily via social media, text message, or email.",
    },
];

const CardSharingOptions = () => {
    return (
        <Container sx={{ textAlign: "center", py: 8 }}>
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: "24px", sm: "32px", md: "36px", lg: "40px" },
                    fontWeight: "400",
                    mb: 2,
                    color: '#20282d'
                }}
            >
                Endless ways to spread the joy
            </Typography>

            <Typography
                sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "14px" },
                    fontWeight: "400",
                    color: '#20282d',
                    mb: { xs: 6, sm: 8, md: 10 }
                }}
            >
                Design it once, share it everywhere!
            </Typography>


            <Grid container spacing={4} justifyContent="center">
                {features.map((feature, index) => (
                    <Grid item key={index} xs={12} sm={4}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", color: '#20282d' }}>
                            {feature.icon}
                            <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "500", my: 1, color: '#20282d' }}>
                                {feature.title}
                            </Typography>
                            <Typography sx={{ color: "#777", maxWidth: "250px", fontSize: '12px', color: '#20282d' }}>
                                {feature.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CardSharingOptions;
