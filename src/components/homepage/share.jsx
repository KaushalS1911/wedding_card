import React from "react";
import {Box, Typography, Grid, Container} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EventIcon from "@mui/icons-material/Event";
import Celebrate from "./celebrate.jsx";

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
        <Container maxWidth={"lg"}>
            <Box sx={{ textAlign: "center", py: {md:15,xs:4} }}>
                {/* Title */}
                <Typography variant="h4" sx={{ fontWeight: "500", mb: 1 }}>
                    Endless ways to spread the joy
                </Typography>
                <Typography variant="body1" sx={{ color: "gray", mb: 4 }}>
                    Design it once, share it everywhere!
                </Typography>

                {/* Features Grid */}
                <Grid container spacing={4} justifyContent="center">
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",mt:3 }}>
                                {feature.icon}
                                <Typography variant="h6" sx={{ mt: 2, fontWeight: "500" }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "gray", mt: 1,width:"70%" }}>
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default ShareSection;
