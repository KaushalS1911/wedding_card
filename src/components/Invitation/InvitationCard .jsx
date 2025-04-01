import React, { useEffect, useState } from "react";
import { Card, Typography, Button, Box, IconButton, Grid, Chip, Paper, Stack } from "@mui/material";
import { Share, Download, Print, PictureAsPdf, ShoppingCart } from "@mui/icons-material";
import axiosInstance from "../../Instance.jsx";
import { useParams } from "react-router-dom";

const InvitationCard = () => {
    const [color, setColor] = useState("");
    const [image, setImage] = useState("");
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
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
    }, [id]);


    const handleColorChange = (selectedColor) => {
        setColor(selectedColor.color);
        setImage(selectedColor.templateImages);
    };

    if (!data) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box sx={{ p: 4, minHeight: "100vh" }}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 2, textAlign: "center", boxShadow: 3, height: '100%' }}>
                        <Box sx={{ border: "2px dashed gray", p: 5, height: '100%' }}>
                            <Typography component={'img'} src={image} width={'100%'} />
                        </Box>
                    </Card>
                </Grid>

                <Box sx={{ maxWidth: 350, p: 2, pt: 4 }}>
                    <Typography variant="h5" fontWeight={600}>{data.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{data.templateType}</Typography>

                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} my={2}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            Size <strong>{data.size}</strong>
                        </Typography>
                        {data.isPremium === true && (
                            <Chip label="Premium" color="secondary" variant="outlined" sx={{ fontSize: "12px", fontWeight: 500 }} />
                        )}
                        {data.isPremium === false && (
                            <Chip label="free" color="secondary" variant="outlined" sx={{ fontSize: "12px", fontWeight: 500 }} />
                        )}
                    </Stack>

                    <Button variant="contained" fullWidth sx={{
                        mt: 2,
                        boxShadow: 'none',
                        bgcolor: "#1BC47D",
                        borderRadius: '25px',
                        "&:hover": { bgcolor: "#18B071" }
                    }}>
                        Customize
                    </Button>

                    {data.colors?.length > 0 && (
                        <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
                            <Typography variant="body2" fontWeight={500} mb={1}>Color: {color}</Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                {data.colors.map((c, index) => (
                                    <Box key={index}
                                         onClick={() => handleColorChange(c)}
                                         sx={{
                                             bgcolor: c.hex,
                                             width: 24,
                                             height: 24,
                                             borderRadius: "50%",
                                             cursor: "pointer",
                                             border: color === c.color ? "2px solid black" : "2px solid transparent",
                                         }}
                                    />
                                ))}
                            </Box>
                        </Paper>
                    )}

                    <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
                        <Typography variant="body2" fontWeight={600} mb={2}>Spread the joy</Typography>
                        <Stack direction="column" spacing={1}>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><Download fontSize="small" /></IconButton>
                                <Typography variant="body2">Download image</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><PictureAsPdf fontSize="small" /></IconButton>
                                <Typography variant="body2">Download PDF</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><Print fontSize="small" /></IconButton>
                                <Typography variant="body2">Print</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><Share fontSize="small" /></IconButton>
                                <Typography variant="body2">Share</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <IconButton size="small"><ShoppingCart fontSize="small" /></IconButton>
                                <Typography variant="body2">Order prints</Typography>
                            </Stack>
                        </Stack>
                    </Paper>

                    <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
                        <Typography variant="body2" fontWeight={600}>Add RSVP page</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Get your own event webpage to track RSVPs, view responses, and manage your guest list.
                        </Typography>
                    </Paper>
                </Box>
            </Grid>
        </Box>
    );
};

export default InvitationCard;
