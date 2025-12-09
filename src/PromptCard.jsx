import { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const forwardContent = (content) => {
  chrome.runtime.sendMessage({
      action: "forward_to_webpage",
      content: content
  });
}

export default function PromptCard({ title, description, content }) {
  const [previewed, setPreviewed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <Card
      onMouseEnter={() => setPreviewed(true)}
      onMouseLeave={() => {
        setPreviewed(false);
        setExpanded(false);
      }}
      sx = {{ 
        boxShadow: theme => theme.shadows[previewed ? 3 : 1], 
        transition: theme => theme.transitions.create('box-shadow', { duration: theme.transitions.duration.shortest }) 
      }}
    >
      <CardHeader
        title={title}
        subheader={description}
        slotProps={{
          title: { variant: "body1" },
          subheader: { variant: "body2" },
        }}
        action={
          <CardActions disableSpacing>
            <IconButton size="small">
              <MoreVertIcon />
            </IconButton>
          </CardActions>
        }
      />
      <Collapse in={previewed} timeout="auto" unmountOnExit>
        <StyledCardContent>
          <Box
            sx={{ maxHeight: expanded ? "none" : 100 }}
            onClick={() => forwardContent(content)}
          >
            <StyledContentText>{content}</StyledContentText>
            {!expanded && <BottomFade aria-hidden />}
            <ExpandMore
              expand={expanded}
              onClick={(e) => handleExpandClick(e)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
        </StyledCardContent>
      </Collapse>
    </Card>
  );
}

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton size="small" {...other} />;
})(({ theme }) => ({
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: { transform: "translateX(-50%) rotate(0deg)" },
    },
    {
      props: ({ expand }) => !!expand,
      style: { transform: "translateX(-50%) rotate(180deg)" },
    },
  ],
  position: "absolute",
  left: "50%",
  bottom: 0,
  zIndex: 2000,
  pointerEvents: "auto",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  paddingVertical: theme.spacing(2),
  paddingHorizontal: theme.spacing(1.5),
  margin: theme.spacing(2),
  marginTop: theme.spacing(0),
  borderRadius: theme.shape.borderRadius * 2,
  overflow: "hidden",
  backgroundColor: theme.palette.grey[100],
  position: "relative",
  textOverflow: "ellipsis",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
  "&:active": {
    backgroundColor: theme.palette.grey[300],
  },
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.short,
  }),
}));

const BottomFade = styled((props) => {
  return <Box {...props} />;
})(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: "4em",
  pointerEvents: "none",
  zIndex: 1500,
  borderBottomRadius: theme.shape.borderRadius * 2,
  background: `linear-gradient(180deg, rgba(245,245,245,0) 0%, ${
    theme.palette.mode === "dark" ? "rgba(18,18,18,0.9)" : "rgba(245,245,245,1)"
  } 90%)`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledContentText = styled(Typography)(({ theme }) => ({
  whiteSpace: "pre-line",
  variant: theme.typography.body2,
  color: theme.palette.text.secondary,
}));
