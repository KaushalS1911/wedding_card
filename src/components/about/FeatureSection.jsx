import React from "react";
import { Box, Grid, Typography, Paper, Container } from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects"; // Simplicity
import PaletteIcon from "@mui/icons-material/Palette"; // Personalization
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"; // Exciting Design
import CollectionsIcon from "@mui/icons-material/Collections"; // Variety

const features = [
    {
        icon: <EmojiObjectsIcon sx={{ color: "#FFCDDA", fontSize: "36px" }} />,
        title: "Simplicity",
        description:
            "Design like a pro in minutes, then download, print or send online with a beautiful animated experience!",
        borderColor: "#FFCDDA",
    },
    {
        icon: <CollectionsIcon sx={{ color: "#BBEDD8", fontSize: "36px" }} />,
        title: "Variety",
        description:
            "With thousands of designs for every occasion under the sun, we've got you covered!",
        borderColor: "#BBEDD8",
    },
    {
        icon: <AutoAwesomeIcon sx={{ color: "#CBD5F8", fontSize: "36px" }} />,
        title: "Exciting design",
        description:
            "Surprise and delight your guests with gorgeous, professionally-designed invites and cards.",
        borderColor: "#CBD5F8",
    },
    {
        icon: <PaletteIcon sx={{ color: "#DDCBF8", fontSize: "36px" }} />,
        title: "Personalization",
        description:
            "Use our intuitive editor to customize your design with fonts, color palettes, stickers and images.",
        borderColor: "#DDCBF8",
    },
];

const FeatureSection = () => {
    return (
        <Container maxWidth={'md'} >
            <Box sx={{ py: 5, }}>
                <Grid container spacing={3}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    px: { xs: 1, md: 4 },
                                    py: { xs: 2, md: 5 },
                                    border: `2px solid ${feature.borderColor}`,
                                    borderRadius: "25px",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 2,
                                    height: "100%",
                                }}
                            >
                                {feature.icon}
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontSize: { xs: "18px", sm: "20px", md: "22px" },
                                            fontWeight: "500",
                                            mb: { xs: 1, sm: 2 }
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontSize: { xs: "14px", sm: "16px" },
                                            fontWeight: "400"
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </Box>

                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default FeatureSection;
