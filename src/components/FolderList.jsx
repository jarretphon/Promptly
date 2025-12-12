import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  IconButton,
} from "@mui/material";
import LensIcon from "@mui/icons-material/Lens";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import NewFolderDialog from "./NewFolderDialog";

function Folder({ color, name }) {
  return (
    <ListItemButton
      sx={{ borderRadius: (theme) => theme.shape.borderRadius, py: 0.5 }}
    >
      <ListItemIcon sx={{ color: color }}>
        <LensIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText primary={name} />
      <NavigateNextIcon sx={{ color: (theme) => theme.palette.grey[400] }} />
    </ListItemButton>
  );
}

export default function FolderList() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <List>
        <ListItem
          secondaryAction={
            <IconButton
              size="small"
              edge="end"
              aria-label="add folder"
              onClick={handleDialogOpen}
            >
              <AddIcon />
            </IconButton>
          }
        >
          <Typography variant="h6">Folders</Typography>
        </ListItem>
        <Folder color="rgba(201, 71, 71, 1)" name="Inbox" />
        <Folder color="rgba(74, 186, 74, 1)" name="Sent mail" />
        <Folder color="rgba(61, 61, 216, 1)" name="Drafts" />
        <Folder color="rgba(216, 171, 67, 1)" name="Spam" />
        <Folder color="#363636ff" name="Trash" />
      </List>
      <NewFolderDialog open={dialogOpen} onClose={handleDialogClose} />
    </>
  );
}
