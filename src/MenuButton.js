import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function MenuButton() {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleClick = (e) => {
    setAnchor(e.target);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        variant="contained"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuButton;
