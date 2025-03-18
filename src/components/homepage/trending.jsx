import React from "react";
import { Box, Typography } from "@mui/material";
import Img1 from "../../assets/Home/Img2.svg";
import Img2 from "../../assets/Home/Img4.png";
import Img3 from "../../assets/Home/Img5.png";
import StarIcon from "@mui/icons-material/StarBorder";

function Trending() {
    const trendingItems = [
        { img: Img2, label: "Brunch" },
        { img: Img3, label: "Milestone birthdays" },
    ];

    return (
        <Box sx={{ textAlign: "center", pt: {md:"100px",xs:"50px"}, pb: {md:"120px",xs:"30px"} }}>
            {/* Title */}
            <Typography variant="h4" fontWeight="bold" mb={5}>
                Explore what's trending
            </Typography>

            {/* Flex Container without Grid */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",

                }}
            >
                {trendingItems.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            backgroundImage: `url(${Img1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "20px",
                            pt: 2,
                            height: "480px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            maxWidth: "440px",
                            position: "relative",
                            objectFit: "cover",
                            "&:hover .topimage": {
                                transform: "scale(1.1)",
                            },
                            "&:hover .brunch": {
                                mx:0,
                                px:0
                            }
                        }}
                    >
                        {/* Image */}
                        <Box className={"topimage"}
                            component="img"
                            src={item.img}
                            alt={item.label}
                            sx={{
                                width: "90%",
                                maxWidth: "250px",
                                borderRadius: "12px",
                                mt: "30px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                transition: "all 0.4s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                }
                            }}
                        />

                        {/* Label with Icon */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                background: "#FFFFFF",
                                borderRadius: "0 0 16px 16px",
                                padding: "12px",
                                position: "absolute",
                                width: "100%",
                                bottom: 0,
                                maxWidth: "440px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                zIndex: 999,
                            }}
                        >
                            <Box className={"brunch"} sx={{ fontSize: "21px", fontWeight: "500" , px:1 ,transition: "all 0.4s ease-in-out",  }}>
                                {item.label}
                            </Box>
                            <Box className={"brunch"}
                                sx={{
                                    background: "#9C27B0",
                                    borderRadius: "50%",
                                    width: "28px",
                                    height: "28px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                    mx:1,
                                    transition: "all 0.4s ease-in-out",
                                }}
                            >
                                <StarIcon sx={{ color: "white", fontSize: "18px" }} />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Trending;
