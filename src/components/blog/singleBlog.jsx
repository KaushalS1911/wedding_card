// import React from 'react';
// import {Box, Container, Grid, Typography} from "@mui/material";
// import img1 from '../../assets/blog/blog3.jpg'
// import img2 from '../../assets/blog/partyCard.webp'
// import img3 from '../../assets/blog/dinnerTable.webp'

// function SingleBlog() {
//     return (
//         <Container maxWidth={"md"}>
//             <Box sx={{padding: {sm: "0 40px", xs: "unset"}}}>
//                 <Box sx={{padding: {sm: "0 40px", xs: "unset"}, margin: "0 0 48px 0"}}>
//                     <Typography sx={{color: "#707177", fontWeight: 300}}>Birthday - Updated March 13, 2025</Typography>
//                     <Typography component={"h1"} sx={{fontSize: {sm: "37px", xs: "25px"}, fontWeight: 400}}>How To Plan
//                         a Birthday Picnic?
//                         Ideas For a Fun Celebration</Typography>
//                 </Box>
//                 <Box sx={{pb: "20px"}}>
//                     <img src={img1} style={{width: '100%', height: '100%'}}/>
//                 </Box>
//                 <Box sx={{padding: {sm: "0 40px", xs: "unset"}}}>
//                     <Typography sx={{fontSize: "18px", my: "32px", color: "#2D2E34"}}>Over half of
//                         Americans spend <Typography component={"span"} sx={{
//                             color: "#18B071", fontSize: "18px", "&:hover": {
//                                 textDecoration: "underline",
//                             }
//                         }}> no
//                             more than five hours </Typography> outdoors each week. One way you can get in more quality
//                         time among nature is by throwing an amazing birthday picnic for a loved one.
//                     </Typography>
//                     <Typography sx={{fontSize: "18px", my: "32px", color: "#2D2E34"}}>There’s no denying that a birthday
//                         picnic is a phenomenal way to celebrate in a relaxing and scenic setting. Unlike regular indoor
//                         gatherings, a picnic allows fresh air, beautiful flowers, and life-giving sunshine to take the
//                         stage.
//                     </Typography>
//                     <Typography sx={{fontSize: "18px", my: "32px", color: "#2D2E34"}}>Whether it’s a romantic birthday
//                         picnic for two or a lively group celebration, hosting a picnic offers endless possibilities for
//                         both creativity and fun. The combination of good company, delicious food, and outdoor ambiance
//                         creates an experience that guests won’t ever forget. Read on to learn how to make these birthday
//                         picnic ideas become a wonderful reality.
//                     </Typography>
//                     <Typography component={"h2"}
//                                 sx={{color: "#17181E", fontSize: "26px", margin: "56px 0 16px 0", fontWeight: 600}}>Quick
//                         Links</Typography>
//                     <Grid container>
//                         {["How to Organize a Birthday Picnic",
//                             "How to Make a Picnic Table",
//                             "Must-Have Items for a Birthday Picnic",
//                             "How Long Should a Birthday Picnic Be?",
//                             "The Best Food for a Birthday Picnic",
//                             "Tried and True Final Picnic Planning Tips"].map((item, index) => (
//                             <Grid key={index} item xs={12} md={6}>
//                                 <Typography sx={{
//                                     color: "#18B071",
//                                     fontSize: "18px",
//                                     fontWeight: 500,
//                                     mb: "32px",
//                                     "&:hover": {
//                                         textDecoration: "underline",
//                                     }
//                                 }}> {item} </Typography>
//                             </Grid>
//                         ))}
//                     </Grid>
//                     <Box sx={{padding: "21px 41px", backgroundColor: "#F6F8F9"}}>
//                         <Box sx={{display: {md: "flex", xs: "unset"}, alignItems: "center"}}>
//                             <Box sx={{width: {md: "175px", xs: "100%"}, height: {md: "245px", xs: "100%"}}}>
//                                 <img src={img2} style={{}}/>
//                             </Box>
//                             <Box sx={{
//                                 padding: {sm: "0 34px", xs: "unset"},
//                                 width: {md: "430px", xs: "100%"},
//                                 textAlign: {xs: "center", md: "unset"}
//                             }}>
//                                 <Typography component={"h2"}
//                                             sx={{
//                                                 fontSize: {md: "26px", xs: "22px"},
//                                                 m: {md: "0 0 16px 0", sm: "56px 0 16px"},
//                                                 color: "#000",
//                                                 fontWeight: 600
//                                             }}>Create
//                                     birthday invitations in minutes</Typography>
//                                 <Typography sx={{fontSize: {md: "18px", xs: "15px"}, mb: "32px", color: "#000"}}>
//                                     Browse gorgeous designs for every party style!
//                                 </Typography>
//                                 <Typography sx={{
//                                     padding: "11px 40px",
//                                     color: "#18B071",
//                                     border: "1px solid #18B071",
//                                     borderRadius: "30px",
//                                     fontWeight: "500",
//                                     textAlign: "center",
//                                     textWrap: "wrap",
//                                     "&:hover": {
//                                         textDecoration: "underline",
//                                     }
//                                 }}>Birthday invites</Typography>
//                             </Box>
//                         </Box>
//                     </Box>
//                     <Typography component={"h2"}
//                                 sx={{fontSize: "26px", color: "#17181E", margin: "56px 0 16px 0", fontWeight: 600}}>How
//                         to Organize a Birthday Picnic
//                     </Typography>
//                     <Typography sx={{fontSize: "18px", color: "#2D2E34", margin: "0 0 32px 0"}}>
//                         <Typography component={"span"} sx={{
//                             color: "#18B071", fontSize: "18px", fontWeight: 500, "&:hover": {
//                                 textDecoration: "underline",
//                             }
//                         }}>
//                             Planning a birthday</Typography> picnic calls for detailed consideration. That way, you can
//                         create an enjoyable and pitch-perfect
//                         experience. From selecting the ideal location to setting the right time, each step contributes
//                         to an organized and stress-free celebration.
//                     </Typography>
//                     <Typography sx={{fontSize: "18px", color: "#2D2E34", margin: "0 0 32px 0"}}>
//                         You don’t have to start from scratch. Instead, here’s how to get started with planning the ideal
//                         birthday picnic.
//                     </Typography>
//                     <Typography component={"h2"}
//                                 sx={{fontSize: "26px", color: "#17181E", margin: "56px 0 16px 0", fontWeight: 600}}>Going
//                         With the Perfect Location
//                     </Typography>
//                     <Typography sx={{fontSize: "18px", color: "#2D2E34", margin: "0 0 32px 0"}}>
//                         Homing in on the best location can make all the difference because it’ll set the tone for your
//                         birthday picnic. Local parks tend to be a fool-proof option. This is due to the fact that many
//                         parks provide designated picnic areas with tables, nifty grills, and even bathroom facilities.
//                     </Typography>
//                     <Typography sx={{fontSize: "18px", color: "#2D2E34", margin: "0 0 32px 0"}}>
//                         Are you thinking of a more scenic setting? Look no further than <Typography component={"span"}
//                                                                                                     sx={{
//                                                                                                         color: "#18B071",
//                                                                                                         fontSize: "18px",
//                                                                                                         fontWeight: 500,
//                                                                                                         "&:hover": {
//                                                                                                             textDecoration: "underline",
//                                                                                                         }
//                                                                                                     }}>
//                         a beach picnic</Typography>. It offers the
//                         soothing sound of waves and the refreshing sea breeze.
//                     </Typography>
//                     <Typography sx={{fontSize: "18px", color: "#2D2E34", margin: "0 0 32px 0"}}>
//                         Yet another option involves botanical gardens. They can lend themselves to an enchanting
//                         atmosphere, featuring lush greenery and vibrant flowers. If your birthday person loves nature,
//                         then that could be an ideal spot for the event.
//                     </Typography>
//                     <Typography sx={{fontSize: "18px", color: "#2D2E34", margin: "0 0 32px 0"}}>
//                         For a more private and controlled environment, you can have the best of both worlds by hosting
//                         the picnic in your backyard. It allows for more fine-tuned customization and greater convenience
//                         overall.
//                     </Typography>
//                     <Box>
//                         <img src={img3}/>
//                     </Box>
//                     <Typography component={"h2"}
//                                 sx={{fontSize: "26px", color: "#17181E", margin: "56px 0 16px 0", fontWeight: 600}}>Figuring
//                         Out the Date and Time Without Getting a Headache
//                     </Typography>
//                     <Typography sx={{fontSize: "18px", color: "#2D2E34", margin: "0 0 32px 0"}}>
//                         The timing of your picnic is one of the most vital factors because it can significantly impact
//                         the experience as a whole. The last thing you’d want to deal with is a gloomy and overcast sky,
//                         heavy rain, or worse.
//                     </Typography>
//                     <Typography sx={{fontSize: "18px", color: "#2D2E34", margin: "0 0 32px 0"}}>
//                         Picking the perfect time ensures pleasant weather and can help with accommodating guests’
//                         schedules. For instance, a morning brunch picnic can provide a refreshing start to the day. On
//                         the other hand, an afternoon picnic allows for more enlivened socializing.
//                     </Typography>
//                     <Typography sx={{fontSize: "18px", color: "#2D2E34", margin: "0 0 32px 0"}}>
//                         Are you dreaming of a cozy and romantic atmosphere? If so, a sunset picnic is something that can
//                         leave a long-lasting impression on the birthday person.
//                     </Typography>
//                     <Typography sx={{fontSize: "18px", color: "#2D2E34", margin: "0 0 32px 0"}}>
//                         Whatever you decide on, don’t forget to check the <Typography component={"span"}
//                                                                                       sx={{
//                                                                                           color: "#18B071",
//                                                                                           fontSize: "18px",
//                                                                                           fontWeight: 500,
//                                                                                           "&:hover": {
//                                                                                               textDecoration: "underline",
//                                                                                           }
//                                                                                       }}>
//                         weather forecast</Typography>. You’ll also want to verify
//                         that the chosen time suits your guests if you want a truly successful picnic. Google Calendar
//                         and Calendly are just a couple of apps that can help you juggle everyone’s schedule to find a
//                         prime time for the event.
//                     </Typography>
//                 </Box>
//             </Box>
//         </Container>
//     );
// }

