import React, { useEffect, useState } from "react";
import { Typography, Box, Skeleton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../../../Instance.jsx";

const priceOptions = ["Free", "Premium"];
const orientation = ["Portrait", "Landscape", "Square"];

const FilterSidebar = ({ setOpenDrawer }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const searchParams = new URLSearchParams(location.search);

    const handleFilterClick = (key, value) => {
        if (key === "isPremium") {
            searchParams.set(key, value === "Premium" ? "true" : "false");
        } else {
            searchParams.set(key, value);
        }
        navigate(`?${searchParams.toString()}`, { replace: true });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get("/api/template/attributes");
                setData(response.data.data);
            } catch (err) {
                console.error("Error fetching filter data:", err);
                setError("Failed to load filters. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <Box sx={{ width: { lg: "100%", xs: "100%", sm: "450px" }, p: 2 }}>
                <Box sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "end" }}>
                    <CloseIcon />
                </Box>

                {/* Price Filter Skeleton */}
                <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                    <Skeleton variant="text" width="20%" height={30} sx={{ mb: 1 }} />
                    <Box sx={{ display: "flex" }}>
                        {[...Array(2)].map((_, index) => (
                            <Box key={index} sx={{ padding: "10px 10px 10px 0" }}>
                                <Skeleton
                                    variant="rounded"
                                    width={80}
                                    height={40}
                                    sx={{ borderRadius: "30px" }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Color Filter Skeleton */}
                <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                    <Skeleton variant="text" width="20%" height={30} sx={{ mb: 1 }} />
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {[...Array(8)].map((_, index) => (
                            <Box key={index} sx={{ p: 1 }}>
                                <Skeleton
                                    variant="circular"
                                    width={40}
                                    height={40}
                                    sx={{ borderRadius: "50%" }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Orientation Filter Skeleton */}
                <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                    <Skeleton variant="text" width="30%" height={30} sx={{ mb: 1 }} />
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {[...Array(3)].map((_, index) => (
                            <Box key={index} sx={{ padding: "10px 10px 10px 0" }}>
                                <Skeleton
                                    variant="rounded"
                                    width={100}
                                    height={40}
                                    sx={{ borderRadius: "30px" }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Template Themes Skeleton */}
                <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                    <Skeleton variant="text" width="40%" height={30} sx={{ mb: 1 }} />
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {[...Array(5)].map((_, index) => (
                            <Box key={index} sx={{ padding: "10px 10px 10px 0" }}>
                                <Skeleton
                                    variant="rounded"
                                    width={120}
                                    height={40}
                                    sx={{ borderRadius: "30px" }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Tags Skeleton */}
                <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                    <Skeleton variant="text" width="20%" height={30} sx={{ mb: 1 }} />
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {[...Array(6)].map((_, index) => (
                            <Box key={index} sx={{ padding: "10px 10px 10px 0" }}>
                                <Skeleton
                                    variant="rounded"
                                    width={90}
                                    height={40}
                                    sx={{ borderRadius: "30px" }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ width: { lg: "100%", xs: "100%", sm: "450px" }, p: 2, textAlign: 'center' }}>
                <Typography color="error">{error}</Typography>
                <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => window.location.reload()}
                >
                    Retry
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ width: { lg: "100%", xs: "100%", sm: "450px" }, p: 2 }}>
            <Box>
                <Box sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "end" }} onClick={() => setOpenDrawer(false)}>
                    <CloseIcon />
                </Box>

                <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
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
                                        backgroundColor: searchParams.get("isPremium") === (price === "Premium" ? "true" : "false") ? "#E9E9EA" : "transparent",
                                        "&:hover": { bgcolor: "#E9E9EA", color: "#000" },
                                    }}
                                    onClick={() => handleFilterClick("isPremium", price)}
                                >
                                    {price}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {data && data.colors && (
                    <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                        <Typography sx={{ fontWeight: "bold", mb: 1 }}>Color</Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {data.colors.map((color, index) => {
                                const selectedColors = searchParams.getAll("color");
                                const isSelected = selectedColors.includes(color.color);

                                const handleColorClick = () => {
                                    const newSearchParams = new URLSearchParams(location.search);

                                    if (isSelected) {
                                        newSearchParams.delete("color");
                                        selectedColors
                                            .filter(c => c !== color.color)
                                            .forEach(c => newSearchParams.append("color", c));
                                    } else {
                                        newSearchParams.append("color", color.color);
                                    }

                                    navigate(`?${newSearchParams.toString()}`, { replace: true });
                                };

                                return (
                                    <Box
                                        key={index}
                                        onClick={handleColorClick}
                                        sx={{
                                            width: "38px",
                                            height: "38px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "50%",
                                            border: isSelected ? "2px solid black" : "1px solid transparent",
                                            transition: "border 0.2s ease-in-out",
                                            cursor: "pointer",
                                            "&:hover": { border: "2px solid black" }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "50%",
                                                backgroundColor: color.hex,
                                                boxShadow: "0px 2px 4px rgba(0,0,0,0.2)", // Soft shadow for depth
                                            }}
                                        />
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                )}

                {orientation && (
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
                                            backgroundColor: searchParams.get("orientation") === item ? "#E9E9EA" : "transparent",
                                            "&:hover": { bgcolor: "#E9E9EA", color: "#000" },
                                        }}
                                        onClick={() => handleFilterClick("orientation", item.toLowerCase())}
                                    >
                                        {item}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}

                {data && data.templateThemes && (
                    <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                        <Typography sx={{ fontWeight: "bold", mb: 1 }}>Template Themes</Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                            {data.templateThemes.map((theme, index) => {
                                const selectedThemes = searchParams.getAll("templateTheme");
                                const isSelected = selectedThemes.includes(theme);
                                const handleThemeClick = () => {
                                    const newSearchParams = new URLSearchParams(location.search);
                                    if (isSelected) {
                                        newSearchParams.delete("templateTheme");
                                        selectedThemes
                                            .filter(t => t !== theme)
                                            .forEach(t => newSearchParams.append("templateTheme", t));
                                    } else {
                                        newSearchParams.append("templateTheme", theme);
                                    }
                                    navigate(`?${newSearchParams.toString()}`, { replace: true });
                                };
                                return (
                                    <Box key={index} sx={{ padding: "10px 10px 10px 0" }}>
                                        <Box
                                            sx={{
                                                fontSize: "13px",
                                                textAlign: "center",
                                                border: "1px solid #000",
                                                padding: "10px 20px",
                                                borderRadius: "30px",
                                                cursor: "pointer",
                                                backgroundColor: isSelected ? "#E9E9EA" : "transparent",
                                                "&:hover": { bgcolor: "#E9E9EA", color: "#000" },
                                            }}
                                            onClick={handleThemeClick}
                                        >
                                            {theme}
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                )}

                {data && data.tags && (
                    <Box sx={{ borderBottom: "1px solid #ccc", py: 2 }}>
                        <Typography sx={{ fontWeight: "bold", mb: 1 }}>Tags</Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                            {data.tags.map((tagObj, index) => {
                                const selectedTags = searchParams.getAll("tag");
                                const isSelected = selectedTags.includes(tagObj.tag);

                                const handleTagClick = () => {
                                    const newSearchParams = new URLSearchParams(location.search);

                                    if (isSelected) {
                                        newSearchParams.delete("tag");
                                        selectedTags
                                            .filter(t => t !== tagObj.tag)
                                            .forEach(t => newSearchParams.append("tag", t));
                                    } else {
                                        newSearchParams.append("tag", tagObj.tag);
                                    }

                                    navigate(`?${newSearchParams.toString()}`, { replace: true });
                                };

                                return (
                                    <Box key={index} sx={{ padding: "10px 10px 10px 0" }}>
                                        <Box
                                            sx={{
                                                fontSize: "13px",
                                                textAlign: "center",
                                                border: "1px solid #000",
                                                padding: "10px 20px",
                                                borderRadius: "30px",
                                                cursor: "pointer",
                                                backgroundColor: isSelected ? "#E9E9EA" : "transparent",
                                                "&:hover": { bgcolor: "#E9E9EA", color: "#000" },
                                            }}
                                            onClick={handleTagClick}
                                        >
                                            {tagObj.tag}
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default FilterSidebar;   