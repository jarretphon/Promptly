import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";
import Nav from "./Nav.jsx";
import PromptCard from "./PromptCard.jsx";
import Grid from "@mui/material/Grid";
import general from "./data/general.js";
import FolderList from "./components/FolderList.jsx";
import NewFolderDialog from "./components/NewFolderDialog.jsx";
import CustomPromptForm from "./components/CustomPromptForm.jsx";

function App() {
  return (
    <Box sx={{ width: "100%", p: 0 }}>
      <Nav />
      <Grid container spacing={1}>
        {general.map((prompt) => (
          <Grid item size={{ xs: 12, md: 6 }} key={prompt.id}>
            <PromptCard
              key={prompt.id}
              title={prompt.title}
              description={prompt.description}
              content={prompt.content}
            />
          </Grid>
        ))}
      </Grid>
      <CustomPromptForm />
    </Box>
  );
}

export default App;
