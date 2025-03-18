import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip, Button, Container } from "@mui/material";
import Img1 from "../../assets/Home/Img11.png"; // First blog image
import Img2 from "../../assets/Home/Img22.jpg"; // Second blog image

const blogPosts = [
    {
        image: Img1,
        category: "Birthday",
        time: "13 min read",
        title: "15 Unique Birthday Surprise Ideas for Your Loved One",
        color: "#E1C8FF",
    },
    {
        image: Img2,
        category: "Parties",
        time: "10 min read",
        title: "Spring Party Themes And Ideas For Fun And Easy Parties",
        color: "#C8F7E1",
    },
];

function Inspiration() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", py: 8 }}>
                {/* Title */}
                <Typography variant="h4" sx={{ fontWeight: "500", mb: 3 }}>
                    Find inspiration for your <br /> next celebration
                </Typography>

                {/* Blog Cards */}
                <Grid container spacing={3} justifyContent="center">
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} sm={6} md={5} key={index}>
                            <Card
                                sx={{
                                    borderRadius: "16px",
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                    overflow: "hidden", // Prevents image overflow
                                    "&:hover img": { transform: "scale(1.05)" }, // Hover effect on image
                                }}
                            >
                                {/* Blog Image */}
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={post.image}
                                    alt={post.title}
                                    sx={{
                                        borderTopLeftRadius: "16px",
                                        borderTopRightRadius: "16px",
                                        transition: "all 0.3s ease-in-out", // Smooth hover transition
                                    }}
                                />

                                {/* Blog Content */}
                                <CardContent sx={{ textAlign: "left", p: 3 }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                                        <Chip label={post.category} sx={{ backgroundColor: post.color, color: "black", fontWeight: "500" }} />
                                        <Typography variant="body2" sx={{ color: "gray" }}>
                                            {post.time}
                                        </Typography>
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: "500" }}>
                                        {post.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Button */}
                <Button
                    variant="contained"
                    sx={{
                        mt: 4,
                        backgroundColor: "#18B071",
                        color: "white",
                        borderRadius: "20px",
                        px: 4,
                        py: 1,
                        fontSize: "16px",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#00B04A" },
                    }}
                >
                    Get inspired
                </Button>
            </Box>
        </Container>
    );
}

export default Inspiration;
