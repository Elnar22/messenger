import "./dialogList.styles.css";
import { ListItemButton, ListItemText } from "@mui/material";

export const Dialog = ({ author }) => {
  return (
    <ListItemButton component="a" href="#simple-list">
      <ListItemText primary={author} />
    </ListItemButton>
  );
};
