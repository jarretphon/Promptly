import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Avatar, Box, Typography, Divider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import PromptLibrary from "./pages/PromptLibrary.jsx";
import SavedPrompts from "./pages/SavedPrompts.jsx";
import PromptBuilder from "./pages/PromptBuilder.jsx";
import logo from "./assets/images/promptly-icon.png";

function App() {
  return (
    <Box sx={{ width: "100%", p: 0 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          padding: 2,
        }}
      >
        <Avatar src={logo} alt="Promptly Logo" sx={{ width: 32, height: 32 }} />
        <Typography variant="h6">Promptly</Typography>
        <Nav ml={"auto"} />
      </Box>
      <Divider />
      <Routes>
        <Route path="/" element={<PromptLibrary />} />
        <Route path="/saved" element={<SavedPrompts />} />
        <Route path="/builder" element={<PromptBuilder />} />
      </Routes>
    </Box>
  );
}

export default App;
