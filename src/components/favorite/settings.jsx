import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../Instance";
import { Box, TextField, Button, Checkbox, FormControlLabel, Typography, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Settings({setUserId}) {
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        axiosInstance.get("/api/auth/me")
            .then(response => {
                const userData = response.data.data;

                setValue("firstName", userData.firstName);
                setValue("lastName", userData.lastName);
                setValue("contact", userData.contact);
                setValue("email", userData.email);
                setUserId(userData._id);
            })
            .catch(error => console.error("Error fetching user data:", error));
    }, [setValue]);

    const onSubmit = (data) => {
        axiosInstance.put("/api/auth/me", data)
            .then(response => {
                console.log("Updated Successfully:", response.data);
                alert("Profile Updated Successfully!");
            })
            .catch(error => console.error("Error updating profile:", error));
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 5 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography sx={{ display: { sm: "flex", xs: "unset" }, alignItems: "center" }}>
                        <Typography sx={{ mr: 2, width: "160px", fontWeight: 600 }}>First Name</Typography>
                        <TextField size="small" {...register("firstName")} margin="normal"
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "20px" } }} />
                    </Typography>

                    <Typography sx={{ display: { sm: "flex", xs: "unset" }, alignItems: "center" }}>
                        <Typography sx={{ mr: 2, width: "160px", fontWeight: 600 }}>Last Name</Typography>
                        <TextField size="small" {...register("lastName")} margin="normal"
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "20px" } }} />
                    </Typography>

                    <Typography sx={{ display: { sm: "flex", xs: "unset" }, alignItems: "center" }}>
                        <Typography sx={{ mr: 2, width: "160px", fontWeight: 600 }}>Contact</Typography>
                        <TextField size="small" {...register("contact")} margin="normal"
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "20px" } }} />
                    </Typography>

                    <Typography sx={{ display: { sm: "flex", xs: "unset" }, alignItems: "center" }}>
                        <Typography sx={{ mr: 2, width: "160px", fontWeight: 600 }}>Email address</Typography>
                        <TextField size="small" type="email" {...register("email")} margin="normal" disabled
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "20px" } }} />
                    </Typography>

                    <FormControlLabel control={<Checkbox {...register("subscribe")} />}
                        label="I'd like to receive news and updates"
                        sx={{ marginY: 2, pl: { sm: "160px", xs: "unset" } }} />

                    <Typography sx={{ pl: { sm: "320px", xs: "unset" } }}>
                        <Button type="submit" variant="contained" fullWidth sx={{
                            mb: 5, width: '80px', backgroundColor: "#1BC47D", borderRadius: "20px",
                            fontSize: "14px", fontWeight: 600
                        }}>
                            Update
                        </Button>
                    </Typography>
                </form>

                <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer",
                    borderTop: "1px solid #E9E9EA", borderBottom: "1px solid #E9E9EA", py: 2 }}>
                    <DeleteIcon sx={{ marginRight: 1, color: "#1BC47D" }} />
                    <Typography sx={{ fontWeight: 700, color: "#606062" }}>Delete account</Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default Settings;
