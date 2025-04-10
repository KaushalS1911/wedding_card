import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EventIcon from "@mui/icons-material/Event";

const features = [
    {
        icon: <DownloadIcon sx={{ fontSize: 40 }} />,
        title: "Download",
        description: "Get a digital copy of your invitation by downloading it to your device.",
    },
    {
        icon: <PrintIcon sx={{ fontSize: 40 }} />,
        title: "Print",
        description: "Order prints with FREE shipping or download a high-quality PDF and print at home.",
    },
    {
        icon: <ShareIcon sx={{ fontSize: 40 }} />,
        title: "Share",
        description: "Spread the word on social media, by text message, or email to friends and family.",
    },
    {
        icon: <EventIcon sx={{ fontSize: 40 }} />,
        title: "Manage",
        description: "Create an online event page to collect RSVPs and manage all the little details!",
    },
];

function ShareSection() {
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
                    <Grid item key={index} xs={6} sm={3}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", color: '#20282d' }}>
                            {feature.icon}
                            <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "500", my: 1, color: '#20282d' }}>
                                {feature.title}
                            </Typography>
                            <Typography sx={{ fontWeight: '400', maxWidth: "250px", fontSize: '12px', color: '#20282d' }}>
                                {feature.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ShareSection;
