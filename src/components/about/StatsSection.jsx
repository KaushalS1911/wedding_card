// import React from "react";
// import { Box, Grid, Typography } from "@mui/material";

// const stats = [
//     { value: "41k", label: "designs for every occasion" },
//     { value: "4.5M", label: "monthly active users" },
//     { value: "14+", label: "years helping you spread the love" },
//     { value: "230+", label: "countries we celebrate in" },
// ];

// const StatsSection = () => {
//     return (
//         <Box sx={{ textAlign: "center", py: 8, px: { xs: 2, sm: 4, md: 8 } }}>
//             {/* Heading */}
//             <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
//                 <Typography variant="h4" sx={{ fontSize: '44px', fontWeight: '500', width: '700px' }} gutterBottom>
//                     Working around the clock to help you{" "}
//                     <span style={{ color: "#ff5985" }}>spread the love</span>
//                 </Typography>
//             </Box>

//             {/* Stats Grid */}
//             <Grid container spacing={3} sx={{ mt: 3 }}>
//                 {stats.map((stat, index) => (
//                     <Grid item xs={6} sm={3} key={index}>
//                         <Typography variant="h3" sx={{fontSize:'60px',fontWeight:"500",color:'#20282D'}} >
//                             {stat.value}
//                         </Typography>
//                         <Typography variant="body2" sx={{ color:'#20282D' }}>
//                             {stat.label}
//                         </Typography>
//                     </Grid>
//                 ))}
//             </Grid>
//         </Box>
//     );
// };

// export default StatsSection;


import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const stats = [
  { value: "41k", label: "designs for every occasion" },
  { value: "4.5M", label: "monthly active users" },
  { value: "14+", label: "years helping you spread the love" },
  { value: "230+", label: "countries we celebrate in" },
];

const StatsSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ textAlign: "center", py: 8, px: { xs: 2, sm: 4, md: 8 } }}>
      {/* Heading */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "28px", sm: "36px", md: "44px" },
            fontWeight: "500",
            maxWidth: "700px",
            px: { xs: 2, sm: 0 },
          }}
          gutterBottom
        >
          Working around the clock to help you{" "}
          <span style={{ color: "#ff5985" }}>spread the love</span>
        </Typography>
      </Box>

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={3} key={index} textAlign="center">
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "40px", sm: "50px", md: "60px" },
                fontWeight: "500",
                color: "#20282D",
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#20282D",
                fontSize: isSmallScreen ? "12px" : "14px",
              }}
            >
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
