import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Img1 from "../../../assets/TemplatePage/big-heart-12607.avif";
import Img2 from "../../../assets/TemplatePage/decorative-stripes-35124.avif";
import Img3 from "../../../assets/TemplatePage/big-heart-12607.avif";
import { useNavigate } from "react-router-dom";

const invitationData = [
  { title: "Golden Minimalism", images: [Img1, Img2, Img3], colors: ["#F9F5F3", "#BDA88D", "#1C1C1C"] },
  { title: "Modern Elegance", images: [Img2, Img3, Img1], colors: ["#EFEFEF", "#A8937B", "#2E2E2E"], isPremium: true },
  { title: "Classic Vibes", images: [Img3, Img1, Img2], colors: ["#FFF5E1", "#C0A68B", "#3D3D3D"] },
  { title: "Royal Touch", images: [Img1, Img2, Img3], colors: ["#EDEDED", "#D4AF37", "#4B4B4B"], isPremium: true }
];

const InvitationGallery = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        {invitationData.map((invite, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <InvitationCard title={invite.title} images={invite.images} colors={invite.colors} isPremium={invite.isPremium} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const InvitationCard = ({ title, images, colors, isPremium }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <Box textAlign="start" sx={{ position: "relative" }}>
      {/* Premium Badge */}
      {isPremium && (
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: "#8D51E7",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: "bold",
            transition: "width 0.3s, padding 0.3s",
            "&:hover": { paddingX: "12px" }
          }}
        >
          <StarIcon sx={{ fontSize: 16, marginRight: "5px" }} /> Premium
        </Box>
      )}

      {/* Image Box */}
      <Box
      onClick={() => navigate('/template-page/invitation-card')}
        sx={{
          height: "400px",
          width: "100%",
          borderRadius: "8px",
          overflow: "hidden",
          border: "2px solid #EBEBEB",
          "&:hover": { border: "2px solid #000" }
        }}
      >
        <img
          src={images[selectedIndex]}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
            transition: "opacity 0.3s ease-in-out"
          }}
        />
      </Box>

      {/* Title */}
      <Box sx={{ fontSize: "16px", mt: "13px", color: "#63696c", fontWeight: "500" }}>{title}</Box>

      {/* Color Selector Section */}
      <Box sx={{ display: "flex", justifyContent: "start", gap: "5px", mt: "10px" }}>
        {colors.map((color, index) => (
          <Box
            key={index}
            onClick={() => setSelectedIndex(index)}
            sx={{
              p: "2px",
              borderRadius: "50%",
              border: `1px solid ${selectedIndex === index ? "black" : "transparent"}`,
              transition: "border 0.2s ease-in-out",
              cursor: "pointer",
              "&:hover": { border: "1px solid black" }
            }}
          >
            <Box
              sx={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: color,
                cursor: "pointer"
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InvitationGallery;
