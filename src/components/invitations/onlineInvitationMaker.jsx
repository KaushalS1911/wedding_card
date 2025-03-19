import React, {useState} from "react";
import {Container, Typography, Button, Box} from "@mui/material";
import {motion} from "framer-motion";

const OnlineInvitationMaker = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Container maxWidth="md" sx={{py: {xs: 4, md: 6}, position: "relative"}}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "500",
                    mb: 2,
                    color: "#20282d",
                    fontSize: {xs: "20px", sm: "22px", md: "25px"},
                }}
            >
                Online invitation maker by Greetings Island
            </Typography>

            <Box sx={{position: "relative", overflow: "hidden"}}>
                <Typography
                    sx={{
                        color: "#20282d",
                        fontSize: {xs: "14px", sm: "15px"},
                        mb: 1,
                        lineHeight: "1.8",
                    }}
                >
                    Creating beautiful invitations has never been easier with our online invitation maker. Whether
                    you're planning a baby shower, wedding, birthday, engagement, or housewarming, our platform allows
                    you to create invitations that reflect your style.
                </Typography>

                {!expanded && (
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "40px",
                            background: "linear-gradient(rgba(255,255,255,0), #fff)",
                        }}
                    />
                )}
            </Box>

            <motion.div
                initial={{height: 0, opacity: 0}}
                animate={{height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0}}
                transition={{duration: 0.5}}
                style={{overflow: "hidden"}}
            >
                <Typography
                    sx={{
                        color: "#20282d",
                        fontSize: {xs: "14px", sm: "15px"},
                        mb: 4,
                        lineHeight: "1.8",
                    }}
                >
                    Browse thousands of exclusive designs and use our helpful filters to help you find the perfect
                    invitation for your event. Filter by color palette, choosing from pretty pastels to bold patterns.
                    Peruse different themes like unicorns and dinosaurs for kids or classic and elegant for adults.
                    Select different fonts, use custom text, and even choose the layout that best fits your vision.
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "500",
                        mb: 2,
                        color: "#20282d",
                        fontSize: {xs: "20px", sm: "22px", md: "25px"},
                    }}
                >
                    Personalized Designs
                </Typography>

                <Typography
                    sx={{
                        color: "#20282d",
                        fontSize: {xs: "14px", sm: "15px"},
                        lineHeight: "1.8",
                    }}
                >
                    With our invitation maker, personalization is at your fingertips. The free invitation maker offers a
                    wide range of customizable templates, giving you the freedom to adjust colors, fonts, and layouts to
                    match your unique vision.
                </Typography>
            </motion.div>

            <Button
                onClick={() => setExpanded(!expanded)}
                sx={{
                    color: "#1BC47D",
                    textTransform: "none",
                    fontSize: {xs: "12px", sm: "14px"},
                    mt: 2,
                }}
            >
                {expanded ? "Read Less.." : "Read More.."}
            </Button>
        </Container>
    );
};

export default OnlineInvitationMaker;
