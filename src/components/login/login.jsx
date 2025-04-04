import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    IconButton,
    Typography
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Ragister from "./ragister.jsx";
import CloseIcon from "@mui/icons-material/Close";
import axiosInstance from '../../Instance.jsx';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/login/google.png';
import facebook from '../../assets/login/facebook.png';

function Login({ openLoginPage, setOpenLoginPage }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    // Fetch Google OAuth session data
    useEffect(() => {
        axiosInstance.get("/api/auth/google/success", { withCredentials: true })
            .then(response => {
                setUser(response.data.user);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate("/");
            })
            .catch(() => {
                navigate("/"); // Redirect to login if not authenticated
            });
    }, []);

    // Handle Google OAuth Token from URL
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get("token");
        if (token) {
            localStorage.setItem("token", token);
        }
    }, [location, navigate]);

    const onSubmit = async (data) => {
        try {
            const response = await axiosInstance.post('api/auth/login', data);

            if (response.data?.token) {
                localStorage.setItem('token', response.data.token);
                console.log("Login Successful:", response.data);
                navigate("/");
            } else {
                console.error("No token received!");
            }

            setOpenLoginPage(false);
            reset();
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Login failed");
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = "https://wedding-card-be.onrender.com/api/auth/google";
    };

    const handleFacebookLogin = () => {
        window.location.href = "https://wedding-card-be.onrender.com/api/auth/facebook";
    };

    const handleClose = () => {
        setOpenLoginPage(false);
        reset();
        setErrorMessage("");
    };

    return (
        <Box textAlign="center">
            <Dialog open={openLoginPage} onClose={handleClose}
                sx={{ '& .MuiPaper-root': { borderRadius: '16px', padding: '20px' } }}>
                <Box onClick={handleClose} sx={{
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
                }}>
                    <CloseIcon />
                </Box>
                <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Log in</DialogTitle>
                <DialogContent>
                    <Button fullWidth variant="outlined" sx={{ mb: 1 }} onClick={handleGoogleLogin}>
                        <Typography component={'img'} src={google} alt="Google" width="25px" style={{ marginRight: 8 }} /> Continue with Google
                    </Button>
                    <Button fullWidth variant="outlined" color="primary" sx={{ mb: 1 }} onClick={handleFacebookLogin}>
                        <Typography component={'img'} src={facebook} alt="Facebook" width="25px" style={{ marginRight: 8 }} /> Continue with Facebook
                    </Button>
                    <Typography sx={{ textAlign: 'center', mb: 1 }}>- or -</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            />
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                sx={{ position: 'absolute', right: 10, top: '18%' }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </Box>
                        {errorMessage && <Typography color="error" sx={{ mt: 1 }}>{errorMessage}</Typography>}
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
                            Log in
                        </Button>
                    </form>
                    <Typography variant="body2" sx={{ marginTop: '16px', textAlign: 'center', color: '#63696C' }}>
                        Not a member? <a onClick={() => {
                            setOpenLoginPage(false);
                            setOpenRegister(true);
                        }}
                            style={{
                                color: '#14C76C',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                cursor: "pointer"
                            }}>Sign up</a>
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block', textAlign: "center", marginTop: '10px', color: '#63696C' }}>
                        By signing up, I accept Greetings Island’s <a href="#"
                            style={{ color: 'black', fontWeight: 'bold' }}>Terms
                            of Use</a> & <a href="#" style={{ color: 'black', fontWeight: 'bold' }}>Privacy Policy</a>
                    </Typography>
                </DialogContent>
            </Dialog>
            <Ragister openRegister={openRegister} setOpenRegister={setOpenRegister} setOpenLoginPage={setOpenLoginPage} />
        </Box>
    );
}

export default Login;
