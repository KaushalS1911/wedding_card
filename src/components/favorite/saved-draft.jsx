import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Instance.jsx';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function SavedDraft() {
    const navigate = useNavigate();
    const [drafts, setDrafts] = useState([]);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [selectedDraftId, setSelectedDraftId] = useState(null);

    useEffect(() => {
        const fetchDrafts = async () => {
            try {
                const { data } = await axiosInstance.get('/api/user-template');
                setDrafts(Array.isArray(data.data) ? data.data : []);
            } catch (error) {
                console.error('Error fetching drafts:', error);
            }
        };

        fetchDrafts();
    }, []);

    const handleDelete = async () => {
        try {
            await axiosInstance.delete(`/api/user-template/${selectedDraftId}`);
            setDrafts(drafts.filter((d) => d._id !== selectedDraftId));
            setOpenConfirm(false);
        } catch (error) {
            console.error('Failed to delete draft:', error);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ my: 4 }}>
            {drafts.length === 0 ? (
                <Box textAlign="center" my={5}>
                    <Typography variant="h6" color="textSecondary">
                        No saved templates found.
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={4}>
                    {drafts.map((draft) => (
                        <Grid item xs={12} sm={6} md={4} key={draft._id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: 3,
                                    boxShadow: 3,
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#f5f5f5',
                                        height: 150,
                                        overflow: 'hidden',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={draft.edited_object?.previewImage || '/placeholder.png'}
                                        alt="Preview"
                                        sx={{
                                            width: '80%',
                                            height: 'auto',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Box>

                                <CardContent>
                                    <Typography variant="h6" fontWeight={600} gutterBottom>
                                        {draft.template_id?.name || 'Untitled Template'}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Theme: {draft.template_id?.templateTheme || 'N/A'}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Orientation: {draft.template_id?.orientation || 'N/A'}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mt={1}>
                                        By: {draft.user_id?.firstName} {draft.user_id?.lastName}
                                    </Typography>
                                </CardContent>

                                <CardActions sx={{ px: 2, pb: 2 }}>
                                    <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            onClick={() => navigate(`/editor/${draft._id}`)}
                                        >
                                            <EditIcon />
                                        </Button>
                                        <Button
                                            size="small"
                                            color="error"
                                            variant="outlined"
                                            onClick={() => {
                                                setSelectedDraftId(draft._id);
                                                setOpenConfirm(true);
                                            }}
                                        >
                                            <DeleteIcon />
                                        </Button>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* Confirm Delete Dialog */}
            <Dialog
                open={openConfirm}
                onClose={() => setOpenConfirm(false)}
            >
                <DialogTitle>Delete Draft</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this draft? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenConfirm(false)}>Cancel</Button>
                    <Button onClick={handleDelete} color="error" variant="contained">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default SavedDraft;
