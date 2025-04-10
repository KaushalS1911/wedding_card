import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Grid,
    CircularProgress,
    Skeleton,
    Typography,
    Button
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../Instance";

const InvitationGallery = () => {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTemplates = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get("/api/template");
            if (response.data?.data) {
                const formattedTemplates = response.data.data.map(item => {
                    const textObject = item.initialDetail?.pages?.[0]?.children?.find(el => el.type === 'text');
                    return {
                        title: item.name || "Untitled",
                        desc: item.desc || "",
                        tags: item.tags || [],
                        size: item.size || "",
                        images: item.colors?.map(color => color.templateImages) || [],
                        colors: item.colors?.map(c => c.hex) || ["#000000"],
                        isPremium: item.isPremium || false,
                        id: item._id,
                        text: textObject?.text || "", // ⬅️ Extracted text
                    };
                });
                setTemplates(formattedTemplates);
            } else {
                setTemplates([]);
            }
        } catch (err) {
            console.error("API Error:", err);
            setError("Failed to load templates. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTemplates();
    }, []);

    if (loading) {
        return (
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {[...Array(8)].map((_, index) => (
                        <Grid item xs={6} sm={6} md={4} xl={3} key={index}>
                            <Box textAlign="start" sx={{ position: "relative" }}>
                                <Skeleton
                                    variant="rectangular"
                                    width="100%"
                                    height={400}
                                    sx={{ borderRadius: "8px" }}
                                />
                                <Box sx={{ mt: 1.5 }}>
                                    <Skeleton variant="text" width="60%" height={24} />
                                </Box>
                                <Box sx={{ display: "flex", gap: 1, mt: 1.5 }}>
                                    {[...Array(3)].map((_, i) => (
                                        <Skeleton
                                            key={i}
                                            variant="circular"
                                            width={32}
                                            height={32}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }

    if (error) {
        return (
            <Container maxWidth="xl" sx={{ textAlign: 'center', py: 4 }}>
                <Typography color="error">{error}</Typography>
                <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => window.location.reload()}
                >
                    Retry
                </Button>
            </Container>
        );
    }

    if (!templates || templates.length === 0) {
        return (
            <Container maxWidth="xl" sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6">No templates found</Typography>
            </Container>
        );
    }

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
                            text={template.text} // ⬅️ Passing text prop
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

const InvitationCard = ({ title, images, colors, isPremium, id, text }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);
    const navigate = useNavigate();

    return (
        <Box textAlign="start" sx={{ position: "relative" }}>
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
                        "&:hover": { paddingX: "12px" },
                        zIndex: 1
                    }}
                >
                    <StarIcon sx={{ fontSize: 16, marginRight: "5px" }} /> Premium
                </Box>
            )}

            <Box
                onClick={() => navigate(`/template-page/invitation-card/${id}`)}
                sx={{
                    height: { sm: "400px", xs: "auto" },
                    width: "100%",
                    maxWidth: "380px",
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "1px solid #EBEBEB",
                    "&:hover": { border: "2px solid #000" },
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: "auto",
                    cursor: "pointer",
                }}
            >
                {imageLoading && (
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="100%"
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            borderRadius: "12px",
                        }}
                    />
                )}

                <img
                    src={images[selectedIndex] || images[0]}
                    alt={title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "12px",
                        transition: "opacity 0.3s ease-in-out, transform 0.2s ease-in-out",
                        opacity: imageLoading ? 0 : 1,
                    }}
                    onLoad={() => setImageLoading(false)}
                    onError={() => setImageLoading(false)}
                />
            </Box>

            <Typography
                sx={{
                    fontSize: { sm: "16px", xs: "12px" },
                    mt: "10px",
                    color: "#63696c",
                    fontWeight: "500",
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}
            >
                {title}
            </Typography>

            {text && (
                <Typography
                    sx={{
                        fontSize: "14px",
                        mt: 0.5,
                        color: "#444",
                        fontWeight: "400",
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontStyle: 'italic'
                    }}
                >
                    “{text}”
                </Typography>
            )}

            <Box sx={{ display: "flex", justifyContent: "start", gap: "8px", mt: "8px" }}>
                {colors.map((color, index) => (
                    <Box
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex(index);
                        }}
                        sx={{
                            width: "32px",
                            height: "32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            border: `1px solid ${selectedIndex === index ? "black" : "transparent"}`,
                            transition: "border 0.2s ease-in-out",
                            cursor: "pointer",
                            "&:hover": { border: "1.5px solid black" },
                        }}
                    >
                        <Box
                            sx={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                backgroundColor: color,
                                cursor: "pointer",
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default InvitationGallery;
