import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

export default function CustomPromptForm({ onSubmit }) {
  const theme = useTheme();

  const [values, setValues] = useState({
    title: "",
    description: "",
    content: "",
    category: "custom",
    folder: "no folder",
  });
  const [errors, setErrors] = useState({});

  const categories = [
    { value: "writing", label: "Writing" },
    { value: "coding", label: "Coding" },
    { value: "business", label: "Business" },
    { value: "marketing", label: "Marketing" },
    { value: "productivity", label: "Productivity" },
    { value: "creative", label: "Creative" },
    { value: "analysis", label: "Analysis" },
    { value: "education", label: "Education" },
    { value: "custom", label: "Custom" },
  ];

  const folders = [
    { value: "no folder", label: "No Folder" },
    { value: "inbox", label: "Inbox" },
    { value: "work", label: "Work" },
    { value: "personal", label: "Personal" },
    { value: "archive", label: "Archive" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!values.title.trim()) {
      newErrors.title = "Title is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (onSubmit) onSubmit(values);
    else console.log("form submit", values);
  };

  return (
    <Box component="form" onSubmit={submit}>
      <TextField
        name="title"
        label="Title"
        placeholder="E.g. Blog Post Outline Generator"
        value={values.title}
        onChange={handleChange}
        error={!!errors.title}
        helperText={errors.title}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        name="description"
        label="Description"
        placeholder="Brief description of what this prompt does"
        value={values.description}
        onChange={handleChange}
        error={!!errors.description}
        helperText={errors.description}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        name="content"
        label="Prompt Content"
        placeholder="Write your prompt here... Use [BRACKETS] for variables"
        multiline
        rows={6}
        value={values.content}
        onChange={handleChange}
        error={!!errors.content}
        helperText={errors.content}
        fullWidth
        required
        margin="normal"
      />

      <Grid container spacing={2} my={1}>
        <Grid item size={6}>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            label="Category"
            defaultValue="custom"
            value={values.category}
            onChange={handleChange}
            fullWidth
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item size={6}>
          <InputLabel>Folder</InputLabel>
          <Select
            name="folder"
            label="Folder"
            defaultValue="no folder"
            value={values.folder}
            onChange={handleChange}
            fullWidth
          >
            {folders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>

      <Box
        spacing={1}
        my={3}
        gap={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          [theme.breakpoints.down(theme.breakpoints.values.tiny)]: {
            flexDirection: "column-reverse",
          },
        }}
      >
        <Button
          type="button"
          variant="outlined"
          onClick={() =>
            setValues({
              title: "",
              description: "",
              content: "",
              category: "custom",
              folder: "no folder",
            })
          }
          fullWidth
        >
          Cancel
        </Button>

        <Button type="submit" variant="contained" fullWidth>
          Create Prompt
        </Button>
      </Box>
    </Box>
  );
}
