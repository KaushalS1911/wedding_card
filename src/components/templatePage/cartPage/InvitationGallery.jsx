import React, {useEffect, useState} from "react";
import {Box, Container, Grid, CircularProgress, Skeleton, Typography, Tooltip, Button} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import axiosInstance from "../../../Instance.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const InvitationGallery = () => {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const fetchTemplates = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get("/api/template");
            if (response.data?.data) {
                const formattedTemplates = response.data.data.map(item => ({
                    title: item.name || "Untitled",
                    images: item.colors?.map(color => color.templateImages) || [],
                    colors: item.colors?.map(c => c.hex) || ["#000000"],
                    isPremium: item.isPremium || false,
                    id: item._id,
                    isFavorite: item.isFavorite || false,
                }));
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

    const url = searchParams.search ? `/api/template${searchParams.search}` : '/api/template';
    useEffect(() => {
        fetchTemplates(url);
    }, [searchParams]);

    if (loading) {
        return (
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {[...Array(8)].map((_, index) => (
                        <Grid item xs={6} sm={6} md={4} xl={3} key={index}>
                            <Box textAlign="start" sx={{position: "relative"}}>
                                <Skeleton
                                    variant="rectangular"
                                    width="100%"
                                    height={400}
                                    sx={{borderRadius: "8px"}}
                                />
                                <Box sx={{mt: 1.5}}>
                                    <Skeleton variant="text" width="60%" height={24}/>
                                </Box>
                                <Box sx={{display: "flex", gap: 1, mt: 1.5}}>
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
            <Container maxWidth="xl" sx={{textAlign: 'center', py: 4}}>
                <Typography color="error">{error}</Typography>
                <Button
                    variant="contained"
                    sx={{mt: 2}}
                    onClick={() => window.location.reload()}
                >
                    Retry
                </Button>
            </Container>
        );
    }

    if (!templates || templates.length === 0) {
        return (
            <Container maxWidth="xl" sx={{textAlign: 'center', py: 4}}>
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
                            isFavorite={template.isFavorite}
                            url={url}
                            fetchTemplates={fetchTemplates}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

const InvitationCard = ({title, images, colors, isPremium, isFavorite, id, url, fetchTemplates}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [favTemplate, setFavTemplate] = useState([]);


    useEffect(() => {
        axiosInstance.get("/api/auth/me")
            .then(async (response) => {
                const userData = response.data.data;
                setUserId(userData?._id);
                if (userData?._id) {
                    await favourite(userData?._id)
                }
            })
            .catch(error => console.error("Error fetching user data:", error));

    }, [])


    function favourite(id) {
        axiosInstance.get(`/api/favourite-template/${userId || id}`)
            .then((response) => {
                const templateId = response.data.data
                setFavTemplate(templateId);
            })
            .catch((error) => console.log(error));
    }

    const favTemp = favTemplate.find((item) => (item?.template?._id === id))

    const handleSubmit = () => {
        if (isFavorite) {
            axiosInstance.delete(`/api/favourite-template/${favTemp?._id}`)
                .then(() => fetchTemplates(url))
                .catch((error) => console.error("API Error:", error));
        } else {
            axiosInstance.post('/api/favourite-template', {user: userId, template: id})
                .then(() =>
                    fetchTemplates(url)
                )
                .catch((error) => console.error("API Error:", error));
        }
    }

    return (
        <Box textAlign="start" sx={{position: "relative" , padding:"0px"}}>
            {isPremium && (
                <Box
                    sx={{
                        position: "absolute",
                        top: {sm:15 , xs:12},
                        left: 10,
                        backgroundColor: "#8D51E7",
                        color: "#fff",
                        padding: {sm:"6px 10px" , xs:"5px"},
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
                    <StarIcon sx={{fontSize: 16, marginRight: {sm:"5px" , xs:"unset"}}}/> <Typography sx={{fontSize:"12px" , display:{sm:"flex" , xs:"none"}}}>Premium</Typography>
                </Box>
            )}

            <Tooltip title={isFavorite ? "Remove from Favorite" : "Save to Favorite"} arrow>
                <Box
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        backgroundColor: "#8D51E7",
                        color: "#fff",
                        padding: {sm:"10px" , xs:"5px"},
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                        transition: "width 0.3s, padding 0.3s",
                        zIndex: 1,
                        cursor: "pointer",
                    }}
                    onClick={handleSubmit}
                >
                    {isFavorite ? <FavoriteIcon fontSize={"small"}/> :
                        <FavoriteBorderIcon fontSize={"small"}/>}
                </Box>
            </Tooltip>

            <Box
                onClick={() => navigate(`/template-page/invitation-card/${id}`)}
                sx={{
                    height: { sm: "400px", xs: "auto" },
                    width: "100%",
                    maxWidth: "380px",
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "1px solid #EBEBEB",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: "auto",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                    },
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

                <Box sx={{
                    height: {sm: "400px", xs: "auto"},
                    width: "100%",
                    maxWidth: "380px",
                    transition: ".3s",
                    "&:hover": {transform: "Scale(1.1)"},
                }}>
                    <img
                        src={images[selectedIndex] || images[0]}
                        alt={title}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "12px",
                            transition: "opacity 0.3s ease-in-out, transform 0.2s ease-in-out",
                            opacity: imageLoading ? 0 : 1
                        }}
                        onLoad={() => setImageLoading(false)}
                        onError={() => setImageLoading(false)}
                    />
                </Box>
            </Box>

            <Typography
                sx={{
                    fontSize: {sm: "16px", xs: "12px"},
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

            <Box sx={{display: "flex", justifyContent: "start", gap: "8px", mt: "8px"}}>
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
                            border: ".5px solid #000",
                            transition: "all 0.2s ease-in-out",
                            transform: selectedIndex === index ? "scale(1)" : "scale(0.8)",
                            cursor: "pointer",
                            "&:hover": {
                                border: "1.5px solid black",
                                transform: "scale(1)",
                            },
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
