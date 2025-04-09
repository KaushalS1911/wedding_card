import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Box, Button, Dialog, DialogContent, DialogTitle, IconButton, TextField, Typography} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import axiosInstance from '../../Instance';
import {useLocation, useNavigate} from 'react-router-dom';
import google from '../../assets/login/google.png'
import facebook from '../../assets/login/facebook.png'

function Register({ openRegister, setOpenRegister, setOpenLoginPage }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get("token");
        if (token) {
            sessionStorage.setItem("token", token);
        }
    }, [location, navigate]);

    const onSubmit = async (data) => {
        try {
            const response = await axiosInstance.post('api/auth/register', data);
            console.log("Registration Successful:", response.data);
            setOpenRegister(false);
            setOpenLoginPage(true);
            reset();
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Registration failed");
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = `${import.meta.env.VITE_PUBLIC_BASE_URL }/api/auth/google`;
    };

    const handleFacebookLogin = () => {
        window.location.href = `${import.meta.env.VITE_PUBLIC_BASE_URL }/api/auth/facebook`;
    };

    const handleClose = () => {
        setOpenRegister(false);
        reset();
        setErrorMessage("");
    };

    return (
        <Box textAlign="center">
            <Dialog open={openRegister} onClose={handleClose}
                sx={{ '& .MuiPaper-root': { borderRadius: '16px', padding: '20px' } }}>
                <Box onClick={() => handleClose()} sx={{
                    backgroundColor: "#F7F7F7",
                    p: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    borderRadius: "50%",
                    position: "absolute",
                    right: "2%",
                    top: "2%",
                }}><CloseIcon /></Box>
                <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Sign up</DialogTitle>
                <DialogContent>
                    <Button fullWidth variant="outlined" sx={{ mb: 1 }} onClick={handleGoogleLogin}>
                        <Typography component={'img'} src={google} alt="Google" width="25px" style={{ marginRight: 8 }} /> Continue with Google
                    </Button>
                    <Button fullWidth variant="outlined" color="primary" sx={{ mb: 1, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={handleFacebookLogin}>
                        <Typography component={'img'} src={facebook} alt="Facebook" width="25px" style={{ marginRight: 8 }} /> Continue with Facebook
                    </Button>
                    <Typography sx={{ textAlign: 'center', mb: 1 }}>- or -</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            fullWidth
                            margin="dense"
                            label="First Name"
                            variant="outlined"
                            {...register("firstName", { required: "First Name is required" })}
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                            sx={{ borderRadius: '24px' }}
                        />
                        <TextField
                            fullWidth
                            margin="dense"
                            label="Last Name"
                            variant="outlined"
                            {...register("lastName", { required: "Last Name is required" })}
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                            sx={{ borderRadius: '24px' }}
                        />
                        <TextField
                            fullWidth
                            margin="dense"
                            label="Email"
                            variant="outlined"
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" }
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            sx={{ borderRadius: '24px' }}
                        />
                        <TextField
                            fullWidth
                            margin="dense"
                            label="Contact Number"
                            variant="outlined"
                            {...register("contact", {
                                required: "Contact Number is required",
                                pattern: { value: /^[0-9]{10}$/, message: "Invalid contact number" }
                            })}
                            error={!!errors.contactNumber}
                            helperText={errors.contactNumber?.message}
                            sx={{ borderRadius: '24px' }}
                        />
                        <Box position="relative">
                            <TextField
                                fullWidth
                                margin="dense"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "At least 6 characters" }
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message || "At least 6 characters"}
                                sx={{ borderRadius: '24px' }}
                            />
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                sx={{ position: 'absolute', right: 10, top: '18%' }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </Box>
                        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: '#14C76C',
                                color: 'white',
                                borderRadius: '24px',
                                padding: '12px',
                                fontSize: '16px',
                                marginTop: '16px',
                                textTransform: 'none'
                            }}
                        >
                            Sign up
                        </Button>
                    </form>
                    <Typography variant="body2" sx={{ marginTop: '16px', textAlign: 'center', color: '#63696C' }}>
                        Already a member? <a onClick={() => {
                            setOpenRegister(false)
                            setOpenLoginPage(true)
                        }} style={{
                            color: '#14C76C',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            cursor: "pointer"
                        }}>Log in</a>
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block', textAlign: "center", marginTop: '10px', color: '#63696C' }}>
                        By signing up, I accept Greetings Island’s <a href="#"
                            style={{ color: 'black', fontWeight: 'bold' }}>Terms
                            of Use</a> & <a href="#" style={{ color: 'black', fontWeight: 'bold' }}>Privacy Policy</a>
                    </Typography>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default Register;