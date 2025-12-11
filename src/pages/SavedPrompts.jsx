import { Box, Typography } from "@mui/material";
import FolderList from "../components/FolderList.jsx";

export default function SavedPrompts() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Saved Prompts
      </Typography>
      <FolderList />
    </Box>
  );
}
