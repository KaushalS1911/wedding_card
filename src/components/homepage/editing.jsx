import React from "react";
import { Box, Typography, Container } from "@mui/material";
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
            { label: "Birthday invites", icon: <LightbulbIcon sx={{ color: "#ff9059" }} /> },
            { label: "Birthday cards", icon: <InsertPhotoIcon sx={{ color: "#ff9059" }} /> },
        ],
    },
    {
        title: 'Say "I do" to happily ever after',
        image: Img2,
        buttons: [
            { label: "Wedding invites", icon: <CakeIcon sx={{ color: "#ff5985" }} /> },
            { label: "Engagement party", icon: <InsertPhotoIcon sx={{ color: "#ff5985" }} /> },
            { label: "Save the date", icon: <LightbulbIcon sx={{ color: "#ff5985" }} /> },
        ],
    },
    {
        title: "Welcome tiny treasures",
        image: Img3,
        buttons: [
            { label: "Baby shower", icon: <BabyChangingStationIcon sx={{ color: "#4dc6d6" }} /> },
            { label: "Gender reveal", icon: <LightbulbIcon sx={{ color: "#4dc6d6" }} /> },
            { label: "Baptism", icon: <InsertPhotoIcon sx={{ color: "#4dc6d6" }} /> },
        ],
    },
];

function Editing() {
    return (
        <Container maxWidth="xl">
            <Box sx={{ py: 6, px: { xs: 2, md: 8 } }}>
                {sections.map((section, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column-reverse", md: index % 2 === 0 ? "row" : "row-reverse" },
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: { xs: 4, md: 6 },
                            mb: index !== sections.length - 1 ? { md: "100px", xs: "50px" } : 0,
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
                                    maxWidth: { xs: "300px", sm: "500px", md: "700px" },
                                    height: "auto",
                                    borderRadius: "15px",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                }}
                            />
                        </Box>

                        {/* Text + Buttons */}
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                px: { xs: 2, md: 5 },
                                textAlign: { xs: "center", md: "left" },
                                alignItems: { xs: "center", md: "flex-start" },
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: "26px", sm: "32px", md: "40px" },
                                    fontWeight: "600",
                                    lineHeight: "110%",
                                    marginBottom: "16px",
                                    width: { md: "420px" },
                                }}
                            >
                                {section.title}
                            </Typography>

                            {/* Dynamic Buttons */}
                            <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2, width: "100%", maxWidth: "350px" }}>
                                {section.buttons.map((btn, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            background: "#F5F5F5",
                                            color: "black",
                                            borderRadius: "50px",
                                            py: "14px",
                                            px: "24px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            width: "100%",
                                            fontWeight: 500,
                                            fontSize: "18px",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease-in-out",
                                            "&:hover": {
                                                background: "#e0e0e0",
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
