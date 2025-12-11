import { Box, Grid } from "@mui/material";
import PromptCard from "../PromptCard.jsx";
import general from "../data/general.js";

export default function PromptLibrary() {
  return (
    <Box sx={{ width: "100%" }}>
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
    </Box>
  );
}
