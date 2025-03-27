// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   ToggleButton,
//   ToggleButtonGroup,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   IconButton,
//   Button,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const FilterSidebar = () => {
//   // State for filters
//   const [selectedPrices, setSelectedPrices] = useState([]);
//   const [selectedSort, setSelectedSort] = useState([]);
//   const [selectedOrientation, setSelectedOrientation] = useState([]);
//   const [selectedColor, setSelectedColor] = useState(null);

//   const colors = [
//     "#000", "#808080", "#fff", "#d32f2f", "#e91e63", "#81c784",
//     "#3f51b5", "#673ab7", "#fdd835", "#ffeb3b", "#ffcc80", "#795548",
//   ];

//   return (
//     <Box sx={{ width: "280px", padding: "16px", borderRight: "1px solid #ddd" }}>
//       {/* Pregnancy Category */}
//       <Accordion defaultExpanded>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography sx={{ fontWeight: "bold" }}>Pregnancy</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <span role="img" aria-label="baby">🎉</span> Baby shower invites
//           </Typography>
//           <Typography sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
//             <span role="img" aria-label="announcement">🌟</span> Birth announcements
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//       {/* Price Filter */}
//       <Typography sx={{ mt: 2, fontWeight: "bold" }}>Price</Typography>
//       <ToggleButtonGroup
//         value={selectedPrices}
//         onChange={(e, newPrices) => setSelectedPrices(newPrices)}
//         aria-label="price filter"
//         sx={{ mt: 1, display: "flex" }}
//       >
//         <ToggleButton value="free" sx={{ borderRadius: "50px" }}>Free</ToggleButton>
//         <ToggleButton value="premium" sx={{ borderRadius: "50px" }}>Premium</ToggleButton>
//       </ToggleButtonGroup>

//       {/* Color Filter */}
//       <Typography sx={{ mt: 2, fontWeight: "bold" }}>Color</Typography>
//       <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", mt: 1 }}>
//         {colors.map((color, index) => (
//           <IconButton
//             key={index}
//             sx={{
//               width: 28,
//               height: 28,
//               backgroundColor: color,
//               borderRadius: "50%",
//               border: selectedColor === color ? "3px solid #000" : "1px solid #ccc",
//             }}
//             onClick={() => setSelectedColor(color)}
//           />
//         ))}
//       </Box>

//       {/* Photo Filter */}
//       <Typography sx={{ mt: 2, fontWeight: "bold" }}>Photo</Typography>
//       <Button
//         variant={selectedPrices.includes("photo") ? "contained" : "outlined"}
//         sx={{ mt: 1, borderRadius: "50px" }}
//         onClick={() => setSelectedPrices(prev => prev.includes("photo") ? prev.filter(p => p !== "photo") : [...prev, "photo"])}
//       >
//         With photo
//       </Button>

//       {/* Orientation Filter */}
//       <Typography sx={{ mt: 2, fontWeight: "bold" }}>Orientation</Typography>
//       <ToggleButtonGroup
//         value={selectedOrientation}
//         onChange={(e, newOrientations) => setSelectedOrientation(newOrientations)}
//         aria-label="orientation filter"
//         sx={{ mt: 1, display: "flex", flexWrap: "wrap" }}
//       >
//         <ToggleButton value="portrait" sx={{ borderRadius: "50px" }}>Portrait</ToggleButton>
//         <ToggleButton value="landscape" sx={{ borderRadius: "50px" }}>Landscape</ToggleButton>
//         <ToggleButton value="square" sx={{ borderRadius: "50px" }}>Square</ToggleButton>
//       </ToggleButtonGroup>

//       {/* Sort By Filter */}
//       <Typography sx={{ mt: 2, fontWeight: "bold" }}>Sort by</Typography>
//       <ToggleButtonGroup
//         value={selectedSort}
//         onChange={(e, newSort) => setSelectedSort(newSort)}
//         aria-label="sort by filter"
//         sx={{ mt: 1, display: "flex" }}
//       >
//         <ToggleButton value="most-popular" sx={{ borderRadius: "50px" }}>Most popular</ToggleButton>
//         <ToggleButton value="newest" sx={{ borderRadius: "50px" }}>Newest</ToggleButton>
//       </ToggleButtonGroup>
//     </Box>
//   );
// };

