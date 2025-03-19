import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CakeIcon from "@mui/icons-material/Cake";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import BusinessIcon from "@mui/icons-material/BusinessCenter";
import UploadIcon from "@mui/icons-material/CloudUpload";

// Images
import Img1 from "../../assets/Home/Imgg1.png";
import Img2 from "../../assets/Home/Imgg2.png";
import Img3 from "../../assets/Home/Imgg3.png";
import Img4 from "../../assets/Home/Imgg4.png";
import Img5 from "../../assets/Home/Imgg5.png";
import Img6 from "../../assets/Home/Imgg6.png";

const buttons = [
    { label: "Housewarming", icon: <SearchIcon sx={{ color: "#7F49D0" }} /> },
    { label: "Milestone birthdays", icon: <CakeIcon sx={{ color: "#E55078" }} /> },
    { label: "Birth announcements", icon: <BabyChangingStationIcon sx={{ color: "#45B2C1" }} /> },
    { label: "Anniversary parties", icon: <CakeIcon sx={{ color: "#E58250" }} /> },
    { label: "Business events", icon: <BusinessIcon sx={{ color: "#4968D0" }} /> },
    { label: "Upload your own", icon: <UploadIcon sx={{ color: "#18B071" }} /> },
];

function Celebrate() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    background: "#F4F4F4",
                    borderRadius: "50px",
                    py: { xs: 4, md: 6 },
                    textAlign: "center",
                    mt: { md: 15, xs: 4 },
                }}
            >
                {/* Image Row (Hidden on XS) */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                        gap: 2,
                        mb: 3,
                        flexWrap: "wrap",
                    }}
                >
                    {[Img1, Img2, Img3, Img4, Img5, Img6].map((img, index) => {
                        const randomOffset = Math.random() * 70 - 30;
                        return (
                            <Box
                                key={index}
                                component="img"
                                src={img}
                                alt="Celebration Card"
                                sx={{
                                    width: { md: "140px", lg: "160px" },
                                    height: { md: "190px", lg: "210px" },
                                    borderRadius: "4px",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                    transform: `translateY(${randomOffset}px)`,
                                    transition: "transform 0.3s ease-in-out",
                                }}
                            />
                        );
                    })}
                </Box>

                {/* Title */}
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "26px", md: "38px" },
                        fontWeight: "500",
                        mb: { xs: 5, md: 7 },
                        mt: { xs: 3, md: 5 },
                    }}
                >
                    <span style={{ color: "#5174E7" }}>More reasons</span> to celebrate
                </Typography>

                {/* Buttons Grid (Responsive Layout) */}
                <Grid container spacing={2} justifyContent="center">
                    {buttons.map((btn, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={idx} display="flex" justifyContent="center">
                            <Box
                                sx={{
                                    background: "#FFFFFF",
                                    color: "black",
                                    borderRadius: "50px",
                                    py: "14px",
                                    px: "24px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    maxWidth: "340px",
                                    fontWeight: 500,
                                    fontSize: { xs: "16px", md: "18px" },
                                    cursor: "pointer",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                {btn.label} {btn.icon}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default Celebrate;
