import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/LightbulbOutlined";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CakeIcon from "@mui/icons-material/Cake";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";

// Sample images
import Img1 from "../../assets/Home/Img3.webp";
import Img2 from "../../assets/Home/Img3.webp";
import Img3 from "../../assets/Home/Img3.webp";

// Section Data
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

function Editing() {
    return (
        <Container maxWidth={"xl"}>
            <Box sx={{ py: 6, px: { xs: 2, md: 15 } }}>
                {sections.map((section, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column-reverse", md: index % 2 === 0 ? "row" : "row-reverse" },
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: { xs: 4, md: 8 },
                            mb: index !== sections.length - 1 ? {md:"200px",xs:"50px"} : 0, // Adds space only between boxes
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
                                    maxWidth: "800px",
                                    height: "auto",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                }}
                            />
                        </Box>

                        {/* Text + Buttons */}
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                paddingLeft: {md:"80px",xs:"20px"},
                                flexDirection: "column",
                                alignItems: { xs: "center", md: "flex-start" },
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: "32px", md: "45px" },
                                    fontWeight: "600",
                                    lineHeight: "110%",
                                    marginBottom: "16px",
                                    textAlign: { xs: "center", md: "left" },
                                    width: { md: "420px" },
                                }}
                            >
                                {section.title}
                            </Typography>

                            {/* Dynamic Buttons */}
                            <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
                                {section.buttons.map((btn, idx) => (
                                    <Box
                                        key={idx}
                                        variant="contained"
                                        sx={{
                                            background: "#F5F5F5",
                                            color: "black",
                                            borderRadius: "50px",
                                            // padding:"16px 20px 16px 28px",
                                            py:"16px",
                                            paddingLeft:"28px",
                                            paddingRight:"20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            width: "320px",
                                            fontWeight: 500,
                                            fontSize:"21px",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease-in-out",
                                            "&:hover": {
                                                paddingRight:"15px",
                                                paddingLeft:"20px",
                                            },
                                        }}
                                    >
                                        {btn.label} {btn.icon}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default Editing;