// export default FilterSidebar;

import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, Typography, Box, Drawer, Button } from "@mui/material";


const priceOptions = ["Free", "Premium"];

const colorOptions = [
    { color: "blue" },
    { color: "black" },
    { color: "white" },
    { color: "#f5f5dc" },
    { color: "grey" },
    { color: "#e3dac9" },
    { color: "green" },
    { color: "red" },
    { color: "brown" },
    { color: "purple" },
    { color: "pink" },
    { color: "orange" },
    { color: "silver" },
    { color: "yellow" },
];

const photoOptions = ['With photo'];

const orientation = ['Portrait', 'Landscape', 'Square'];

const sortBy = ['Most popular', 'Newest'];

const FilterSidebar = ({ setOpenDrawer }) => {
    return (
        <>
            <Box sx={{ width: { lg: "100%", xs: "100%", sm: "450px" }, p: 2 }}>
                {/* price Section */}
                <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                    <Box sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "end" }}
                        onClick={() => setOpenDrawer(false)}> <CloseIcon /> </Box>
                    <Typography sx={{ fontWeight: "bold", mb: 1 }}>Price</Typography>
                    <Box sx={{ display: "flex" }}>
                        {priceOptions.map((price, index) => (
                            <Box key={index} sx={{ padding: "10px 10px 10px 0" }}>
                                <Box
                                    sx={{
                                        display: "inline-block",
                                        fontSize: "13px",
                                        textAlign: "center",
                                        border: "1px solid #000",
                                        padding: "10px 20px",
                                        borderRadius: "30px",
                                        cursor: "pointer",
                                        "&:hover": { bgcolor: "#E9E9EA", color: "#000" },
                                    }}
                                >
                                    {price}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Color Section */}
                <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                    <Typography sx={{ fontWeight: "bold", mb: 1 }}>Color</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {colorOptions.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    p: 1,
                                    cursor: "pointer",
                                }}
                            >
                                <Box
                                    sx={{
                                        p: 1.5,
                                        borderRadius: "50%",
                                        backgroundColor: item.color,
                                        transition: "border 0.3s ease-in-out", // Smooth transition
                                        border: "2px solid transparent", // Default border (invisible)
                                        "&:hover": {
                                            border: "2px solid black", // Border visible on hover
                                        },
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                    <Typography sx={{ fontWeight: "bold", mb: 1 }}>Photo</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {photoOptions.map((photo, index) => (
                            <Box key={index} sx={{ padding: "10px 10px 10px 0" }}>
                                <Box
                                    sx={{
                                        fontSize: "13px",
                                        textAlign: "center",
                                        border: "1px solid #000",
                                        padding: "10px 20px",
                                        borderRadius: "30px",
                                        cursor: "pointer",
                                        "&:hover": { bgcolor: "#E9E9EA", color: "#000" },
                                    }}
                                >
                                    {photo}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                    <Typography sx={{ fontWeight: "bold", mb: 1 }}>Orientation</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {orientation.map((item, index) => (
                            <Box key={index} sx={{ padding: "10px 10px 10px 0" }}>
                                <Box
                                    sx={{
                                        fontSize: "13px",
                                        textAlign: "center",
                                        border: "1px solid #000",
                                        padding: "10px 20px",
                                        borderRadius: "30px",
                                        cursor: "pointer",
                                        "&:hover": { bgcolor: "#E9E9EA", color: "#000" },
                                    }}
                                >
                                    {item}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                    <Typography sx={{ fontWeight: "bold", mb: 1 }}>Sort by</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {sortBy.map((item, index) => (
                            <Box key={index} sx={{ padding: "10px 10px 10px 0" }}>
                                <Box
                                    sx={{
                                        fontSize: "13px",
                                        textAlign: "center",
                                        border: "1px solid #000",
                                        padding: "10px 20px",
                                        borderRadius: "30px",
                                        cursor: "pointer",
                                        "&:hover": { bgcolor: "#E9E9EA", color: "#000" },
                                    }}
                                >
                                    {item}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

            </Box>
        </>
    );
};

export default FilterSidebar;
