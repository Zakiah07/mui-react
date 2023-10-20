import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
  deepOrange,
  deepPurple,
  lightGreen,
  lightBlue,
} from "@mui/material/colors";

const DataDisplay = () => {
  return (
    <div>
      <h4>Profiles that we have collected so far..</h4>
      <Stack
        direction="row"
        spacing={2}
      >
        <Avatar
          sx={{ bgcolor: deepOrange[400] }}
          alt="Adam"
          src="/static/images/avatar/1.jpg"
        />
        <Avatar
          sx={{ bgcolor: deepPurple[500] }}
          alt="Anna"
          src="/static/images/avatar/2.jpg"
        />
        <Avatar
          sx={{ bgcolor: lightGreen[600] }}
          alt="Lily"
          src="/static/images/avatar/3.jpg"
        />
        <Avatar
          sx={{ bgcolor: lightBlue[600] }}
          alt="Diana"
          src="/static/images/avatar/4.jpg"
        />
      </Stack>
    </div>
  );
};

export default DataDisplay;
