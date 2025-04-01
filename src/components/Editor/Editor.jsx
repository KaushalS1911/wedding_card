// pages/Editor.js - The main design editor component
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Paper,
  Tabs,
  Tab,
  Typography,
  Button,
  IconButton,
  Divider,
  TextField,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ImageIcon from "@mui/icons-material/Image";
import PaletteIcon from "@mui/icons-material/Palette";
import ShapesIcon from "@mui/icons-material/Category";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import SaveIcon from "@mui/icons-material/Save";
import DownloadIcon from "@mui/icons-material/Download";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { SketchPicker } from "react-color";
import axiosInstance from "../../Instance.jsx";

// Mock template data
const templates = {
  1: {
    id: 1,
    title: "Boldest Bow",
    category: "Birthday Invitation",
    // image: birthdayTemplate,
    design: {
      width: 5,
      height: 7,
      background: "#FFFFFF",
      elements: [
        {
          id: "e1",
          type: "image",
          src: "/path/to/bow.png",
          x: 0,
          y: 0,
          width: 100,
          height: 150,
          rotation: 0,
        },
        {
          id: "e2",
          type: "text",
          content: "18",
          x: 200,
          y: 200,
          fontSize: 24,
          fontFamily: "Arial",
          color: "#FF69B4",
          rotation: 0,
          align: "center",
        },
        {
          id: "e3",
          type: "text",
          content: "A MOMENT TO CHERISH\nA DAY TO REMEMBER",
          x: 200,
          y: 150,
          fontSize: 12,
          fontFamily: "Arial",
          color: "#666666",
          rotation: 0,
          align: "center",
        },
        {
          id: "e4",
          type: "text",
          content: "you're invited to celebrate",
          x: 200,
          y: 250,
          fontSize: 12,
          fontFamily: "Arial",
          color: "#666666",
          rotation: 0,
          align: "center",
        },
        {
          id: "e5",
          type: "text",
          content: "Sabrina Vaughn",
          x: 200,
          y: 280,
          fontSize: 18,
          fontFamily: "Cursive",
          color: "#FF69B4",
          rotation: 0,
          align: "center",
        },
        {
          id: "e6",
          type: "text",
          content:
            "on her eighteenth birthday\nnovember 15 at 7 pm\nriviera winery, athens\nrsvp 917-624-2835",
          x: 200,
          y: 330,
          fontSize: 12,
          fontFamily: "Arial",
          color: "#666666",
          rotation: 0,
          align: "center",
        },
      ],
    },
  },
};

// Available fonts
const fonts = [
  { name: "Arial", value: "Arial, sans-serif" },
  { name: "Times New Roman", value: '"Times New Roman", serif' },
  { name: "Helvetica", value: "Helvetica, Arial, sans-serif" },
  { name: "Courier New", value: '"Courier New", monospace' },
  { name: "Georgia", value: "Georgia, serif" },
  { name: "Cursive", value: "cursive" },
];

