// import React from "react";
// import { Box, Grid, Typography, Card, CardMedia, CardContent, Link, Container } from "@mui/material";
// import blog1 from '../../assets/blog/blog1.webp';
// import blog2 from '../../assets/blog/blog2.webp';
// import blog3 from '../../assets/blog/blog3.jpg';
// import blog4 from '../../assets/blog/blog4.webp';
// import { useNavigate } from "react-router-dom";

// const blogPosts = [
//     {
//         id: 1,
//         category: "Birthday",
//         title: "How To Plan a Birthday Picnic? Ideas For a Fun Celebration",
//         description: "Over half of Americans spend no more than five hours outdoors each week. One way you can get in more quality time among nature is by throwing an amazing birthday picnic ...",
//         image: blog1,
//         link: "/blog/birthday-picnic",
//     },
//     {
//         id: 2,
//         category: "Graduation",
//         title: "20 Exciting Graduation Party Ideas and Games for Grads",
//         description: "A graduation party is an occasion to celebrate achievements, reminisce about fond memories, and look forward to the future. While preparing grad announcements and grad p...",
//         image: blog2,
//         link: "/blog/graduation-party",
//     },
//     {
//         id: 3,
//         category: "Holidays",
//         title: "14 Perfect Valentine’s Day Movies to Get in the Spirit",
//         description: "When most people think of Thomas Edison, their minds go to lightbulbs, but you may be surprised to know that he also captured the first movie kiss in history back in 189...",
//         image: blog3,
//         link: "/blog/valentine-movies",
//     },
//     {
//         id: 4,
//         category: "Christmas",
//         title: "How To Host A Joyful Friendsmas Party This Holiday?",
//         description: "You’ve likely heard of a Friendsgiving party, but have you heard of a Friendsmas party? Friends + Christmas = Friendsmas and it’s a fun way to celebrate the season...",
//         image: blog4,
//         link: "/blog/friendsmas-party",
//     },
// ];

// const BlogSection = () => {

//     const navigate = useNavigate();

//     return (
//         <Container>
//             <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 8 } }}>
//                 <Grid container spacing={4}>
//                     {blogPosts.map((post) => (
//                         <Grid item xs={12} sm={6} key={post.id}>
//                             <Card sx={{ boxShadow: "none", borderRadius: 0, cursor: 'pointer' }} onClick={() => navigate("/singleblog")} >
//                                 {/* Blog Image */}
//                                 <CardMedia
//                                     component="img"
//                                     height="300"
//                                     image={post.image}
//                                     alt={post.title}
//                                     sx={{ objectFit: "cover" }}
//                                 />

//                                 {/* Blog Content */}
//                                 <CardContent sx={{ textAlign: "left", p: 2 }}>
//                                     <Typography
//                                         variant="body2"
//                                         sx={{ color: "#707177", fontSize: "12px", mb: 1 }}
//                                     >
//                                         {post.category}
//                                     </Typography>

//                                     <Typography
//                                         variant="h6"
//                                         sx={{
//                                             fontWeight: "500",
//                                             color: "#000",
//                                             mb: 1,
//                                             fontSize: { xs: "16px", sm: "18px", md: "20px" },
//                                             transition: "color 0.3s ease",
//                                             "&:hover": { color: "#18B071", cursor: "pointer" },
//                                         }}
//                                     >
//                                         {post.title}
//                                     </Typography>

//                                     <Typography
//                                         variant="body2"
//                                         sx={{ color: "#555", fontSize: "14px", mb: 1 }}
//                                     >
//                                         {post.description}
//                                     </Typography>

//                                     <Link sx={{
//                                         textDecoration: "none",
//                                         color: "#18B071",
//                                         fontSize: "14px",
//                                         fontWeight: "500",
//                                         cursor: 'pointer'
//                                     }}>
//                                         Continue reading...
//                                     </Link>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </Container>
//     );
// };

// export default BlogSection;


import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent, Link, Container } from "@mui/material";
import axios from "axios";
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
                                onClick={() => navigate(`/singleblog/${post._id}`)}
                            >
                                <Box sx={{ width: "100%", height: "300px", overflow: "hidden" }}>
                                    <CardMedia
                                        component="img"
                                        image={post?.images[3]}
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
