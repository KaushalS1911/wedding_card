// import React, { useState } from "react";
// import { Grid, Typography, Box, Card, CardMedia, CardContent } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
// import img1 from '../../../assets/TemplatePage/big-heart-12607.avif'
// import img2 from '../../../assets/TemplatePage/decorative-stripes-35124.avif'
// import img3 from '../../../assets/TemplatePage/magical-butterflies-photo-22977.avif'
// import img4 from '../../../assets/TemplatePage/simple-hearts-45994.avif'
// import img5 from '../../../assets/TemplatePage/sweet-secret-7884.avif'

// const invitationTemplates = [
//   {
//     id: 1,
//     title: "Sweet Secret",
//     image: img1,
//     colors: ["#d4af37", "#c0c0c0", "#8b4513"],
//   },
//   {
//     id: 2,
//     title: "Simple Hearts",
//     image: img2,
//     colors: ["#d2b48c", "#4f7942", "#a9a9a9"],
//   },
//   {
//     id: 3,
//     title: "Big Heart",
//     image: img3,
//     colors: ["#d87093", "#008080", "#f4a460"],
//   },
//   {
//     id: 4,
//     title: "Decorative Stripes",
//     image: img4,
//     colors: ["#ffffff", "#000000"],
//     isPremium: true,
//   },
//   {
//     id: 5,
//     title: "Magical Butterflies Photo",
//     image: img5,
//     colors: ["#ff69b4", "#87ceeb", "#f5deb3"],
//     isPremium: true,
//   },
// ];

// const InvitationGallery = () => {
//   const [selectedColor, setSelectedColor] = useState({});

//   return (
//     <Box sx={{ p: 4 }}>
//       <Grid container spacing={2}>
//         {invitationTemplates.map((template) => (
//           <Grid item xs={12} sm={6} md={3} lg={2.4} key={template.id}>
//             <Card
//               sx={{
//                 borderRadius: 2,
//                 position: "relative",
//                 overflow: "hidden",
//                 // transition: "border 0.3s",
//                 "&:hover": {
//                   boxShadow: 6,
//                   border: "2px solid black",
//                   "& .premium-badge": {
//                     width: "auto",
//                     // paddingX: 1,
//                   },
//                   "& .premium-text": {
//                     opacity: 1,
//                     marginLeft: "6px",
//                   },
//                 },
//               }}
//             >
//               {/* Premium Badge */}
//               {template.isPremium && (
//                 <Box
//                   className="premium-badge"
//                   sx={{
//                     position: "absolute",
//                     top: 8,
//                     left: 8,
//                     bgcolor: "#8D51E7",
//                     p: 1,
//                     borderRadius: "50px",
//                     display: "flex",
//                     alignItems: "center",
//                     overflow: "hidden",
//                     width: "18px",
//                     padding: "10px 12px",
//                     transition: "width 0.3s, padding 0.3s",
//                   }}
//                 >
//                   <StarIcon sx={{ color: "white", fontSize: 18 }} />
//                   <Typography
//                     className="premium-text"
//                     sx={{
//                       color: "#fff",
//                       fontSize: "14px",
//                       opacity: 0,
//                       transition: "opacity 0.3s, margin-left 0.3s",
//                       fontWeight: "bold"
//                     }}
//                   >
//                     Premium
//                   </Typography>
//                 </Box>
//               )}

//               {/* Full-Width Image */}
//               <CardMedia
//                 component="img"
//                 sx={{
//                   borderBottom: '1px solid #000',
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   transition: "transform 0.3s",
//                 }}
//                 image={template.image}
//                 alt={template.title}
//               />

//               <CardContent>
//                 <Typography
//                   variant="body1"
//                   fontWeight="bold"
//                   color="#63696C"
//                   sx={{
//                     whiteSpace: "nowrap",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                   }}
//                 >
//                   {template.title}
//                 </Typography>


//                 {/* Color Options */}
//                 <Box sx={{ display: "flex", mt: 1, gap: 1 }}>
//                   {template.colors.map((color, index) => (
//                     <Box
//                       key={index}
//                       sx={{
//                         bgcolor: color,
//                         width: 24,
//                         height: 24,
//                         border: selectedColor[template.id] === color ? "2px solid black" : "1px solid #ccc",
//                         cursor: "pointer",
//                         transition: "0.2s",
//                         borderRadius: '50px'
//                       }}
//                       onClick={() => setSelectedColor({ ...selectedColor, [template.id]: color })}
//                     />
//                   ))}
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>

//   );
// };

// export default InvitationGallery;


import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Img1 from "../../../assets/TemplatePage/big-heart-12607.avif";
import Img2 from "../../../assets/TemplatePage/decorative-stripes-35124.avif";
import Img3 from "../../../assets/TemplatePage/big-heart-12607.avif";

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
