import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export const folderColors = [
  "#647488",
  "#EF4444",
  "#F97316",
  "#F59E0B",
  "#22C55E",
  "#14B8A6",
  "#3B82F6",
  "#6366F1",
  "#A855F7",
  "#EC4899",
];

export const defaultCategories = [
  {
    value: "all",
    label: "All Prompts",
    icon: LibraryBooksOutlinedIcon,
    count: 8,
  },
  { value: "favourites", label: "Favourites", icon: StarRoundedIcon, count: 0 },
];

export const promptCategories = [
  { value: "writing", label: "Writing", icon: NoteAltOutlinedIcon, count: 1 },
  { value: "coding", label: "Coding", icon: CodeOutlinedIcon, count: 1 },
  {
    value: "business",
    label: "Business",
    icon: WorkOutlineOutlinedIcon,
    count: 1,
  },
  {
    value: "marketing",
    label: "Marketing",
    icon: CampaignOutlinedIcon,
    count: 1,
  },
  {
    value: "productivity",
    label: "Productivity",
    icon: OfflineBoltOutlinedIcon,
    count: 1,
  },
  { value: "creative", label: "Creative", icon: PaletteOutlinedIcon, count: 1 },
  {
    value: "analysis",
    label: "Analysis",
    icon: InsertChartOutlinedOutlinedIcon,
    count: 1,
  },
  {
    value: "education",
    label: "Education",
    icon: SchoolOutlinedIcon,
    count: 1,
  },
  { value: "custom", label: "Custom", icon: LibraryBooksOutlinedIcon },
];

export const folders = [
  { value: "no folder", label: "No Folder" },
  { value: "inbox", label: "Inbox" },
  { value: "work", label: "Work" },
  { value: "personal", label: "Personal" },
  { value: "archive", label: "Archive" },
];
