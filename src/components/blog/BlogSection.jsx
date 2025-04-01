import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent, Link, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Instance";

const BlogSection = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axiosInstance.get('/api/blog')
            .then(response => {
                setBlogs(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching blogs:", error);
            });
    }, []);

    return (
        <Container>
            <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 8 } }}>
                <Grid container spacing={4}>
                    {blogs && blogs?.map((post) => (
                        <Grid item xs={12} sm={6} key={post._id}>
                            <Card
                                sx={{ boxShadow: "none", borderRadius: 0, cursor: 'pointer' }}
                                // onClick={() => navigate(`/singleblog/${post._id}`)}
                            >
                                <Box sx={{ width: "100%", height: "300px", overflow: "hidden" }}>
                                    <CardMedia
                                        component="img"
                                        image={post?.images[0]}
                                        alt={post?.title}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                </Box>

                                <CardContent sx={{ textAlign: "left", p: 2 }}>
                                    <Typography variant="body2" sx={{ color: "#707177", fontSize: "12px", mb: 1 }}>
                                        {post?.blogCategory}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: "500",
                                            color: "#000",
                                            mb: 1,
                                            fontSize: { xs: "16px", sm: "18px", md: "20px" },
                                            transition: "color 0.3s ease",
                                            "&:hover": { color: "#18B071", cursor: "pointer" },
                                        }}
                                    >
                                        {post?.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#555", fontSize: "14px", mb: 1 }}>
                                        {post?.desc.substring(0, 100)}...
                                    </Typography>
                                    <Link sx={{
                                        textDecoration: "none",
                                        color: "#18B071",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        cursor: 'pointer'
                                    }}>
                                        Continue reading...
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default BlogSection;
