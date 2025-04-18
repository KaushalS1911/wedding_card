import React, {useEffect, useState} from "react";
import {
    Card, Typography, Button, Box, IconButton, Grid, Chip,
    Paper, Stack, Tooltip, CircularProgress, Container
} from "@mui/material";
import {Share, Download, Print, PictureAsPdf, ShoppingCart} from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useNavigate, useParams} from "react-router-dom";
import axiosInstance from "../../Instance.jsx";
import Login from "../login/login.jsx";
import {useEditorData} from "../../pages/editor/EditorDataContext.jsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const InvitationCard = () => {
    const [color, setColor] = useState("");
    const [image, setImage] = useState("");
    const [data, setData] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();
    const [favTemplate, setFavTemplate] = useState([]);
    const [user, setUser] = useState(null);
    const [openLoginPage, setOpenLoginPage] = useState(false);
    const {setTemplatetIndex} = useEditorData();

    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        favourite();
    }, [id, user?._id]);

    useEffect(() => {
        getTemplate();
    }, [id]);

    const getTemplate = () => {
        if (!id) return;

        axiosInstance.get(`/api/template/${id}`)
            .then((response) => {
                const templateData = response.data.data;
                setData(templateData);

                if (templateData?.colors?.length > 0) {
                    setColor(templateData.colors[0]?.color || "");
                    setImage(templateData.colors[0]?.templateImages || "");
                }
            })
            .catch((error) => console.error("API Error:", error));
    };

    const favourite = () => {
        axiosInstance.get(`/api/favourite-template/${user?._id || id}`)
            .then((response) => {
                const templateId = response.data.data;
                setFavTemplate(templateId);
            })
            .catch((error) => console.log(error));
    };

    const favTemp = favTemplate.find((item) => (item?.template?._id === id));

    const handleSubmit = () => {
        const token = sessionStorage.getItem("token");

        if (!token) {
            setOpenLoginPage(true);
            return;
        }

        if (data?.templateLiked.includes(user._id)) {
            axiosInstance.delete(`/api/favourite-template/${favTemp?._id}`)
                .then(() => {
                    getTemplate();
                    favourite();
                })
                .catch((error) => console.error("API Error:", error));
        } else {
            axiosInstance.post('/api/favourite-template', {user: user._id, template: id})
                .then(() => {
                    getTemplate();
                    favourite();
                })
                .catch((error) => console.error("API Error:", error));
        }
    };

    const handleColorChange = (selectedColor, index) => {
        setColor(selectedColor.color);
        setImage(selectedColor.templateImages);
        setTemplatetIndex(index)
    };

    const handleCustomize = () => {
        const token = sessionStorage.getItem("token");

        if (!token) {
            setOpenLoginPage(true);
            return;
        }

        navigate(`/editor/${id}`);
    };

    if (!data) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <CircularProgress sx={{color: "#1BC47D"}}/>
            </Box>
        );
    }

    return (
        <Box sx={{p: 4}}>
            <Button
                startIcon={<ArrowBackIcon/>}
                onClick={() => navigate(-1)}
                variant="outlined"
                sx={{mb: 2, borderColor: "#1BC47D", color: "#1BC47D"}}
            >
                Back
            </Button>

            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Card sx={{p: 2, textAlign: "center", boxShadow: 3, height: '100%'}}>
                        <Box sx={{p: 5, height: '100%', position: 'relative'}}>
                            <Typography component={'img'} src={image} width={'100%'}/>
                        </Box>
                    </Card>
                </Grid>

                <Box sx={{maxWidth: 350, p: 2, pt: 4}}>
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Box>
                            <Typography variant="h5" fontWeight={600}>{data.name}</Typography>
                            <Typography variant="body2" color="textSecondary">{data.templateType}</Typography>
                        </Box>
                        <Tooltip
                            title={data?.templateLiked.includes(user?._id) ? "Remove from Favorite" : "Save to Favorite"}
                            arrow>
                            <Box
                                onClick={handleSubmit}
                                sx={{
                                    backgroundColor: "#8D51E7",
                                    color: "#fff",
                                    padding: "10px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    cursor: "pointer"
                                }}
                            >
                                {data?.templateLiked.includes(user?._id) ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                            </Box>
                        </Tooltip>
                    </Box>

                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} my={2}>
                        <Typography variant="body2" sx={{fontWeight: 500}}>
                            Size <strong>{data.size}</strong>
                        </Typography>
                        {data.isPremium ? (
                            <Chip label="Premium" color="secondary" variant="outlined"
                                  sx={{fontSize: "12px", fontWeight: 500}}/>
                        ) : (
                            <Chip label="Free" color="secondary" variant="outlined"
                                  sx={{fontSize: "12px", fontWeight: 500}}/>
                        )}
                    </Stack>

                    <Button
                        variant="contained"
                        onClick={handleCustomize}
                        fullWidth
                        sx={{
                            mt: 2,
                            boxShadow: 'none',
                            bgcolor: "#1BC47D",
                            borderRadius: '25px',
                            "&:hover": {bgcolor: "#18B071"}
                        }}
                    >
                        Customize
                    </Button>

                    {data.colors?.length > 0 && (
                        <Paper variant="outlined" sx={{p: 2, mt: 2}}>
                            <Typography variant="body2" fontWeight={500} mb={1}>Color: {color}</Typography>
                            <Box sx={{display: 'flex', gap: 1}}>
                                {data.colors.map((c, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => handleColorChange(c, index)}
                                        sx={{
                                            bgcolor: c.hex,
                                            width: 24,
                                            height: 24,
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                            boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                                            border: color === c.color ? "2px solid black" : "2px solid transparent",
                                        }}
                                    />
                                ))}
                            </Box>
                        </Paper>
                    )}

                    <Paper variant="outlined" sx={{p: 2, mt: 2}}>
                        <Typography variant="body2" fontWeight={600} mb={2}>Spread the joy</Typography>
                        <Stack direction="column" spacing={1}>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><Download fontSize="small"/></IconButton>
                                <Typography variant="body2">Download image</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><PictureAsPdf fontSize="small"/></IconButton>
                                <Typography variant="body2">Download PDF</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><Print fontSize="small"/></IconButton>
                                <Typography variant="body2">Print</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><Share fontSize="small"/></IconButton>
                                <Typography variant="body2">Share</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><ShoppingCart fontSize="small"/></IconButton>
                                <Typography variant="body2">Order prints</Typography>
                            </Stack>
                        </Stack>
                    </Paper>

                    <Paper variant="outlined" sx={{p: 2, mt: 2}}>
                        <Typography variant="body2" fontWeight={600}>Add RSVP page</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Get your own event webpage to track RSVPs, view responses, and manage your guest list.
                        </Typography>
                    </Paper>
                </Box>
            </Grid>

            {/* 👇 Login Dialog Included Here */}
            <Login openLoginPage={openLoginPage} setOpenLoginPage={setOpenLoginPage}/>
        </Box>
    );
};

export default InvitationCard;
