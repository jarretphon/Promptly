import { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Dialog,
  DialogContent,
  IconButton,
  DialogContentText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CircleIcon from "@mui/icons-material/Circle";
import { folderColors } from "../constants/constant";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2.5),
  },
  "& .MuiDialog-paper": {
    borderRadius: theme.shape.borderRadius * 2,
  },
}));

export default function NewFolderDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(folderColors[0]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <StyledDialog onClose={handleClose} open={open}>
        <DialogContent>
          <DialogContentText
            fontWeight={700}
            fontSize="1.125rem"
            variant="body1"
            id="customized-dialog-title"
          >
            Create New Folder
          </DialogContentText>
          <CloseDialogButton
            aria-label="close"
            size="small"
            onClick={handleClose}
          >
            <CloseIcon />
          </CloseDialogButton>

          <TextField
            type="text"
            autoFocus
            required
            placeholder="Folder name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            size="small"
            sx={{ my: 2 }}
          />

          <DialogContentText variant="body2" fontWeight={500}>
            Color
          </DialogContentText>
          <Grid container spacing={0.5} mt={1} mb={2}>
            {folderColors.map((color) => (
              <Grid item key={color}>
                <ColorOption
                  chipColor={color}
                  selected={selectedColor === color}
                  onClick={() => setSelectedColor(color)}
                >
                  <CircleIcon fontSize="large" />
                </ColorOption>
              </Grid>
            ))}
          </Grid>

          <CreateFolderButton>Create Folder</CreateFolderButton>
        </DialogContent>
      </StyledDialog>
    </>
  );
}

const CloseDialogButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.grey[500],
}));

const CreateFolderButton = styled((props) => {
  return (
    <Button
      type="submit"
      variant="contained"
      size="small"
      startIcon={<CreateNewFolderIcon />}
      fullWidth
      disableElevation
      {...props}
    />
  );
})(({ theme }) => ({
  color: "#FAFAFA",
  backgroundColor: "#171717",
  "&:hover": {
    opacity: 0.9,
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  typography: theme.typography.button,
}));

const ColorOption = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "chipColor" && prop !== "selected",
})(({ theme, chipColor, selected }) => ({
  padding: 0,
  color: chipColor,
  outline: selected ? "rgba(10, 10, 10, 0.5) solid 1px" : "none",
  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.shorter,
  }),
  transformOrigin: "center",
  "&:hover": {
    transform: selected ? "none" : "scale(1.15)",
  },
}));
