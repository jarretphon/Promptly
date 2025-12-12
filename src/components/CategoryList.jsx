import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export default function CategoryList({ categories, header }) {
  return (
    <List>
      {header && <ListItemText primary={header} sx={{ px: 2 }} />}
      {categories.map((category) => {
        const IconComponent = category.icon;
        return (
          <ListItemButton sx={{ py: 0.5 }}>
            <ListItemIcon>
              <IconComponent fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={category.label} />
            <Typography
              variant="caption"
              color={(theme) => theme.palette.grey[500]}
            >
              {category.count}
            </Typography>
          </ListItemButton>
        );
      })}
    </List>
  );
}
