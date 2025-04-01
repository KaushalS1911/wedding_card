import React, {useEffect, useState} from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    Paper,
    Grid,
    useMediaQuery,
    useTheme,
    Drawer,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container,
    Menu,
    MenuItem,
    Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Logo from "../../assets/logo/logo.svg";
import {useNavigate} from "react-router-dom";
import Ragister from "../login/ragister.jsx";
import Login from "../login/login.jsx";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import axiosInstance from "../../Instance.jsx";

const menuItems = [
    {
        name: "Wedding",
        subMenu: {
            "Wedding Invites": [
                "Elegant",
                "Rustic",
                "Floral & Botanical",
                "Simple",
                "Modern",
                "Indian",
                "Vintage",
                "Beach",
                "Photo",
                "Destination",
                "Premium",
            ],
            "Save the date": ["Rustic", "Simple", "Destination", "Photo"],
            Party: [
                "Engagement party",
                "Bridal shower",
                "Bachelor party",
                "Bachelorette party",
                "Rehearsal dinner",
            ],
            Stationery: [
                "RSVP cards",
                "Bridesmaid cards",
                "Engagement announcements",
                "Wedding announcements",
            ],
            Greetings: ["Wedding", "Thank you", "Engagement"],
        },
    },
    {
        name: "Birthday",
        subMenu: {
            "Birthday Invites": [
                "Kids",
                "Women's",
                "Add a photo",
                "Men's",
                "Babies",
                "Teens",
                "Save the date",
                "Surprise",
            ],
            "Kids Milestones": [
                "1st birthday",
                "2nd Birthday",
                "10th Birthday",
                "13th Birthday",
                "Sweet 16",
                "Quinceañera",
                "Bar & bat mitzvah",
            ],
            "Adult Milestones": [
                "18th birthday",
                "21st birthday",
                "25th birthday",
                "30th birthday",
                "40th birthday",
                "50th birthday",
                "60th birthday",
                "70th birthday",
                "80th birthday",
                "90th birthday",
            ],
            "Invite Themes": [
                "Princess",
                "Animal",
                "Unicorn",
                "Butterfly",
                "Sleepover",
                "Dinosaur",
                "Rainbow",
                "Mermaid",
                "Gaming",
            ],
            "Birthday Cards": [
                "Kids",
                "Add a photo",
                "Funny",
                "Milestone",
                "Thank you",
                "Belated",
                "Family",
                "Cards for her",
                "Cards for him",
            ],
        },
    },
    {
        name: "Baby & Kids",
        subMenu: {
            Baby: ["Baby shower", "Gender reveal", "Baby sprinkle", "Sip & See"],
            "Baby Shower Themes": [
                "Floral",
                "Woodland",
                "Butterfly",
                "Safari",
                "Princess",
                "Rustic",
                "Elephant",
                "Rainbow",
                "Dinosaur",
                "Fiesta",
            ],
            Announcements: ["Birth", "Pregnancy"],
            Religious: [
                "Baptism & Christening",
                "Bar & Bat Mitzvah",
                "First communion",
            ],
            "Birthday Invites": ["Kids", "1st birthday", "Sweet 16", "Quinceañera"],
        },
    },
    {
        name: "Party",
        subMenu: {
            Celebrations: [
                "Graduation party",
                "Anniversary",
                "Retirement & Farewell",
                "Baby shower",
                "Engagement party",
                "Rehearsal dinner",
                "Bridal shower",
                "Bachelor party",
                "Memorial",
                "Save the date",
            ],
            Gatherings: [
                "Housewarming",
                "Dinner party",
                "Cocktail party",
                "Lunch & Brunch",
                "Family reunion",
                "Back to school",
                "Sleepover",
                "BBQ",
                "Potluck",
                "Summer & Pool",
                "Luau",
                "Sports & Games",
                "Picnic",
            ],
            Holidays: [
                "Ramadan",
                "St Patrick's Day",
                "Easter",
                "4th of July",
                "Labor Day",
                "Rosh Hashanah",
                "Halloween",
                "Diwali",
            ],
            Religious: [
                "Baptism & Christening",
                "Bar & Bat Mitzvah",
                "First communion",
            ],
            "Business Events": [
                "Gala",
                "Grand opening",
                "Open house",
                "Cocktail party",
                "Dinner party",
                "Retirement",
                "Save the date",
            ],
        },
    },
    {
        name: "Greeting Cards",
        subMenu: {
            Birthday: [
                "Kids",
                "Funny",
                "Milestone",
                "Belated",
                "Add a photo",
                "Family",
                "For her",
                "For him",
            ],
            "Events & Occasions": [
                "New baby",
                "Graduation",
                "Wedding",
                "Anniversary",
                "Retirement",
                "Engagement",
                "Bar Mitzvah",
                "New home",
            ],
            "Thank You": [
                "General",
                "Graduation",
                "Teacher appreciation",
                "For support",
                "Wedding",
                "Birthday",
                "Baby",
                "Baptism",
            ],
            "Thoughts & Feelings": [
                "Get well",
                "Sympathy",
                "Love & Romance",
                "Congratulations",
                "Good luck",
                "Sorry",
                "Miss you",
                "Farewell & Goodbye",
            ],
            Holidays: [
                "Ramadan",
                "St. Patrick's Day",
                "Easter",
                "Passover",
                "Cinco De Mayo",
                "Mother's Day",
                "Father's Day",
                "4th of July",
            ],
            Announcements: [
                "Graduation",
                "Memorial",
                "Save the date",
                "Engagement",
                "Wedding",
                "Pregnancy",
                "Birth",
                "Moving",
            ],
        },
    },
    {
        name: "Trending",
        subMenu: {
            "Brunch Invites": [],
            "Milestone Birthdays": [],
            "Ramadan Cards": [],
            "Ramadan Invites": [],
            "St. Patrick's Day Invites": [],
            "Spring Birthdays": [],
        },
    },
];

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [expandedAccordion, setExpandedAccordion] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const [openLoginPage, setOpenLoginPage] = useState(false);
    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [parentcategories, setParentCategories] = useState([]);

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedAccordion(isExpanded ? panel : null);
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };


    function category(_id) {
        axiosInstance.get("/api/category/all")
            .then((res) => setParentCategories(res.data.data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        category()
    }, [])

    const renderMenuItems = () => (
        parentcategories.map((item, index) => (
            <>
                {item.categories.map((category, index) => (
                    <Box
                        key={index}
                        onMouseEnter={() => !isMobile && setOpenMenu(category.name)}
                        onMouseLeave={() => !isMobile && setOpenMenu(null)}
                    >
                        <Button sx={{
                            color: "#20282D",
                            fontWeight: '600',
                            fontSize: '13px',
                            textTransform: 'capitalize',
                            mx: 1
                        }}>{category.name}</Button>


                        {openMenu === category.name && category.subcategories?.length > 0 &&
                            <Box
                                key={index}
                                elevation={3}
                                sx={{
                                    position: "fixed",
                                    top: "50px",
                                    left: 0,
                                    width: "100%",
                                    maxHeight: "80vh",
                                    backgroundColor: "#fff",
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                    padding: "20px",
                                    zIndex: 1000,
                                    overflowY: "auto",
                                    color: "#000",
                                }}
                            >
                                <Container>
                                    <Grid container spacing={2} sx={{maxWidth: "1300px", margin: "0 auto"}}>
                                        {openMenu === category.name && category.subcategories.map((subcategory, index) => (
                                            <Grid key={index} item xs={12} sm={6} md={4} lg={2.4}>
                                                <Typography sx={{
                                                    fontSize: '14px',
                                                    fontWeight: '700',
                                                    pb: 1
                                                }}>{subcategory.name}</Typography>
                                                {subcategory.types.map((types, i) => (
                                                    <Typography key={i} onClick={() => {
                                                        navigate("/template-page");
                                                        setOpenMenu(null);
                                                    }} sx={{
                                                        fontSize: '14px',
                                                        fontWeight: '500',
                                                        cursor: "pointer",
                                                        mt: 1,
                                                        "&:hover": {color: "#1bc47d"}
                                                    }}>
                                                        {types.name}
                                                    </Typography>
                                                ))}
                                            </Grid>
                                        ))
                                        }
                                    </Grid>
                                </Container>
                            </Box>
                        }
                    </Box>
                ))}
            </>
        ))
    );

    return (
        <>
            <AppBar position="sticky" sx={{backgroundColor: "white", boxShadow: 0, zIndex: 1100}}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        position: "relative",
                    }}
                >
                    {/* Left Side - Logo */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            color: "green",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            width: "146px", cursor: 'pointer'
                        }}
                    >
                        <Typography component={"img"} src={Logo} width={"100%"} onClick={() => navigate('/')}/>
                    </Typography>
                    {/* Center - Navigation Links */}
                    {!isMobile && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                            }}
                        >
                            {renderMenuItems()}
                        </Box>
                    )}
                    {/* Right Side - Search Icon, Log in & Go Premium */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            position: "absolute",
                            right: "20px",
                        }}
                    >
                        {/* Search Icon */}
                        {!isMobile && (
                            <IconButton
                                sx={{
                                    color: "black",
                                    "&:hover": {
                                        backgroundColor: "#f2f2f2",
                                    },
                                }}
                            >
                                <SearchIcon/>
                            </IconButton>
                        )}
                        {isMobile ? (
                            <>
                                {token ? (
                                    <>
                                        <IconButton
                                            sx={{
                                                backgroundColor: "#f2f2f2",
                                                borderRadius: "50%",
                                                width: 40,
                                                height: 40,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                fontWeight: "bold",
                                            }}
                                            onClick={handleClick}
                                        >
                                            {user?.firstName ? (
                                                <Typography sx={{color: "black", fontWeight: "bold"}}>
                                                    {user.firstName.charAt(0).toUpperCase()}
                                                </Typography>
                                            ) : (
                                                <AccountCircleIcon sx={{color: "black"}}/>
                                            )}
                                        </IconButton>

                                        {/* Dropdown Menu */}
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: "bottom",
                                                horizontal: "right", // ✅ Open menu aligned to right
                                            }}
                                            transformOrigin={{
                                                vertical: "top",
                                                horizontal: "right", // ✅ Ensure it stays aligned to right
                                            }}
                                            PaperProps={{
                                                elevation: 3,
                                                sx: {
                                                    borderRadius: "16px",
                                                    padding: "5px",
                                                    minWidth: "200px",
                                                },
                                            }}
                                        >
                                            {/* Profile */}
                                            <MenuItem
                                                onClick={() => {
                                                    navigate("/profile/favorites");
                                                    handleClose(); // ✅ Menu close ho jayega
                                                }}
                                            >
                                                <PersonIcon sx={{marginRight: 1}}/>
                                                Profile
                                            </MenuItem>

                                            {/* Settings */}
                                            <MenuItem
                                                onClick={() => {
                                                    navigate("/profile/settings");
                                                    handleClose(); // ✅ Menu close ho jayega
                                                }}
                                            >
                                                <SettingsIcon sx={{marginRight: 1}}/>
                                                Settings
                                            </MenuItem>

                                            <Divider/>

                                            {/* Logout */}
                                            <MenuItem
                                                onClick={() => {
                                                    handleLogout();
                                                    handleClose(); // ✅ Menu close ho jayega
                                                }}
                                            >
                                                <LogoutIcon sx={{marginRight: 1}}/>
                                                Log out
                                            </MenuItem>
                                        </Menu>
                                    </>

                                ) : (
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#f2f2f2",
                                            color: "black",
                                            borderRadius: "40px",
                                            fontWeight: "600",
                                            textTransform: "none",
                                            boxShadow: "none",
                                            "&:hover": {
                                                backgroundColor: "#e0e0e0",
                                                boxShadow: "none",
                                            },
                                        }}
                                        onClick={() => {
                                            setOpenLoginPage((prev) => !prev);
                                        }}
                                    >
                                        Log in
                                    </Button>
                                )}
                                <IconButton onClick={handleDrawerToggle}>
                                    {!isMobile && (
                                        <IconButton
                                            sx={{
                                                color: "black",
                                                "&:hover": {
                                                    backgroundColor: "#f2f2f2",
                                                },
                                            }}
                                        >
                                            <SearchIcon/>
                                        </IconButton>
                                    )}
                                    <MenuIcon/>
                                </IconButton>
                            </>
                        ) : (
                            <>
                                {token ? (
                                    <>
                                        <IconButton
                                            sx={{
                                                backgroundColor: "#f2f2f2",
                                                borderRadius: "50%",
                                                width: 40,
                                                height: 40,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                fontWeight: "bold",
                                            }}
                                            onClick={handleClick}
                                        >
                                            {user?.firstName ? (
                                                <Typography sx={{color: "black", fontWeight: "bold"}}>
                                                    {user.firstName.charAt(0).toUpperCase()}
                                                </Typography>
                                            ) : (
                                                <AccountCircleIcon sx={{color: "black"}}/>
                                            )}
                                        </IconButton>

                                        {/* Dropdown Menu */}
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: "bottom",
                                                horizontal: "right", // ✅ Open menu aligned to right
                                            }}
                                            transformOrigin={{
                                                vertical: "top",
                                                horizontal: "right", // ✅ Ensure it stays aligned to right
                                            }}
                                            PaperProps={{
                                                elevation: 3,
                                                sx: {
                                                    borderRadius: "16px",
                                                    padding: "5px",
                                                    minWidth: "200px",
                                                },
                                            }}
                                        >
                                            {/* Profile */}
                                            <MenuItem
                                                onClick={() => {
                                                    navigate("/profile/favorites");
                                                    handleClose(); // ✅ Menu close ho jayega
                                                }}
                                            >
                                                <PersonIcon sx={{marginRight: 1}}/>
                                                Profile
                                            </MenuItem>

                                            {/* Settings */}
                                            <MenuItem
                                                onClick={() => {
                                                    navigate("/profile/settings");
                                                    handleClose(); // ✅ Menu close ho jayega
                                                }}
                                            >
                                                <SettingsIcon sx={{marginRight: 1}}/>
                                                Settings
                                            </MenuItem>

                                            <Divider/>

                                            {/* Logout */}
                                            <MenuItem
                                                onClick={() => {
                                                    handleLogout();
                                                    handleClose(); // ✅ Menu close ho jayega
                                                }}
                                            >
                                                <LogoutIcon sx={{marginRight: 1}}/>
                                                Log out
                                            </MenuItem>
                                        </Menu>
                                    </>

                                ) : (
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#f2f2f2",
                                            color: "black",
                                            borderRadius: "40px",
                                            fontWeight: "600",
                                            textTransform: "none",
                                            boxShadow: "none",
                                            "&:hover": {
                                                backgroundColor: "#e0e0e0",
                                                boxShadow: "none",
                                            },
                                        }}
                                        onClick={() => {
                                            setOpenLoginPage((prev) => !prev);
                                        }}
                                    >
                                        Log in
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#8D51E7",
                                        color: "white",
                                        borderRadius: "40px",
                                        fontWeight: "600",
                                        textTransform: "none",
                                        boxShadow: "none",
                                        "&:hover": {
                                            backgroundColor: "#7a44d6",
                                            boxShadow: "none",
                                        },
                                    }}
                                >
                                    Go Premium
                                </Button>
                            </>
                        )}
                    </Box>
                </Toolbar>

                <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
                    {/* Drawer Header */}
                    <Box sx={{p: 2, display: "flex", justifyContent: "space-between"}}>
                        <Typography component="img" src={Logo} width={120} onClick={() => navigate('/')}/>
                        <IconButton onClick={handleDrawerToggle}>
                            <CloseIcon/>
                        </IconButton>
                    </Box>

                    {/* Menu Items */}
                    {parentcategories.map((item, index) => (
                        item.categories.map((category, index) => (
                            <Accordion
                                key={index}
                                expanded={expandedAccordion === `panel${index}`}
                                onChange={handleAccordionChange(`panel${index}`)}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{fontSize: "14px" , fontWeight: 600}}>
                                    {category.name}
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2}>
                                        {
                                            category.subcategories.map((subcategory, index) => (
                                                <Grid item key={index} xs={12} sm={3} md={2}>
                                                    <Typography
                                                        sx={{fontWeight: 600 , fontSize:"14px"}}>{subcategory.name}</Typography>

                                                    {subcategory.types.map((types, i) => (
                                                        <Typography key={i} sx={{mt: 1 , fontSize:"14px"}} onClick={() => {
                                                            navigate("/template-page");
                                                            setOpenMenu(null);
                                                        }} >{types.name}</Typography>
                                                    ))}
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </AccordionDetails>

                            </Accordion>
                        ))
                    ))}

                    {/* LOGIN & GO PREMIUM BUTTONS IN DROPDOWN */}
                    <Box sx={{textAlign: "center", mt: 3, p: 2}}>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: "#8D51E7",
                                color: "white",
                                borderRadius: "40px",
                                fontWeight: "600",
                                textTransform: "none",
                                boxShadow: "none",
                                "&:hover": {
                                    backgroundColor: "#7a44d6",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            Go Premium
                        </Button>
                    </Box>
                </Drawer>
            </AppBar>
            <Login openLoginPage={openLoginPage} setOpenLoginPage={setOpenLoginPage}/>
        </>
    );
};

export default Navbar;