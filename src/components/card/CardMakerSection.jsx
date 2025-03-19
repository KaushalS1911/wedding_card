import React from "react";
import { Box, Grid, Typography, Card, CardMedia, Container } from "@mui/material";
import card1 from '../../assets/Cards/starry-eyed-41519.avif'
import card2 from '../../assets/Cards/fun-&-color-46061.avif'
import card3 from '../../assets/Cards/love-and-laughter-46137.avif'
import card4 from '../../assets/Cards/around-stars-36487.avif'
import card5 from '../../assets/Cards/caring-thoughts-14093.avif'
import card6 from '../../assets/Cards/elephant-magic-37450.avif'
import card7 from '../../assets/Cards/heratfelt-words-45980.avif'
import card8 from '../../assets/Cards/dream-catcher-14485.avif'
import card9 from '../../assets/Cards/decorative-moon-with-flowers-34623.avif'
import card10 from '../../assets/Cards/red-delight-42047.avif'

const cardCategories = [
    {
        title: "Birthday",
        image: card1,
        bgColor: "#FFE0D6",
        hoverColor: "#FFCCBC",
    },
    {
        title: "Thank you",
        image: card2,
        bgColor: "#C5EAD9",
        hoverColor: "#A3D9BF",
    },
    {
        title: "Anniversary",
        image: card3,
        bgColor: "#D4E4F0",
        hoverColor: "#BBD4E8",
    },
    {
        title: "Wedding",
        image: card4,
        bgColor: "#FADCE1",
        hoverColor: "#F5BAC3",
    },
    {
        title: "Get well",
        image: card5,
        bgColor: "#FCEEB5",
        hoverColor: "#F5DE8F",
    },
    {
        title: "New baby",
        image: card6,
        bgColor: "#D4EFFB",
        hoverColor: "#B3E2F7",
    },
    {
        title: "Sympathy",
        image: card7,
        bgColor: "#F8C7D5",
        hoverColor: "#F4A8BC",
    },
    {
        title: "Good luck",
        image: card8,
        bgColor: "#E5D4FA",
        hoverColor: "#D3BDF6",
    },
    {
        title: "Ramadan",
        image: card9,
        bgColor: "#C5EAD9",
        hoverColor: "#A3D9BF",
    },
    {
        title: "Love & romance",
        image: card10,
        bgColor: "#FADCE1",
        hoverColor: "#F5BAC3",
    },
];

const CardMakerSection = () => {
    return (
        <Container>
            <Box sx={{ textAlign: "center", py: 5 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: "32px", sm: "45px", md: "55px", lg: "70px" },
                        fontWeight: "500"
                    }}
                >
                    <span style={{ color: "#1bc47d" }}>Card</span> maker
                </Typography>
                <Typography
                    sx={{
                        color: "#20282d",
                        mt: 1,
                        fontSize: { xs: "14px", sm: "16px", md: "18px" }
                    }}
                >
                    Create personalized greeting cards for every special moment
                </Typography>

                <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
                    {cardCategories.map((card, index) => (
                        <Grid item key={index} xs={6} sm={3} md={2.2}>
                            <Box
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: card.bgColor,
                                    borderRadius: "10px",
                                    padding: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    transition: "background-color 0.3s ease",
                                    "&:hover": {
                                        backgroundColor: card.hoverColor,
                                    },
                                }}
                            >
                                <Card sx={{ boxShadow: 0, mb: 2 }}>
                                    <CardMedia
                                        component="img"
                                        image={card.image}
                                        alt={card.title}
                                        sx={{ width: "100px", height: "150px" }}
                                    />
                                </Card>
                                <Typography sx={{ fontSize: '14px' }} >{card.title}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default CardMakerSection;
