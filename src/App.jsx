import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import PromptLibrary from "./pages/PromptLibrary.jsx";
import SavedPrompts from "./pages/SavedPrompts.jsx";
import PromptBuilder from "./pages/PromptBuilder.jsx";

function App() {
  return (
    <Box sx={{ width: "100%", p: 0 }}>
      <Nav />
      <Routes>
        <Route path="/" element={<PromptLibrary />} />
        <Route path="/saved" element={<SavedPrompts />} />
        <Route path="/builder" element={<PromptBuilder />} />
      </Routes>
    </Box>
  );
}

export default App;
