import React from "react";
import { Link } from "react-router-dom";
import { List, ListItemIcon, ListItemText, ListItem } from "@mui/material";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";

const NavList = () => {
  const navItems = [
    {
      id: 1,
      name: "Notes",
      icon: <Lightbulb />,
      router: "/",
    },
    {
      id: 2,
      name: "Archive",
      icon: <Archive />,
      router: "/archive",
    },
    {
      id: 3,
      name: "Bin",
      icon: <Delete />,
      router: "/delete",
    },
  ];
  return (
    <List >
      {navItems.map((item) => {
        return (
          <ListItem button key={item.id} >
            <Link
              to={`${item.router}`}
              style={{
                textDecoration: "none",
                display: "flex",
                color: "inherit",
              }}
            >
              <ListItemIcon style={{ alignItems: "center"}}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default NavList;
