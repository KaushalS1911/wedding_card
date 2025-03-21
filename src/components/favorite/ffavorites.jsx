import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
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
        <Container maxWidth="xl" sx={{ my: 5 }}>
            <Grid container spacing={3} justifyContent="center">
                {/* Left Grid (Image) */}
                <Grid item xs={6} sm={6} md={4}>
                    <Box sx={{
                        height: "auto",
                        width: "200px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        cursor: 'pointer'
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


                        {/* Title */}
                        <Box sx={{
                            color: "#63696c",
                            fontWeight: "500",
                            mb: 1,
                            fontSize: { xs: "15px", sm: "16px" },
                            textAlign: { xs: "center", sm: "left" }
                        }}>
                            Golden minimalism
                        </Box>

                        {/* Color Selector */}
                        <Box sx={{
                            display: "flex",
                            gap: "10px",
                            justifyContent: { xs: "center", sm: "flex-start" }, // Center on small screens
                        }}>
                            {colors.map((color, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setSelectedIndex(index)}
                                    sx={{
                                        p: "1px",
                                        borderRadius: "50%",
                                        border: `1px solid ${selectedIndex === index ? "black" : "transparent"}`,
                                        transition: "border 0.2s ease-in-out",
                                        cursor: "pointer",
                                        "&:hover": {
                                            border: "1px solid black",
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
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Ffavorites;
