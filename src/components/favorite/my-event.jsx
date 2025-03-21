import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import { useNavigate } from "react-router-dom";

function MyEvent() {
    const navigate = useNavigate();
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#F5F5F5",
                    borderRadius: "12px",
                    padding: "40px",
                    textAlign: "center",
                    margin: "auto",
                    my: 5,
                }}
            >
                {/* 🔹 Event Icon */}
                <EventNoteOutlinedIcon sx={{ fontSize: 40, color: "black" }} />

                {/* 🔹 Main Title */}
                <Typography sx={{ mt: 2, fontSize: "27px", fontWeight: 500, color: "#20282D" }}>
                    No events yet
                </Typography>

                {/* 🔹 Subtext */}
                <Typography variant="body2" sx={{ mt: 1, fontSize: "16px", color: "#20282D" }}>
                    Ready to host? Create your <br /> first event now!
                </Typography>

                {/* 🔹 Browse Invitations Button */}
                <Button
                onClick={() => navigate("/invitations")}
                    variant="contained"
                    sx={{
                        mt: 3,
                        bgcolor: "#18C37D",
                        borderRadius: "30px",
                        fontSize: "14px",
                        width: "184px",
                        height: "48px",
                        textTransform: "none",
                        boxShadow:'none'
                    }}
                >
                    Browse Invitations
                </Button>
            </Box>
        </Container>
    );
}

export default MyEvent;