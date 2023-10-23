import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Nav() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="History"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Places"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

export default Nav;