import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { promptCategories, folders } from "../constants/constant";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

export default function CustomPromptForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
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
    if (!validateForm()) {
      return;
    }
    if (onSubmit) {
      onSubmit(values);
    }
    console.log("form submit", values);
  };

  return (
    <Box component="form" onSubmit={submit}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, pt: 2 }}>
        <AutoStoriesOutlinedIcon sx={{ color: "#4F46E5" }} />
        <Typography variant="body1" fontWeight={500}>
          Create New Prompt
        </Typography>
      </Box>

      {textFields.map((field) => (
        <TextField
          key={field.name}
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={handleChange}
          error={!!errors[field.name]}
          helperText={errors[field.name]}
          fullWidth
          margin="normal"
          multiline={field.multiline}
          rows={field.rows}
          autoComplete="off"
        />
      ))}

      <Grid container spacing={2} my={1}>
        {selectFields.map((field) => (
          <Grid item size={6} key={field.name}>
            <InputLabel>{field.label}</InputLabel>
            <Select
              name={field.name}
              label={field.label}
              value={formData[field.name]}
              onChange={handleChange}
              fullWidth
            >
              {field.options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        ))}
      </Grid>

      <FormActionContainer>
        <Button
          type="button"
          variant="outlined"
          onClick={() => setFormData(initialFormData)}
          fullWidth
          sx={{
            color: "#0A0A0A",
            borderColor: "#D6D6D6",
            "&:hover": { backgroundColor: "#F5F5F5" },
          }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#4F46E5",
            "&:hover": { backgroundColor: "#4338CA" },
          }}
        >
          Create Prompt
        </Button>
      </FormActionContainer>
    </Box>
  );
}

const FormActionContainer = styled(Box)(({ theme }) => ({
  gap: theme.spacing(1),
  spacing: theme.spacing(1),
  marginTop: theme.spacing(3),
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  [theme.breakpoints.down(theme.breakpoints.values.tiny)]: {
    flexDirection: "column-reverse",
  },
}));

const initialFormData = {
  title: "",
  description: "",
  content: "",
  category: "custom",
  folder: "no folder",
};

const textFields = [
  {
    name: "title",
    label: "Title",
    placeholder: "E.g. Blog Post Outline Generator",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Brief description of what this prompt does",
  },
  {
    name: "content",
    label: "Prompt Content",
    placeholder: "Write your prompt here... Use [BRACKETS] for variables",
    multiline: true,
    rows: 6,
  },
];

const selectFields = [
  {
    name: "category",
    label: "Category",
    options: promptCategories,
  },
  {
    name: "folder",
    label: "Folder",
    options: folders,
  },
];
