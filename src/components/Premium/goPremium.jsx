import React, {useContext, useState} from "react";
import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogContent,
    FormControlLabel,
    IconButton,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from "@mui/icons-material/Close";
import {LoginContext} from "../../App.jsx";
import axiosInstance from "../../Instance.jsx";

function GoPremium({premium, setPremium}) {
    const [selectedValue, setSelectedValue] = useState('yearly');
    const {setOpenLoginPage} = useContext(LoginContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleClose = () => {
        setPremium(false);
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleContinue = async () => {
        setLoading(true);
        setError(null);

        const storedUser = sessionStorage.getItem('user');

        if (!storedUser) {
            setLoading(false);
            setOpenLoginPage(true);
            return;
        }

        const userData = JSON.parse(storedUser);
        const userEmail = userData?.email;

        if (!userEmail) {
            setLoading(false);
            setError("User email not found. Please log in again.");
            return;
        }

        try {
            const response = await axiosInstance.post('/api/payment/create-checkout-session', {
                plan: selectedValue,
                email: userEmail,
            });

            if (response.data?.url) {
                window.location.href = response.data.url;
            } else {
                setError("Stripe checkout URL not received.");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={premium} onClose={handleClose} maxWidth="sm" fullWidth
                sx={{'& .MuiPaper-root': {borderRadius: 8}}}>
            <DialogContent sx={{p: 3, position: 'relative'}}>
                <IconButton onClick={handleClose} sx={{position: 'absolute', top: 10, right: 10}}>
                    <CloseIcon/>
                </IconButton>
                <Box>
                    <Typography variant="h6" fontWeight={600} mb={2}>Go premium</Typography>
                    <Box mb={2}>
                        {[
                            "Unlock over 5000 designs",
                            "Ad-free",
                            "No watermarks"
                        ].map((text, index) => (
                            <Box key={index} display="flex" alignItems="center" mb={1}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     style={{marginRight: 8}}>
                                    <path
                                        stroke="#8D51E7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M16.047 20.64c2.83 0 4.592-1.998 4.592-4.825v-7.63c0-2.827-1.761-4.825-4.591-4.825H7.95c-2.822 0-4.59 1.998-4.59 4.825v7.63c0 2.827 1.76 4.825 4.59 4.825h4.77M8.672 12l2.218 2.217 4.433-4.433"
                                    />
                                </svg>
                                <Typography>{text}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                        <Typography fontWeight={600} mr={1}>Excellent</Typography>
                        <Typography>4.8</Typography>
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} sx={{color: '#00b67a', mx: 0.2}}/>
                        ))}
                        <Typography>/5</Typography>
                    </Box>
                    <Typography variant="body2" mb={2} color="gray">
                        Based on <strong>844 reviews</strong> <span style={{color: '#00b67a'}}>★ Trustpilot</span>
                    </Typography>
                </Box>

                <RadioGroup value={selectedValue} onChange={handleChange}>
                    <Box
                        sx={{
                            border: selectedValue === 'yearly' ? '2px solid #a855f7' : '1px solid #ccc',
                            borderRadius: 2,
                            p: 2,
                            mb: 2,
                            position: 'relative',
                        }}
                    >
                        <FormControlLabel
                            value="yearly"
                            control={<Radio sx={{color: '#a855f7', '&.Mui-checked': {color: '#a855f7'}}}/>}
                            label={
                                <Box>
                                    <Typography sx={{fontWeight: 600}}>Yearly</Typography>
                                    <Typography fontWeight={600} color="#9333ea"
                                                sx={{display: "flex", alignItems: "center"}}>
                                        ₹113.33/month <Typography sx={{
                                        color: '#0CB980',
                                        fontWeight: 500,
                                        fontSize: "14px",
                                        border: "2px solid #0CB980",
                                        borderRadius: "10px",
                                        ml: 1,
                                        p: 0.5
                                    }}>Save 35%</Typography>
                                    </Typography>
                                    <Typography variant="body2">₹1359.99/year</Typography>
                                </Box>
                            }
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: -10,
                                right: 10,
                                backgroundColor: '#a855f7',
                                color: 'white',
                                px: 1,
                                borderRadius: 1,
                                fontSize: 12,
                                fontWeight: 500,
                            }}
                        >
                            Most popular
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            border: selectedValue === 'monthly' ? '2px solid #a855f7' : '1px solid #ccc',
                            borderRadius: 2,
                            p: 2,
                            mb: 2,
                        }}
                    >
                        <FormControlLabel
                            value="monthly"
                            control={<Radio sx={{color: '#a855f7', '&.Mui-checked': {color: '#a855f7'}}}/>}
                            label={
                                <Box>
                                    <Typography sx={{fontWeight: 600}}>Monthly</Typography>
                                    <Typography>₹174.99/month</Typography>
                                </Box>
                            }
                        />
                    </Box>
                </RadioGroup>

                <Button
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    onClick={handleContinue}
                    sx={{backgroundColor: '#7F49D0', borderRadius: 2, p: 1}}
                >
                    {loading ? <CircularProgress size={24} color="inherit"/> : "Continue"}
                </Button>

                {error && (
                    <Typography variant="body2" color="error" align="center" mt={1}>
                        {error}
                    </Typography>
                )}

                <Typography variant="body2" align="center" mt={2} sx={{color: "#20282D"}}>
                    Cancel anytime
                </Typography>
                <Typography variant="body2" align="center" mt={1} sx={{color: '#63696C'}}>
                    Already a premium member?{" "}
                    <span style={{color: '#22c55e', cursor: 'pointer'}} onClick={() => {
                        setOpenLoginPage(true);
                        setPremium(false);
                    }}>Log in</span>
                </Typography>
            </DialogContent>
        </Dialog>
    );
}

export default GoPremium;
