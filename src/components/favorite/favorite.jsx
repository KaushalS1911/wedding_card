import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import EventIcon from "@mui/icons-material/Event";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
    { label: "Favorites", icon: <FavoriteBorderIcon />, route: "/favorites" },
    { label: "Saved drafts", icon: <BookmarkBorderIcon />, route: "/saved" },
    { label: "My events", icon: <EventIcon />, route: "/myevents" },
    { label: "Purchases", icon: <ShoppingBagIcon />, route: "/purchases" },
    { label: "Settings", icon: <SettingsIcon />, route: "/settings" },
];

function Favorite() {
    const [activeTab, setActiveTab] = useState("/favorites"); // Default active tab
    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex", gap: 3, alignItems: "center", justifyContent: "center", mt: 5 }}>
            {menuItems.map((item, index) => (
                <Button
                    key={index}
                    onClick={() => {
                        setActiveTab(item.route); // Set activeTab to item's route
                        navigate(item.route);
                    }}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        px: 2,
                        py: 1,
                        borderRadius: "20px",
                        fontWeight: "bold",
                        color: activeTab === item.route ? "#00C853" : "black", // Check activeTab correctly
                        backgroundColor: activeTab === item.route ? "#E8F5E9" : "transparent",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: activeTab === item.route ? "#E8F5E9" : "#F5F5F5",
                        },
                    }}
                >
                    {item.icon}
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: 15,
                        }}
                    >
                        {item.label}
                    </Typography>
                </Button>
            ))}
        </Box>
    );
}

export default Favorite;
