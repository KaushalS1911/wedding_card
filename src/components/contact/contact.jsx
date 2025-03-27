import React from 'react';
import img from '../../assets/contact/banner-desktop.avif';
import { Controller, useForm } from "react-hook-form";
import { Autocomplete, Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Instagram } from "@mui/icons-material";
import CallMadeIcon from '@mui/icons-material/CallMade';
import axios from "axios";
import axiosInstance from '../../Instance';

function Contact() {
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        const payload = {
            topic: data.topic,
            name: data.name,
            email: data.email,
            description: data.description,
        };

        axiosInstance.post("/api/inquiry", payload)
            .then(response => {
                console.log("Inquiry submitted successfully:", response.data);
                reset();
            })
            .catch(error => {
                console.error("Error submitting inquiry:", error);
            });
    };

    const options = [
        { label: "I need help with an invitation/card", value: "invitation" },
        { label: "I need help with my account", value: "subscription" },
        { label: "I need help with my premium subscription", value: "pricing" },
        { label: "I have a business inquiry", value: "inquiry" },
        { label: "Something else...", value: "Something" },
    ];

    return (
        <Container maxWidth={'xxl'}>
            <Box sx={{
                display: 'flex',
                justifyContent: { lg: 'space-between', md: "center" },
                alignItems: 'center',
                backgroundColor: '#E8F9F2',
                padding: "10px 24px 0 32px",
                borderRadius: "24px",
                flexWrap: 'wrap'
            }}>
                <Box>
                    <Typography variant={'h1'}
                        sx={{
                            fontSize: { md: "42px", xs: "32px" },
                            width: { xl: "476px", lg: "430px", xs: "unset" },
                            fontWeight: "500",
                            color: "#20282D",
                            marginBottom: "16px",
                            textWrap: "wrap",
                            textAlign: { xs: "center", lg: "unset" }
                        }}>Chat with our team!</Typography>
                    <Typography sx={{
                        width: { xl: "476px", lg: "430px", xs: "unset" },
                        fontSize: { xs: '12px', sm: '15px' },
                        textAlign: { xs: "center", lg: "unset" },
                        color: "#20282D",
                        letterSpacing: "0",
                        textWrap: "wrap",
                    }}>If you need help with a design, have a question about your account,
                        or want to talk business, you're in the right place.</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <img src={img} alt="contact" style={{ width: '100%', objectFit: 'contain' }} />
                </Box>
            </Box>

            <Box sx={{ display: { md: "flex", xs: "unset" }, justifyContent: "center", p: 4 }}>
                <Box width={500} sx={{ width: { md: "500px", xs: "100%" } }} p={3} borderRadius={8} bgcolor="#F4F4F4">
                    <Typography variant="h6" mb={2}>
                        What can we help with?
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="topic"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Autocomplete
                                    {...field}
                                    options={options}
                                    getOptionLabel={(option) => option.label}
                                    onChange={(_, value) => field.onChange(value ? value.value : "")}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Choose a topic"
                                            variant="outlined"
                                            size={"small"}
                                            fullWidth
                                            error={!!errors.topic}
                                            helperText={errors.topic ? "This field is required" : ""}
                                            sx={{ backgroundColor: "#FFF" }}
                                        />
                                    )}
                                />
                            )}
                        />
                        <Typography sx={{ marginTop: "18px" }}>
                            <Typography sx={{ width: "160px" }}>Name *</Typography>
                            <TextField
                                fullWidth
                                label="Name "
                                size={"small"}
                                margin="normal"
                                {...register("name", { required: true })}
                                error={!!errors.name}
                                helperText={errors.name ? "Name is required" : ""}
                                sx={{ backgroundColor: "#FFF", m: 0 }}
                            />
                        </Typography>

                        <Typography sx={{ marginTop: "18px" }}>
                            <Typography sx={{ width: "160px" }}>Email *</Typography>
                            <TextField
                                fullWidth
                                label="Email"
                                margin="normal"
                                size={"small"}
                                {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                error={!!errors.email}
                                helperText={errors.email ? "Valid email is required" : ""}
                                sx={{ backgroundColor: "#FFF", m: 0 }}
                            />
                        </Typography>

                        <Typography sx={{ marginTop: "18px" }}>
                            <Typography sx={{ width: "160px" }}>Tell us more *</Typography>
                            <TextField
                                fullWidth
                                label="Description"
                                margin="normal"
                                multiline
                                rows={4}
                                {...register("description", { required: true })}
                                error={!!errors.description}
                                helperText={errors.description ? "Description is required" : ""}
                                sx={{ backgroundColor: "#FFF", m: 0 }}
                            />
                        </Typography>

                        <Button type="submit" fullWidth variant="contained"
                            sx={{ mt: 2, background: "#1BC47D", borderRadius: "20px" }}>
                            Submit
                        </Button>
                    </form>
                </Box>
                <Box sx={{ maxWidth: 400, p: 2, ml: { md: "100px" }, mt: { xs: "50px", md: "unset" } }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Need answers fast?
                    </Typography>
                    {["Manage/cancel my subscription", "Cost & pricing policy", "Event & guest management", "Premium subscription benefits"].map((text, index) => (
                        <Box key={index}
                            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                            <Link href="#" style={{ color: "#000", textDecoration: "none", fontSize: 14 }}>
                                {text}
                            </Link>
                            <Typography sx={{ ml: 2, color: "#20282D" }}><CallMadeIcon fontSize={"small"} /></Typography>
                        </Box>
                    ))}

                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3, mb: 1 }}>
                        Email us
                    </Typography>

                    <Typography sx={{ fontSize: 14, color: "#333" }}>For help & questions</Typography>
                    <Link href="mailto:support@greetingsisland.com"
                        style={{ color: "#1BC47D", fontWeight: "bold", textDecoration: "none", fontSize: 14 }}>
                        support@greetingsisland.com
                    </Link>

                    <Typography sx={{ fontSize: 14, color: "#333", mt: 2 }}>For business inquiries</Typography>
                    <Link href="mailto:bizdev@greetingsisland.com"
                        style={{ color: "#1BC47D", fontWeight: "bold", textDecoration: "none", fontSize: 14 }}>
                        bizdev@greetingsisland.com
                    </Link>

                    <Typography sx={{ fontSize: 14, color: "#333", mt: 3 }}>Message us on social</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                        <Box sx={{ backgroundColor: "#1BC47D", borderRadius: "50%", p: "12px 12px 5px 12px",cursor:'pointer' }}>
                            <Instagram sx={{ color: "white" }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Contact;