// export default SingleBlog;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import axiosInstance from "../../Instance";

const SingleBlog = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        axiosInstance.get(`/api/blog/${blogId}`)
            .then(response => {
                setBlog(response.data); 
            })
            .catch(error => {
                console.error("Error fetching blog:", error);
            });
    }, [blogId]);

    if (!blog) return <Typography>Loading...</Typography>;

    return (
        <Container maxWidth="md">
            <Box sx={{ padding: { sm: "0 40px", xs: "unset" }, marginBottom: "48px" }}>
                <Typography sx={{ color: "#707177", fontWeight: 300 }}>
                    {blog.blogCategory} - {new Date(blog.createdAt).toLocaleDateString()}
                </Typography>
                <Typography component="h1" sx={{ fontSize: { sm: "37px", xs: "25px" }, fontWeight: 400 }}>
                    {blog.title}
                </Typography>
            </Box>
            <Box sx={{ pb: "20px" }}>
                <img src={blog.images[0]} style={{ width: '100%', height: '100%' }} alt="Blog cover" />
            </Box>
            <Box sx={{ padding: { sm: "0 40px", xs: "unset" } }}>
                <Typography sx={{ fontSize: "18px", my: "32px", color: "#2D2E34" }}>
                    {blog.desc}
                </Typography>
            </Box>
        </Container>
    );
};

export default SingleBlog;
