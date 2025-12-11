import { Box, Typography } from "@mui/material";
import CustomPromptForm from "../components/CustomPromptForm.jsx";

export default function PromptBuilder() {
  const handleSubmit = (formData) => {
    console.log("New prompt created:", formData);
    // Add logic to save the prompt
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Prompt Builder
      </Typography>
      <CustomPromptForm onSubmit={handleSubmit} />
    </Box>
  );
}
