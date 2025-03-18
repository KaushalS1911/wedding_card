import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "250px", sm: "350px", md: "450px", lg: "500px" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="https://static.greetingsisland.com/images/theme/about/banner.mp4" type="video/mp4" />
      </video>

      {/* Text Overlay */}
      <Container
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          zIndex: 1,
          px: { xs: 2, sm: 3, md: 5 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "24px", sm: "32px", md: "40px", lg: "50px" },
            fontWeight: "500",
          }}
        >
          <span style={{ color: "#1bc47d" }}>With you</span> for all life's milestones
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            mt: 1,
          }}
        >
          Bring joy and excitement to all the important moments... big and small
        </Typography>
      </Container>
    </Box>
  );
};

export default Banner;
