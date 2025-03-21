import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import EventIcon from "@mui/icons-material/Event";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
    { label: "Favorites", icon: <FavoriteBorderIcon />, route: "/profile/favorites" },
    { label: "Saved drafts", icon: <BookmarkBorderIcon />, route: "/profile/saved" },
    { label: "My events", icon: <EventIcon />, route: "/profile/myevents" },
    { label: "Purchases", icon: <ShoppingBagIcon />, route: "/profile/purchases" },
    { label: "Settings", icon: <SettingsIcon />, route: "/profile/settings" },
];

function Favorite() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "nowrap", // ✅ Icons ek hi row me rahenge
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "space-evenly", // ✅ Even spacing between icons
                    my: 2,
                }}
            >
                {menuItems.map((item, index) => (
                    <Button
                        key={index}
                        onClick={() => navigate(item.route)}
                        sx={{
                            display: "flex",
                            flexDirection: "column", // ✅ Icon upar aur text neeche aayega
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            minWidth: "50px", // ✅ Buttons chhoti size ke honge
                            px: 1,
                            py: 1,
                            fontWeight: "bold",
                            color: activeTab === item.route ? "#00C853" : "black",
                            backgroundColor: activeTab === item.route ? "#E8F5E9" : "transparent",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: activeTab === item.route ? "#E8F5E9" : "#F5F5F5",
                            },
                        }}
                    >
                        {item.icon}
                        {/* ✅ Mobile screen ke liye text hide karna hai */}
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: 12,
                                display: { xs: "none", sm: "block" }, // ✅ Hide text on `xs`
                            }}
                        >
                            {item.label}
                        </Typography>
                    </Button>
                ))}
            </Box>
        </Container>
    );
}

export default Favorite;
