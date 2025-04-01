import React, {useEffect, useState} from "react";
import {
    Box, Grid, Typography, TextField, Button, IconButton, Container, Divider,
} from "@mui/material";
import {
    Facebook, Instagram, YouTube, Twitter, Pinterest,
} from "@mui/icons-material";
import Logo from "../../assets/logo/logo.svg";
import Apple from "../../assets/logo/app-store-button.webp";
import Play from "../../assets/logo/google-play-6647242_1280.webp";
import LanguageIcon from "@mui/icons-material/Language";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import {useNavigate} from "react-router-dom";
import axiosInstance from "../../Instance";

const Footer = () => {

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/api/parent-category")
            .then((response) => {
                setCategories(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    const handleClick = (item) => {
        if (item === "Contact us") {
            navigate("/contact");
        }
    };

    function category() {
        axiosInstance.get("/api/category/all")
            .then((response) => setSubCategory(response.data.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        category();
    }, []);


    return (<Box
        sx={{backgroundColor: "#f4f4f4", padding: {xs: "20px", md: "40px"}}}
    >
        <Container maxWidth="xl">
            {/* Top Section */}
            <Box sx={{textAlign: "center", mt: 4}}>
                <Typography
                    variant="h5"
                    sx={{fontSize: {xs: "18px", sm: "21px"}, fontWeight: "500"}}
                >
                    Make every occasion count
                </Typography>
                <Typography
                    sx={{
                        fontSize: {xs: "12px", sm: "14px"},
                        fontWeight: "400",
                        letterSpacing: "0.4px",
                        color: "#20282D",
                        mt: 1,
                    }}
                >
                    Stay ahead with exclusive tips and inspiration for your next
                    celebration
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {xs: "column", sm: "row"},
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        my: 2,
                    }}
                >
                    <TextField
                        variant="outlined"
                        placeholder="Enter your email"
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "50px",
                            height: "44px",
                            width: {xs: "100%", sm: "278px"},
                            "& .MuiOutlinedInput-root": {
                                p: "0px 12px", height: "44px", borderRadius: "50px", fontSize: "14px",
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#18B071",
                            borderRadius: "50px",
                            boxShadow: "none",
                            height: "44px",
                            px: 3,
                            fontSize: "14px",
                            textTransform: "none",
                            width: {xs: "100%", sm: "auto"},
                        }}
                    >
                        Subscribe
                    </Button>
                </Box>
            </Box>

            {/* Rating Section */}
            <Box sx={{display: "flex", justifyContent: "center", my: 6}}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {xs: "column", sm: "row"},
                        alignItems: "center",
                        backgroundColor: "#FFF",
                        padding: {xs: "10px 16px", sm: "12px 20px"},
                        borderRadius: "20px",
                        gap: {xs: "5px", sm: "8px"},
                        width: "fit-content",
                        py: 2,
                        px: 5,
                        mx: "auto",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "500", color: "#000", fontSize: {xs: "18px", sm: "21px"},
                        }}
                    >
                        Excellent
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "500", color: "#000", fontSize: {xs: "18px", sm: "21px"},
                        }}
                    >
                        4.7
                    </Typography>
                    <Box sx={{display: "flex", color: "#18B071"}}>
                        {[...Array(4)].map((_, index) => (<StarIcon key={index} fontSize="small"/>))}
                        <StarHalfIcon fontSize="small"/>
                    </Box>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#444", mx: 1, fontSize: {xs: "14px", sm: "16px"}, textAlign: "center",
                        }}
                    >
                        Based on{" "}
                        <Typography
                            component="span"
                            sx={{
                                cursor: "pointer", fontWeight: "600", textDecoration: "none", color: "#000",
                            }}
                        >
                            701 reviews
                        </Typography>
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2px",
                            fontWeight: "600",
                            color: "#000",
                            mt: {xs: 1, sm: 0},
                        }}
                    >
                        <StarIcon
                            sx={{color: "#18B071", fontSize: {xs: "22px", sm: "26px"}}}
                        />
                        <Typography
                            variant="body1"
                            sx={{fontSize: {xs: "16px", sm: "18px"}}}
                        >
                            Trustpilot
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Main Links Section */}
            <Grid container spacing={3} justifyContent="center">
                {/* Left Section (Buttons) */}
                {/* <Grid
            item
            xs={12}
            lg={1.5}
            sx={{
              display: "flex",
              flexDirection: { xs: "row", lg: "column" },
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              mb: { xs: 2, lg: 0 },
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/invitations")}
              sx={{
                backgroundColor: "white",
                color: "black",
                boxShadow: "none",
                borderRadius: "50px",
                width: "118px",
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "#e0e0e0", boxShadow: "none" },
              }}
            >
              Invitations
            </Button>
            <Button
              onClick={() => navigate("/cards")}
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                boxShadow: "none",
                borderRadius: "50px",
                width: "118px",
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "#e0e0e0", boxShadow: "none" },
              }}
            >
              Cards
            </Button>
          </Grid> */}

                <Grid
                    item
                    xs={12}
                    lg={1.5}
                    sx={{
                        display: "flex",
                        flexDirection: {xs: "row", lg: "column"},
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        mb: {xs: 2, lg: 0},
                    }}
                >
                    {categories && categories?.map((category, index) => (<Button
                        key={index}
                        variant="contained"
                        onClick={() => navigate(`/${category.name}`)}
                        sx={{
                            backgroundColor: "white",
                            color: "black",
                            boxShadow: "none",
                            borderRadius: "50px",
                            width: "118px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            textTransform: "capitalize",
                            "&:hover": {backgroundColor: "#e0e0e0", boxShadow: "none"},
                        }}
                    >
                        {category?.name}
                    </Button>))}
                </Grid>

                {/* Divider Line */}
                <Grid item xs={12} sm="auto">
                    <Divider
                        orientation="vertical"
                        sx={{
                            height: "100%", width: "1px", display: {xs: "none", lg: "block"},
                        }}
                    />
                </Grid>

                {/* Right Section (Links Grid) */}
                <Grid item xs={12} sm>
                    <Grid container spacing={3} justifyContent="center">
                        {
                                subCategory.map((section, index) => (
                                section.categories.slice(0, 5).map((item, index) => (
                                    <Grid item xs={12} sm={6} md={2} lg={1.7} key={index}>
                                        <Typography
                                            gutterBottom
                                            key={index}
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "600",
                                                letterSpacing: "0.7px",
                                                color: "#20282d",
                                                mb: 3,
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                        {item.subcategories.map((subcategories, idx) => (<Typography
                                            key={idx}
                                            variant="body2"
                                            sx={{
                                                color: "#20282D",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                letterSpacing: "0.36px",
                                                mb: 2,
                                                "&:hover": {color: "#18B071"},
                                            }}
                                        >
                                            {subcategories.name}
                                        </Typography>))}
                                    </Grid>
                                ))

                            ))}

                        <Grid item xs={12} sm="auto">
                            <Divider
                                orientation="vertical"
                                sx={{
                                    height: "100%", width: "1px", display: {xs: "none", lg: "block"},
                                }}
                            />
                        </Grid>

                        {/* Company & Support in One Row */}
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={2}
                            lg={1.7}
                            sx={{display: "flex", flexDirection: "column"}}
                        >
                            <Typography
                                gutterBottom
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    letterSpacing: "0.7px",
                                    color: "#20282d",
                                    mb: 2,
                                }}
                            >
                                Company
                            </Typography>
                            {["About us", "Blog"].map((item, idx) => (<Typography
                                key={idx}
                                onClick={() => navigate(item === "About us" ? "/about" : "/blog")}
                                variant="body2"
                                sx={{
                                    color: "#20282D",
                                    cursor: "pointer",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    letterSpacing: "0.36px",
                                    mb: 2,
                                    "&:hover": {color: "#18B071"},
                                }}
                            >
                                {item}
                            </Typography>))}

                            <Typography
                                gutterBottom
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    letterSpacing: "0.7px",
                                    color: "#20282d",
                                    mt: 3,
                                    mb: 2,
                                }}
                            >
                                Support
                            </Typography>
                            {["Contact us", "Help", "Premium membership"].map((item, idx) => (<Typography
                                key={idx}
                                variant="body2"
                                sx={{
                                    color: "#20282D",
                                    cursor: "pointer",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    letterSpacing: "0.36px",
                                    mb: 2,
                                    "&:hover": {color: "#18B071"},
                                }}
                                onClick={() => handleClick(item)}
                            >
                                {item}
                            </Typography>))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Bottom Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"},
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "30px",
                    flexWrap: "wrap",
                    my: 10,
                    gap: 3,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {xs: "column", sm: "row"},
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 3,
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            color: "green",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            width: {xs: "100%", sm: "146px"},
                        }}
                    >
                        <Typography component={"img"} src={Logo} width={"100%"}/>
                    </Typography>
                    {/* Social Media Icons */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            mt: {xs: "10px", sm: "0px"},
                        }}
                    >
                        {[Pinterest, Facebook, Instagram, YouTube, Twitter].map((Icon, index) => (<IconButton
                            key={index}
                            sx={{
                                bgcolor: "#1BC47D",
                                color: "#FFF",
                                width: "32px",
                                height: "32px",
                                "&:hover": {bgcolor: "#18B071"},
                            }}
                        >
                            <Icon fontSize="small"/>
                        </IconButton>))}
                    </Box>
                </Box>

                {/* Language & Apps */}
                <Box
                    sx={{
                        display: "flex", flexDirection: {xs: "column", sm: "row"}, // Stack vertically on small screens, horizontally on larger screens
                        justifyContent: "center", alignItems: "center", gap: {xs: "10px", sm: "15px"}, // Adjust gap for different screen sizes
                        mt: {xs: "16px", md: "0px"}, // Adjust margin for different screen sizes
                    }}
                >
                    {/* Language Section */}
                    <Box
                        sx={{
                            display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
                        }}
                    >
                        <LanguageIcon sx={{fontSize: "20px", color: "#20282D"}}/>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#20282D", fontSize: {xs: "12px", sm: "14px"}, // Adjust font size for different screens
                                fontWeight: "600", letterSpacing: "0.6px",
                            }}
                        >
                            Español
                        </Typography>
                    </Box>

                    {/* App Store and Google Play Buttons */}
                    <Box
                        sx={{
                            display: "flex", flexDirection: {xs: "column", sm: "row"}, // Stack vertically on small screens, horizontally on larger screens
                            alignItems: "center", justifyContent: "center", gap: {xs: "10px", sm: "15px"}, // Adjust gap for different screen sizes
                        }}
                    >
                        <Box sx={{width: {xs: "80px", sm: "100px"}}}>
                            <Typography component={"img"} src={Apple} width={"100%"}/>
                        </Box>
                        <Box sx={{width: {xs: "80px", sm: "100px"}}}>
                            <Typography component={"img"} src={Play} width={"100%"}/>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Copyright */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "15px",
                    color: "gray",
                    fontSize: "14px",
                    mt: 3,
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: "#63696c",
                        fontSize: {xs: "10px", sm: "14px"},
                        fontWeight: "400",
                        letterSpacing: "0.4px",
                    }}
                >
                    © Greetings Island 2025. All rights reserved.
                </Typography>
                <Box sx={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
                    {["Privacy policy", "Terms of use", "Site map"].map((text, index) => (<Typography
                        key={index}
                        href="#"
                        underline="none"
                        sx={{
                            cursor: "pointer",
                            color: "#63696c",
                            fontSize: {xs: "12px", sm: "14px"},
                            fontWeight: "400",
                            letterSpacing: "0.4px",
                            "&:hover": {color: "#18B071"},
                        }}
                    >
                        {text}
                    </Typography>))}
                </Box>
            </Box>
        </Container>
    </Box>);
};

export default Footer;
