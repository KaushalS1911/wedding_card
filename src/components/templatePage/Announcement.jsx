import React from "react";
import { Box, Typography } from "@mui/material";
import announce from "../../assets/TemplatePage/baby-desktop.svg";

const Announcement = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#EAF7FB",
        borderRadius: "20px",
        padding: "32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        position: "relative",
        overflow: "hidden",
        mx: 4,
        my: 6,
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${announce})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Content Section */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h1"
          sx={{ fontSize: {sm:"35px", md: "42px", xs: "24px" }, fontWeight: "500", p: "40px 0 16px 0" , flexWrap:"wrap" }}
        >
          Birth announcements
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "14px", fontWeight: "500", pb: "40px", color:'#20282D' }}
        >
          Beautiful announcements anyone can create
        </Typography>
      </Box>
    </Box>
  );
};

export default Announcement;
