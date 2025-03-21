import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import Img1 from "../../assets/my-profile/Img1.png";
import Img2 from "../../assets/my-profile/iMG2 (1).png";
import Img3 from "../../assets/my-profile/Img3.png";

function Ffavorites() {
    const [selectedIndex, setSelectedIndex] = useState(0); // Default selected color index

    const colors = [
        { bgColor: "#F9F5F3", image: Img1 }, // First color (default image)
        { bgColor: "#BDA88D", image: Img2 },
        { bgColor: "#1C1C1C", image: Img3 }
    ];

    return (
        <Container maxWidth="xl" sx={{my:5}} >
            {/* Image Box */}
            <Box sx={{
                height: "479px",
                width: "343px",
                borderRadius: "8px",
                overflow: "hidden",
                border: "2px solid #EBEBEB",
                "&:hover": {
                    border: "2px solid #000"
                },
            }}>
                <img
                    src={colors[selectedIndex].image}
                    alt="Wedding Invite"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                        transition: "opacity 0.3s ease-in-out",
                    }}
                />
            </Box>

            {/* Title */}
            <Box sx={{
                fontSize: "18px",
                marginTop: "13px",
                color: "#63696c",
                fontWeight: "500",
            }}>
                Golden minimalism
            </Box>

            {/* Color Selector Section (Below Title) */}
            <Box sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                marginTop: "10px",
            }}>
                {colors.map((color, index) => (
                    <Box
                        key={index}
                        onClick={() => setSelectedIndex(index)} // Click to change image
                        sx={{
                            p: "2px",
                            borderRadius: "50%",
                            border: `1px solid ${selectedIndex === index ? "black" : "transparent"}`, // Black border for selected color
                            transition: "border 0.2s ease-in-out",
                            cursor: "pointer",
                            "&:hover": {
                                border: "1px solid black", // Black border on hover
                            },
                        }}
                    >
                        <Box sx={{
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            backgroundColor: color.bgColor,
                            cursor: "pointer",
                        }} />
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default Ffavorites;
