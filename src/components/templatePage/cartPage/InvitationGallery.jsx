import React, { useState } from "react";
import { Grid, Typography, Box, Card, CardMedia, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import img1 from '../../../assets/TemplatePage/big-heart-12607.avif'
import img2 from '../../../assets/TemplatePage/decorative-stripes-35124.avif'
import img3 from '../../../assets/TemplatePage/magical-butterflies-photo-22977.avif'
import img4 from '../../../assets/TemplatePage/simple-hearts-45994.avif'
import img5 from '../../../assets/TemplatePage/sweet-secret-7884.avif'

const invitationTemplates = [
  {
    id: 1,
    title: "Sweet Secret",
    image: img1,
    colors: ["#d4af37", "#c0c0c0", "#8b4513"],
  },
  {
    id: 2,
    title: "Simple Hearts",
    image: img2,
    colors: ["#d2b48c", "#4f7942", "#a9a9a9"],
  },
  {
    id: 3,
    title: "Big Heart",
    image: img3,
    colors: ["#d87093", "#008080", "#f4a460"],
  },
  {
    id: 4,
    title: "Decorative Stripes",
    image: img4,
    colors: ["#ffffff", "#000000"],
    isPremium: true,
  },
  {
    id: 5,
    title: "Magical Butterflies Photo",
    image: img5,
    colors: ["#ff69b4", "#87ceeb", "#f5deb3"],
    isPremium: true,
  },
];

const InvitationGallery = () => {
  const [selectedColor, setSelectedColor] = useState({});

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {invitationTemplates.map((template) => (
          <Grid item xs={12} sm={6} md={3} lg={2.4} key={template.id}>
            <Card
              sx={{
                borderRadius: 2,
                position: "relative",
                overflow: "hidden",
                // transition: "border 0.3s",
                "&:hover": {
                  boxShadow: 6,
                  border: "2px solid black",
                  "& .premium-badge": {
                    width: "auto",
                    // paddingX: 1,
                  },
                  "& .premium-text": {
                    opacity: 1,
                    marginLeft: "6px",
                  },
                },
              }}
            >
              {/* Premium Badge */}
              {template.isPremium && (
                <Box
                  className="premium-badge"
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    bgcolor: "#8D51E7",
                    p: 1,
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    width: "18px",
                    padding: "10px 12px",
                    transition: "width 0.3s, padding 0.3s",
                  }}
                >
                  <StarIcon sx={{ color: "white", fontSize: 18 }} />
                  <Typography
                    className="premium-text"
                    sx={{
                      color: "#fff",
                      fontSize: "14px",
                      opacity: 0,
                      transition: "opacity 0.3s, margin-left 0.3s",
                      fontWeight: "bold"
                    }}
                  >
                    Premium
                  </Typography>
                </Box>
              )}

              {/* Full-Width Image */}
              <CardMedia
                component="img"
                sx={{
                  borderBottom: '1px solid #000',
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
                image={template.image}
                alt={template.title}
              />

              <CardContent>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="#63696C"
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {template.title}
                </Typography>


                {/* Color Options */}
                <Box sx={{ display: "flex", mt: 1, gap: 1 }}>
                  {template.colors.map((color, index) => (
                    <Box
                      key={index}
                      sx={{
                        bgcolor: color,
                        width: 24,
                        height: 24,
                        border: selectedColor[template.id] === color ? "2px solid black" : "1px solid #ccc",
                        cursor: "pointer",
                        transition: "0.2s",
                        borderRadius: '50px'
                      }}
                      onClick={() => setSelectedColor({ ...selectedColor, [template.id]: color })}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

  );
};

export default InvitationGallery;
