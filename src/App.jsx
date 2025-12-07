//import './App.css'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";
import Nav from "./Nav.jsx";
import PromptCard from "./PromptCard.jsx";

function App() {
  return (
    <Box sx={{ width: "100%", p: 0 }}>
      <Nav />
      <PromptCard
        title="Title 1"
        description="Description 1"
        content={`Content 1
          Line 2 
          Line 3
          Line 4
          Line 5
          Line 6`}
      />
      <PromptCard
        title="Title 2"
        description="Description 2"
        content="Content 2"
      />
    </Box>
  );
}

export default App;
