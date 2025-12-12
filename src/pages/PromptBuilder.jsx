import { Box, Typography } from "@mui/material";
import CustomPromptForm from "../components/CustomPromptForm.jsx";

export default function PromptBuilder() {
  const handleSubmit = (formData) => {
    console.log("New prompt created:", formData);
    // Add logic to save the prompt
  };

  return (
    <Box sx={{ px: 2 }}>
      <CustomPromptForm onSubmit={handleSubmit} />
    </Box>
  );
}