const Editor = () => {
  const { id } = useParams();
  const template = templates[id] || {};
  const [selectedImage, setSelectedImage] = useState(null);

  const [currentTab, setCurrentTab] = useState(0);
  const [canvasElements, setCanvasElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState("#000000");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (template && template.design) {
      setCanvasElements(template.design.elements);
      // Initialize history
      setHistory([template.design.elements]);
      setHistoryIndex(0);
    }
  }, [template]);

  useEffect(() => {
    axiosInstance.get(`/api/template/${id}`)
        .then((response) => {
          const templateData = response.data.data;
          setData(templateData);


          if (templateData?.colors?.length > 0) {
            setColor(templateData.colors[0]?.color || "");
            setImage(templateData.colors[0]?.templateImages || "");
          }
        })
        .catch((error) => console.error("API Error:", error));
  }, [id]);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleSelectElement = (elementId) => {
    const element = canvasElements.find((el) => el.id === elementId);
    setSelectedElement(element);
  };

  const handleUpdateElement = (updatedProps) => {
    if (!selectedElement) return;

    const updatedElements = canvasElements.map((el) =>
      el.id === selectedElement.id ? { ...el, ...updatedProps } : el
    );

    setCanvasElements(updatedElements);
    setSelectedElement({ ...selectedElement, ...updatedProps });

    // Update history
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(updatedElements);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setCanvasElements(history[historyIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setCanvasElements(history[historyIndex + 1]);
    }
  };

  const handleColorChange = (color) => {
    setCurrentColor(color.hex);
    if (selectedElement && selectedElement.type === "text") {
      handleUpdateElement({ color: color.hex });
    }
  };

  const handleAddText = () => {
    const newId = `text-${Date.now()}`;
    const newText = {
      id: newId,
      type: "text",
      content: "New Text",
      x: 200,
      y: 200,
      fontSize: 16,
      fontFamily: "Arial",
      color: "#000000",
      rotation: 0,
      align: "left",
    };

    const updatedElements = [...canvasElements, newText];
    setCanvasElements(updatedElements);
    setSelectedElement(newText);

    // Update history
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(updatedElements);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleAddShape = (type) => {
    const newId = `shape-${Date.now()}`;
    const newShape = {
      id: newId,
      type: "shape",
      shapeType: type,
      x: 200,
      y: 200,
      width: 100,
      height: 100,
      fill: "#FF69B4",
      stroke: "#000000",
      strokeWidth: 1,
      rotation: 0,
    };

    const updatedElements = [...canvasElements, newShape];
    setCanvasElements(updatedElements);
    setSelectedElement(newShape);

    // Update history
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(updatedElements);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  // Rendering the canvas elements (simplified version)
  const renderCanvasElement = (element) => {
    const isSelected = selectedElement && selectedElement.id === element.id;
    const style = {
      position: "absolute",
      left: `${element.x}px`,
      top: `${element.y}px`,
      transform: `rotate(${element.rotation}deg)`,
      border: isSelected ? "1px dashed blue" : "none",
      cursor: "pointer",
    };

    switch (element.type) {
      case "text":
        return (
          <div
            key={element.id}
            style={{
              ...style,
              color: element.color,
              fontSize: `${element.fontSize}px`,
              fontFamily: element.fontFamily,
              textAlign: element.align,
              whiteSpace: "pre-wrap",
            }}
            onClick={() => handleSelectElement(element.id)}
          >
            {element.content}
          </div>
        );
      case "image":
        return (
          <img
            key={element.id}
            src={element.src || birthdayTemplate} // Use birthdayTemplate as fallback
            alt=""
            style={{
              ...style,
              width: `${element.width}px`,
              height: `${element.height}px`,
            }}
            onClick={() => handleSelectElement(element.id)}
          />
        );
      case "shape":
        let ShapeComponent;
        switch (element.shapeType) {
          case "circle":
            return (
              <div
                key={element.id}
                style={{
                  ...style,
                  width: `${element.width}px`,
                  height: `${element.height}px`,
                  borderRadius: "50%",
                  backgroundColor: element.fill,
                  border: `${element.strokeWidth}px solid ${element.stroke}`,
                }}
                onClick={() => handleSelectElement(element.id)}
              />
            );
          case "rectangle":
            return (
              <div
                key={element.id}
                style={{
                  ...style,
                  width: `${element.width}px`,
                  height: `${element.height}px`,
                  backgroundColor: element.fill,
                  border: `${element.strokeWidth}px solid ${element.stroke}`,
                }}
                onClick={() => handleSelectElement(element.id)}
              />
            );
          default:
            return null;
        }
      default:
        return null;
    }
  };

  // Editor properties panel based on selected element
  const renderPropertiesPanel = () => {
    if (!selectedElement) {
      return (
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Select an element to edit its properties
          </Typography>
        </Box>
      );
    }

    switch (selectedElement.type) {
      case "text":
        return (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Text Properties
            </Typography>

            <TextField
              label="Content"
              multiline
              fullWidth
              margin="normal"
              value={selectedElement.content}
              onChange={(e) => handleUpdateElement({ content: e.target.value })}
            />

            <Box sx={{ mt: 2 }}>
              <Typography gutterBottom>
                Font Size: {selectedElement.fontSize}px
              </Typography>
              <Slider
                value={selectedElement.fontSize}
                min={8}
                max={72}
                onChange={(e, newValue) =>
                  handleUpdateElement({ fontSize: newValue })
                }
              />
            </Box>

            <FormControl fullWidth margin="normal">
              <InputLabel id="font-family-label">Font Family</InputLabel>
              <Select
                labelId="font-family-label"
                value={selectedElement.fontFamily}
                onChange={(e) =>
                  handleUpdateElement({ fontFamily: e.target.value })
                }
              >
                {fonts.map((font) => (
                  <MenuItem
                    key={font.name}
                    value={font.name}
                    style={{ fontFamily: font.value }}
                  >
                    {font.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box sx={{ my: 2 }}>
              <Typography gutterBottom>Text Alignment</Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  color={
                    selectedElement.align === "left" ? "primary" : "default"
                  }
                  onClick={() => handleUpdateElement({ align: "left" })}
                >
                  <FormatAlignLeftIcon />
                </IconButton>
                <IconButton
                  color={
                    selectedElement.align === "center" ? "primary" : "default"
                  }
                  onClick={() => handleUpdateElement({ align: "center" })}
                >
                  <FormatAlignCenterIcon />
                </IconButton>
                <IconButton
                  color={
                    selectedElement.align === "right" ? "primary" : "default"
                  }
                  onClick={() => handleUpdateElement({ align: "right" })}
                >
                  <FormatAlignRightIcon />
                </IconButton>
              </Box>
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography gutterBottom>Text Color</Typography>
              <Box
                sx={{
                  height: 36,
                  width: 36,
                  backgroundColor: selectedElement.color,
                  border: "1px solid #ddd",
                  borderRadius: 1,
                  cursor: "pointer",
                }}
                onClick={() => setShowColorPicker(!showColorPicker)}
              />
              {showColorPicker && (
                <Box sx={{ position: "absolute", zIndex: 2, mt: 1 }}>
                  <Box
                    sx={{
                      position: "fixed",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      zIndex: 1,
                    }}
                    onClick={() => setShowColorPicker(false)}
                  />
                  <SketchPicker
                    color={selectedElement.color}
                    onChange={handleColorChange}
                    disableAlpha
                  />
                </Box>
              )}
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography gutterBottom>
                Rotation: {selectedElement.rotation}°
              </Typography>
              <Slider
                value={selectedElement.rotation}
                min={0}
                max={360}
                onChange={(e, newValue) =>
                  handleUpdateElement({ rotation: newValue })
                }
              />
            </Box>
          </Box>
        );

      case "image":
        return (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Image Properties
            </Typography>

            <Box sx={{ my: 2 }}>
              <Typography gutterBottom>
                Width: {selectedElement.width}px
              </Typography>
              <Slider
                value={selectedElement.width}
                min={10}
                max={500}
                onChange={(e, newValue) =>
                  handleUpdateElement({ width: newValue })
                }
              />
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography gutterBottom>
                Height: {selectedElement.height}px
              </Typography>
              <Slider
                value={selectedElement.height}
                min={10}
                max={500}
                onChange={(e, newValue) =>
                  handleUpdateElement({ height: newValue })
                }
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography gutterBottom>
                Rotation: {selectedElement.rotation}°
              </Typography>
              <Slider
                value={selectedElement.rotation}
                min={0}
                max={360}
                onChange={(e, newValue) =>
                  handleUpdateElement({ rotation: newValue })
                }
              />
            </Box>

            <Button variant="outlined" color="primary" fullWidth sx={{ mt: 2 }}>
              Replace Image
            </Button>
          </Box>
        );

      case "shape":
        return (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Shape Properties
            </Typography>

            <Box sx={{ my: 2 }}>
              <Typography gutterBottom>
                Width: {selectedElement.width}px
              </Typography>
              <Slider
                value={selectedElement.width}
                min={10}
                max={500}
                onChange={(e, newValue) =>
                  handleUpdateElement({ width: newValue })
                }
              />
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography gutterBottom>
                Height: {selectedElement.height}px
              </Typography>
              <Slider
                value={selectedElement.height}
                min={10}
                max={500}
                onChange={(e, newValue) =>
                  handleUpdateElement({ height: newValue })
                }
              />
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography gutterBottom>Fill Color</Typography>
              <Box
                sx={{
                  height: 36,
                  width: 36,
                  backgroundColor: selectedElement.fill,
                  border: "1px solid #ddd",
                  borderRadius: 1,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCurrentColor(selectedElement.fill);
                  setShowColorPicker(!showColorPicker);
                }}
              />
              {showColorPicker && (
                <Box sx={{ position: "absolute", zIndex: 2, mt: 1 }}>
                  <Box
                    sx={{
                      position: "fixed",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      zIndex: 1,
                    }}
                    onClick={() => setShowColorPicker(false)}
                  />
                  <SketchPicker
                    color={currentColor}
                    onChange={(color) => {
                      setCurrentColor(color.hex);
                      handleUpdateElement({ fill: color.hex });
                    }}
                    disableAlpha
                  />
                </Box>
              )}
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography gutterBottom>
                Border Width: {selectedElement.strokeWidth}px
              </Typography>
              <Slider
                value={selectedElement.strokeWidth}
                min={0}
                max={10}
                onChange={(e, newValue) =>
                  handleUpdateElement({ strokeWidth: newValue })
                }
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography gutterBottom>
                Rotation: {selectedElement.rotation}°
              </Typography>
              <Slider
                value={selectedElement.rotation}
                min={0}
                max={360}
                onChange={(e, newValue) =>
                  handleUpdateElement({ rotation: newValue })
                }
              />
            </Box>
          </Box>
        );

      default:
        return (
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Unknown element type
            </Typography>
          </Box>
        );
    }
  };

  // Tab panels content
  const renderTabPanel = (index) => {
    switch (index) {
      case 0: // Text tab
        return (
          <Box sx={{ p: 2 }}>
            <Button
              variant="contained"
              startIcon={<TextFieldsIcon />}
              onClick={handleAddText}
              fullWidth
            >
              Add Text
            </Button>

            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
              Text Styles
            </Typography>
            <Divider />

            <Grid container spacing={1} sx={{ mt: 1 }}>
              {["Heading", "Subheading", "Body Text", "Caption", "Fancy"].map(
                (style) => (
                  <Grid item xs={4} key={style}>
                    <Paper
                      sx={{
                        p: 1,
                        textAlign: "center",
                        height: 60,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        "&:hover": { boxShadow: 3 },
                      }}
                    >
                      <Typography
                        variant={
                          style === "Heading"
                            ? "h6"
                            : style === "Subheading"
                              ? "subtitle1"
                              : "body2"
                        }
                        sx={{
                          fontFamily: style === "Fancy" ? "cursive" : "inherit",
                          fontWeight: style === "Heading" ? "bold" : "normal",
                        }}
                      >
                        {style}
                      </Typography>
                    </Paper>
                  </Grid>
                )
              )}
            </Grid>

            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
              Font Family
            </Typography>
            <Divider />

            <Grid container spacing={1} sx={{ mt: 1 }}>
              {fonts.map((font) => (
                <Grid item xs={6} key={font.name}>
                  <Paper
                    sx={{
                      p: 1,
                      textAlign: "center",
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      "&:hover": { boxShadow: 3 },
                    }}
                  >
                    <Typography style={{ fontFamily: font.value }}>
                      {font.name}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case 1: // Elements tab
        return (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Shapes
            </Typography>
            <Divider />

            <Grid container spacing={1} sx={{ mt: 1 }}>
              {["Rectangle", "Circle", "Triangle", "Star", "Heart"].map(
                (shape) => (
                  <Grid item xs={4} key={shape}>
                    <Paper
                      sx={{
                        p: 1,
                        textAlign: "center",
                        height: 60,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        "&:hover": { boxShadow: 3 },
                      }}
                      onClick={() => handleAddShape(shape.toLowerCase())}
                    >
                      <Typography>{shape}</Typography>
                    </Paper>
                  </Grid>
                )
              )}
            </Grid>

            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
              Lines
            </Typography>
            <Divider />

            <Grid container spacing={1} sx={{ mt: 1 }}>
              {["Straight", "Dashed", "Dotted", "Arrow", "Curved"].map(
                (line) => (
                  <Grid item xs={4} key={line}>
                    <Paper
                      sx={{
                        p: 1,
                        textAlign: "center",
                        height: 60,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        "&:hover": { boxShadow: 3 },
                      }}
                    >
                      <Typography>{line}</Typography>
                    </Paper>
                  </Grid>
                )
              )}
            </Grid>

            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
              Icons
            </Typography>
            <Divider />

            {/* Icons grid would go here */}
          </Box>
        );

      case 2: // Upload tab
        return (
          <Box sx={{ p: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
            >
              Upload Image
            </Button>

            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Stock Photos
            </Typography>
            <Divider />

            <Grid container spacing={1} sx={{ mt: 1 }}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Grid item xs={6} key={item}>
                  <Paper
                    sx={{
                      aspectRatio: "4/3",
                      overflow: "hidden",
                      cursor: "pointer",
                      "&:hover": { boxShadow: 3 },
                    }}
                  >
                    <img
                      src={birthdayTemplate}
                      alt={`Stock ${item}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case 3: // Background tab
        return (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Colors
            </Typography>
            <Divider />

            <Grid container spacing={1} sx={{ mt: 1 }}>
              {[
                "#FFFFFF",
                "#F8E0E0",
                "#E0F8F7",
                "#ECF8E0",
                "#F7E8E8",
                "#E0ECF8",
              ].map((color) => (
                <Grid item xs={3} key={color}>
                  <Paper
                    sx={{
                      backgroundColor: color,
                      height: 40,
                      cursor: "pointer",
                      border: "1px solid #ddd",
                      "&:hover": { boxShadow: 3 },
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
              Patterns
            </Typography>
            <Divider />

            <Grid container spacing={1} sx={{ mt: 1 }}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Grid item xs={4} key={item}>
                  <Paper
                    sx={{
                      height: 60,
                      cursor: "pointer",
                      backgroundImage:
                        "linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3), linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3)",
                      backgroundSize: "10px 10px",
                      backgroundPosition: "0 0, 5px 5px",
                      "&:hover": { boxShadow: 3 },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top toolbar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          borderBottom: "1px solid #ddd",
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h6" sx={{ flexGrow: 0, mr: 2 }}>
          {template.title || "Design Editor"}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, mr: 2 }}>
          <IconButton onClick={handleUndo} disabled={historyIndex <= 0}>
            <UndoIcon />
          </IconButton>
          <IconButton
            onClick={handleRedo}
            disabled={historyIndex >= history.length - 1}
          >
            <RedoIcon />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          sx={{ mr: 1 }}
        >
          Save
        </Button>

        <Button variant="outlined" startIcon={<DownloadIcon />}>
          Download
        </Button>
      </Box>

      {/* Main content area */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        {/* Left sidebar - Elements panel */}
        <Paper
          elevation={0}
          sx={{
            width: 240,
            borderRight: "1px solid #ddd",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{ borderBottom: "1px solid #ddd" }}
          >
            <Tab icon={<TextFieldsIcon />} aria-label="Text" />
            <Tab icon={<ShapesIcon />} aria-label="Elements" />
            <Tab icon={<ImageIcon />} aria-label="Upload" />
            <Tab icon={<PaletteIcon />} aria-label="Background" />
          </Tabs>

          <Box sx={{ overflow: "auto", flexGrow: 1 }}>
            {renderTabPanel(currentTab)}
          </Box>
        </Paper>

        {/* Main canvas area */}
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "#f0f0f0",
            p: 3,
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "350px",
              height: "auto", // 5×7 inches aspect ratio at 70px per inch
              position: "relative",
              backgroundColor: template.design?.background || "#FFFFFF",
              overflow: "hidden",
            }}
          >
            {canvasElements.map(renderCanvasElement)}
              <img src={image} style={{width: "100%", height: "100%"}} />
          </Paper>
        </Box>

          {/* Right sidebar - Properties panel */}
        <Paper
          elevation={0}
          sx={{
            width: 280,
            borderLeft: "1px solid #ddd",
            display: "flex",
            flexDirection: "column",
            overflow: "auto"
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              p: 2,
              borderBottom: "1px solid #ddd",
              fontWeight: "medium",
            }}
          >
            Properties
          </Typography>

          {renderPropertiesPanel()}
        </Paper>
      </Box>
    </Box>
  );
};

export default Editor;
