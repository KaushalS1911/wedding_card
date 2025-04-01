import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../Instance.jsx";

const InvitationGallery = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        axiosInstance.get('/api/template')
            .then((res) => {
                if (res.data && res.data.data) {
                    const formattedTemplates = res.data.data.map(item => ({
                        title: item.name || "Untitled",
                        images: item.colors?.map(color => color.templateImages) || [],
                        colors: item.colors?.map(c => c.hex) || ["#000000"],
                        isPremium: item.isPremium || false,
                        id: item._id,
                    }));
                    setTemplates(formattedTemplates);
                } else {
                    console.log("No templates found.");
                }
            })
            .catch((err) => console.error("API Error:", err));
    }, []);

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                {templates.map((template, index) => (
                    <Grid item xs={6} sm={6} md={4} xl={3} key={index}>
                        <InvitationCard
                            title={template.title}
                            images={template.images}
                            colors={template.colors}
                            isPremium={template.isPremium}
                            id={template.id}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

const InvitationCard = ({ title, images, colors, isPremium, id , onSelect}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();

    return (
        <Box textAlign="start" sx={{ position: "relative" }}>
            {/* Premium Badge */}
            {isPremium && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        backgroundColor: "#8D51E7",
                        color: "#fff",
                        padding: "6px 10px",
                        borderRadius: "50px",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                        fontWeight: "bold",
                        transition: "width 0.3s, padding 0.3s",
                        "&:hover": { paddingX: "12px" }
                    }}
                >
                    <StarIcon sx={{ fontSize: 16, marginRight: "5px" }} /> Premium
                </Box>
            )}

            {/* Image Box */}
            <Box
                onClick={() => navigate(`/template-page/invitation-card/${id}`)}
                sx={{
                    height: {sm:"400px" , xs:"auto"},
                    width: "100%",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid #EBEBEB",
                    "&:hover": { border: "2px solid #000" }
                }}
            >
                <img
                    src={images[selectedIndex] || images[0]} // Display selected image
                    alt={title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                        transition: "opacity 0.3s ease-in-out"
                    }}
                    onClick={() => onSelect(img)}
                />
            </Box>

            {/* Title */}
            <Box sx={{ fontSize: { sm: "16px", xs: "12px" }, mt: "13px", color: "#63696c", fontWeight: "500" }}>
                {title}
            </Box>

            {/* Color Selector Section */}
            <Box sx={{ display: "flex", justifyContent: "start", gap: "5px", mt: "10px" }}>
                {colors.map((color, index) => (
                    <Box
                        key={index}
                        onClick={() => setSelectedIndex(index)} // Change image on color click
                        sx={{
                            p: "1.5px",
                            borderRadius: "50%",
                            border: `1px solid ${selectedIndex === index ? "black" : "transparent"}`,
                            transition: "border 0.2s ease-in-out",
                            cursor: "pointer",
                            "&:hover": { border: "1px solid black" }
                        }}
                    >
                        <Box
                            sx={{
                                p: { xs: 1, sm: 1.3 },
                                borderRadius: "50%",
                                backgroundColor: color,
                                cursor: "pointer"
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default InvitationGallery;
