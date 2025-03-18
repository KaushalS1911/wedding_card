import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
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
    { label: "Housewarming", icon: <SearchIcon sx={{ color: "purple" }} /> },
    { label: "Milestone birthdays", icon: <CakeIcon sx={{ color: "deeppink" }} /> },
    { label: "Birth announcements", icon: <BabyChangingStationIcon sx={{ color: "deepskyblue" }} /> },
    { label: "Anniversary parties", icon: <CakeIcon sx={{ color: "orange" }} /> },
    { label: "Business events", icon: <BusinessIcon sx={{ color: "blue" }} /> },
    { label: "Upload your own", icon: <UploadIcon sx={{ color: "green" }} /> },
];

function Celebrate() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    background: "#F4F4F4",
                    borderRadius: "50px",
                    py: 6,
                    textAlign: "center",
                    mt: {md:15,xs:4},
                }}
            >
                {/* Image Row */}
                <Box sx={{ display: {xs:'none',md:' flex'}, justifyContent: "center", gap: 2, mb: 3, flexWrap: "wrap" }}>
                    {[Img1, Img2, Img3, Img4, Img5, Img6].map((img, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={img}
                            alt="Celebration Card"
                            sx={{
                                width: "140px",
                                height: "190px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                            }}
                        />
                    ))}
                </Box>

                {/* Title */}
                <Typography variant="h2" sx={{ fontSize: { xs: "28px", md: "40px" }, fontWeight: "600", mb: 7,mt:5 }}>
                    <span style={{ color: "#536DFE" }}>More reasons</span> to celebrate
                </Typography>

                {/* Buttons Grid (3x2 Layout) */}
                <Grid container spacing={2} justifyContent="center">
                    {buttons.map((btn, idx) => (
                        <Grid item xs={12} sm={4} key={idx} display="flex" justifyContent="center">
                            <Box
                                variant="contained"
                                sx={{
                                    background: "#FFFFFF",
                                    color: "black",
                                    borderRadius: "50px",
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
                                {btn.label}{btn.icon}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default Celebrate;
