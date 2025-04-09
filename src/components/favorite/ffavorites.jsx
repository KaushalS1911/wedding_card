import React, {useEffect, useState} from "react";
import {Box, Container, Grid, Tooltip, Typography} from "@mui/material";
import axiosInstance from "../../Instance.jsx";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Ffavorites() {
    const [userId, setUserId] = useState(null);
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        axiosInstance.get("/api/auth/me")
            .then(async (response) => {
                const userData = response.data.data;
                setUserId(userData._id);
                if (userData?._id) {
                    await getFavourites(userData._id);
                }
            })
            .catch(error => console.error("Error fetching user data:", error));
    }, []);

    const getFavourites = async (id) => {
        try {
            const response = await axiosInstance.get(`/api/favourite-template/${userId || id}`);
            const data = response.data.data;

            const formattedTemplates = data.map(item => {
                const colors = item.template.colors?.map(c => ({
                    hex: c.hex,
                    image: c.templateImages || ""
                })) || [];
                return {
                    title: item.template.name || "Untitled",
                    colors: colors,
                    selectedColorIndex: 0,
                    id: item.template._id,
                    isFavorite: item.template.isFavorite,
                    isPremium: item.template.isPremium,
                    favId: item._id,
                };
            });
            setTemplates(formattedTemplates);
        } catch (error) {
            console.error("Error fetching favorite templates:", error);
        }
    };

    const handleSubmit = (favId) => {
        axiosInstance.delete(`/api/favourite-template/${favId}`)
            .then(() => getFavourites())
            .catch((error) => console.error("API Error:", error));

    }

    const handleColorSelect = (templateId, colorIndex) => {
        setTemplates(prev =>
            prev.map(t =>
                t.id === templateId
                    ? {...t, selectedColorIndex: colorIndex}
                    : t
            )
        );
    };

    return (
        <Container maxWidth="md" sx={{my: 5}}>
            {templates.length === 0 ? (
                <Box textAlign="center" mt={5}>
                    <Typography variant="h6" color="textSecondary">
                        No favorite templates found.
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={3} justifyContent="center">
                    {templates.map((template) => (
                        <Grid item xs={6} sm={6} md={4} key={template.id}>
                            <Box sx={{
                                height: "auto",
                                width: "100%",
                                borderRadius: "8px",
                                overflow: "hidden",
                                cursor: 'pointer',
                                position: "relative",
                            }}>
                                {template.isPremium && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: {sm: 15, xs: 12},
                                            left: 10,
                                            backgroundColor: "#8D51E7",
                                            color: "#fff",
                                            padding: {sm: "6px 10px", xs: "5px"},
                                            borderRadius: "50px",
                                            display: "flex",
                                            alignItems: "center",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                            transition: "width 0.3s, padding 0.3s",
                                            "&:hover": {paddingX: "12px"},
                                            zIndex: 1
                                        }}
                                    >
                                        <StarIcon sx={{fontSize: 16, marginRight: {sm: "5px", xs: "unset"}}}/>
                                        <Typography sx={{
                                            fontSize: "12px",
                                            display: {sm: "flex", xs: "none"}
                                        }}>Premium</Typography>
                                    </Box>
                                )}

                                <Tooltip title={template.isFavorite ? "Remove from Favorite" : "Save to Favorite"}
                                         arrow>
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 10,
                                            right: 10,
                                            backgroundColor: "#8D51E7",
                                            color: "#fff",
                                            padding: {sm: "10px", xs: "5px"},
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            fontWeight: "bold",
                                            transition: "width 0.3s, padding 0.3s",
                                            zIndex: 1,
                                            cursor: "pointer",
                                        }}
                                        onClick={() => handleSubmit(template?.favId)}
                                    >
                                        {template.isFavorite ? <FavoriteIcon fontSize={"small"}/> :
                                            <FavoriteBorderIcon fontSize={"small"}/>}
                                    </Box>
                                </Tooltip>
                                <Box
                                    sx={{
                                        height: { xs: "250px", sm: "350px" },
                                        width: "100%",
                                        overflow: "hidden",
                                        borderRadius: "14px",
                                        "&:hover": {
                                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                                        },
                                    }}
                                >
                                    <img
                                        src={template.colors[template.selectedColorIndex]?.image || ""}
                                        alt="Template"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "8px",
                                            transition: "transform 0.3s ease-in-out",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                    />
                                </Box>


                                {/* Title */}
                                <Box sx={{
                                    color: "#63696c",
                                    fontWeight: "500",
                                    mb: 1,
                                    fontSize: {xs: "15px", sm: "16px"},
                                    textAlign: {xs: "center", sm: "left"}
                                }}>
                                    {template.title}
                                </Box>

                                {/* Color Selector */}
                                <Box sx={{
                                    display: "flex",
                                    gap: "10px",
                                    justifyContent: {xs: "center", sm: "flex-start"},
                                }}>
                                    {template.colors.map((color, index) => (
                                        <Box
                                            key={index}
                                            onClick={() => handleColorSelect(template.id, index)}
                                            sx={{
                                                p: "1px",
                                                borderRadius: "50%",
                                                border: ".5px solid #000",
                                                transform: template.selectedColorIndex === index ? "scale(1)" : "scale(0.8)",
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
                                                backgroundColor: color.hex,
                                                cursor: "pointer",
                                            }}/>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}

export default Ffavorites;
