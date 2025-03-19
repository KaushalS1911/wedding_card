import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
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
            image: Img1,
            buttons: [
                { label: "Birthday invites", icon: <LightbulbIcon sx={{ color: "orange" }} /> },
                { label: "Birthday cards", icon: <InsertPhotoIcon sx={{ color: "orange" }} /> },
            ],
        },
        {
            title: 'Say "I do" to happily ever after',
            image: Img2,
            buttons: [
                { label: "Wedding invites", icon: <CakeIcon sx={{ color: "pink" }} /> },
                { label: "Engagement party", icon: <InsertPhotoIcon sx={{ color: "pink" }} /> },
                { label: "Save the date", icon: <LightbulbIcon sx={{ color: "pink" }} /> },
            ],
        },
        {
            title: "Welcome tiny treasures",
            image: Img3,
            buttons: [
                { label: "Baby shower", icon: <BabyChangingStationIcon sx={{ color: "blue" }} /> },
                { label: "Gender reveal", icon: <LightbulbIcon sx={{ color: "blue" }} /> },
                { label: "Baptism", icon: <InsertPhotoIcon sx={{ color: "blue" }} /> },
            ],
        },
    ];

    return (
        <Container maxWidth={"xl"}>
            <Box component={"h1"} sx={{display: "flex", justifyContent: "center" , color:"#20282D" , fontSize: "47px" , fontWeight: 500 , paddingTop:"48px"}}>
                Find your perfect match
            </Box>
            <Box sx={{ py: 6, px: { xs: 2, md: 15 } }}>
                {sections.map((section, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column-reverse", md: index % 2 === 0 ? "row-reverse" : "row"},
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: { xs: 4, md: 8 },
                            mb: index !== sections.length - 1 ? {lg:"200px",xs:"50px"} : 0, // Adds space only between boxes
                            border:"2px solid #000",
                            borderRadius:"35px"
                        }}
                    >
                        {/* Image */}
                        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                            <Box
                                component="img"
                                src={section.image}
                                alt="Invitation Card"
                                sx={{
                                    width: "100%",
                                    maxWidth: "100%",
                                    height: "100%",
                                    borderTopLeftRadius: {md:index % 2 === 0 ? "unset" : "35px" , xs:"unset"},
                                    borderTopRightRadius: {md:index % 2 === 0 ? "35px" : "unset" , xs:"unset"},
                                    borderBottomLeftRadius: {md:index % 2 === 0 ? "unset" : "35px" , xs:"35px" },
                                    borderBottomRightRadius: {md:index % 2 === 0 ? "35px" : "unset" , xs:"35px" },
                                }}
                            />
                        </Box>

                        {/* Text + Buttons */}
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                padding: {xs:"20px" ,md:"10px 0 10px 10px" ,lg:"10px 0 10px 50px"},
                                flexDirection: "column",
                                alignItems: { xs: "center", md: "flex-start" },
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: "32px" ,md:"26px", lg:"45px" },
                                    fontWeight: "600",
                                    lineHeight: "110%",
                                    marginBottom: "16px",
                                    textAlign: { xs: "center", md: "left" },

                                }}
                            >
                                {section.title}
                            </Typography>

                            {/* Dynamic Buttons */}
                            <Grid container sx={{ mt: 3, gap: "20px" }}>
                                {section.buttons.map((btn, idx) => (
                                    <Grid item xs={12} lg={5}
                                        key={idx}
                                        sx={{
                                            background: "#F5F5F5",
                                            color: "black",
                                            borderRadius: "50px",
                                            py:"8px",
                                            paddingLeft:"16px",
                                            paddingRight:"8px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            fontWeight: 500,
                                            fontSize:"16px",
                                            letterSpacing: "0px",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease-in-out",
                                            "&:hover": {
                                                paddingRight:"5px",
                                                paddingLeft:"12px",
                                            },
                                        }}
                                    >
                                        {btn.label} {btn.icon}
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