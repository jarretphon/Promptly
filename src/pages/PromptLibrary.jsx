import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PromptCard from "../PromptCard.jsx";
import general from "../data/general.js";
import { defaultCategories, promptCategories } from "../constants/constant.js";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FolderList from "../components/FolderList.jsx";
import CategoryList from "../components/CategoryList.jsx";

export default function PromptLibrary() {
  return (
    <Box sx={{ width: "100%" }}>
      <CategoryList categories={defaultCategories} />
      <CategoryList categories={promptCategories} header={"Categories"} />
      <FolderList />
    </Box>
  );
}
