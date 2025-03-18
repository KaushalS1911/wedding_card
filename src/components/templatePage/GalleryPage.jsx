import React, { useState } from "react";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import FilterSidebar from "./cartPage/FilterSidebar";
import InvitationGallery from "./cartPage/InvitationGallery";


const GalleryPage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 3 }}>
      {/* Filter Button */}
      <Button
        variant="contained"
        startIcon={<TuneIcon />}
        onClick={() => setOpenDrawer(true)}
        sx={{
          mb: 3,
          width:'150px', 
          bgcolor: "#8D51E7", 
          fontWeight: "bold",
          fontSize: "16px",
          borderRadius: "30px", 
        }}
      >
        Filters
      </Button>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <FilterSidebar />
      </Drawer>

      {/* Invitation Gallery */}
      <InvitationGallery />
    </Box>
  );
};

export default GalleryPage;
