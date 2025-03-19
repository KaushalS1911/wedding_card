import React from "react";
import {useForm} from "react-hook-form";
import {Box, TextField, Button, Checkbox, FormControlLabel, Typography, Container} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Settings() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{py:10}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography sx={{display: {sm:"flex" , xs:"unset"}, alignItems: "center"}}>
                        <Typography sx={{mr: 2 , width:"160px" , fontWeight:600}}>Email address</Typography>
                        <TextField size={"small"} type="email" {...register("email")} margin="normal" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "20px" } }}/>
                    </Typography>
                    <Typography sx={{display: {sm:"flex" , xs:"unset"}, alignItems: "center"}}>
                        <Typography sx={{mr: 2 , width:"160px" , fontWeight:600}}>Name</Typography>
                        <TextField size={"small"} {...register("name")} margin="normal" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "20px" } }}/>
                    </Typography>
                    <Typography sx={{display: {sm:"flex" , xs:"unset"}, alignItems: "center"}}>
                        <Typography sx={{mr: 2 , width:"160px" , fontWeight:600}}>New password</Typography>
                        <TextField type="password" size={"small"} {...register("newPassword")} margin="normal" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "20px" } }}/>
                    </Typography>
                    <Typography sx={{display: {sm:"flex" , xs:"unset"}, alignItems: "center"}}>
                        <Typography sx={{mr: 2 , width:"160px" , fontWeight:600}}>Confirm password</Typography>
                        <TextField type="password" size={"small"} {...register("confirmPassword")} margin="normal" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "20px" } }}/>
                    </Typography>

                    <FormControlLabel control={<Checkbox {...register("subscribe")} />}
                                      label="I'd like to receive news and updates" sx={{marginY: 2 , pl: {sm:"160px" , xs:"unset"}}}/>
                    <Typography sx={{pl: {sm:"320px" , xs:"unset"}}}>
                        <Button type="submit" variant="contained" fullWidth sx={{mb: 5, width: '80px' , backgroundColor:"#1BC47D" , borderRadius:"20px" , fontSize:"14px" , fontWeight:600}}>
                            Update
                        </Button>
                    </Typography>
                </form>

                <Box sx={{display: "flex", alignItems: "center", cursor: "pointer" , borderTop:"1px solid #E9E9EA" , borderBottom:"1px solid #E9E9EA" , py:2}}>
                    <DeleteIcon sx={{marginRight: 1 , color: "#1BC47D"}}/>
                    <Typography sx={{fontWeight:700 , color:"#606062"}}>Delete account</Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default Settings;