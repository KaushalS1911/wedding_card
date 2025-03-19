import React, { useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

const OnlineCardMaker = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 }, position: "relative" }}>
            {/* Title */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "500",
                    mb: 2,
                    color: "#20282d",
                    fontSize: { xs: "20px", sm: "22px", md: "25px" },
                }}
            >
                Online card maker by Greetings Island
            </Typography>

            {/* Content Box */}
            <Box sx={{ position: "relative", overflow: "hidden" }}>
                <Typography
                    sx={{
                        color: "#20282d",
                        fontSize: { xs: "14px", sm: "15px" },
                        mb: 1,
                        lineHeight: "1.8",
                    }}
                >
                    Create custom-designed greeting cards with our free online card maker. Whether you're crafting a heartfelt
                    message for a loved one or a playful note for a friend, our tool makes it simple and fun. Choose from thousands
                    of designs, themes, templates, colors, and fonts, or upload your own images to create something truly unique.
                    No more searching for the right card at the store—with our online card maker, you have the freedom to express
                    exactly what you want.
                </Typography>

                {/* Blur Effect (Visible Only When Collapsed) */}
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

            {/* Animated Expandable Content */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ overflow: "hidden" }}
            >
                <Typography
                    sx={{
                        color: "#20282d",
                        fontSize: { xs: "14px", sm: "15px" },
                        mb: 4,
                        lineHeight: "1.8",
                    }}
                >
                    It’s completely free and there’s no sign-up required. From birthday cards to Christmas cards, our
                    easy-to-use platform allows you to design and share the perfect card in just a few clicks. Present
                    your message in a personalized greeting using our extensive gallery of online card templates. Print
                    your card at home or share it using several of our convenient options.
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "500",
                        mb: 2,
                        color: "#20282d",
                        fontSize: { xs: "20px", sm: "22px", md: "25px" },
                    }}
                >
                    Easy and Convenient Sharing
                </Typography>

                <Typography
                    sx={{
                        color: "#20282d",
                        fontSize: { xs: "14px", sm: "15px" },
                        lineHeight: "1.8",
                    }}
                >
                    Whether your card will be shared digitally, hand-delivered, or posted with a stamp, we’ve got all the
                    sharing options you need.
                </Typography>
            </motion.div>

            {/* Read More / Read Less Button */}
            <Button
                onClick={() => setExpanded(!expanded)}
                sx={{
                    color: "#1BC47D",
                    textTransform: "none",
                    fontSize: { xs: "12px", sm: "14px" },
                    mt: 2,
                }}
            >
                {expanded ? "Read Less.." : "Read More.."}
            </Button>
        </Container>
    );
};

export default OnlineCardMaker;
