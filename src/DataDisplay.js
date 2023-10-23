import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
  deepOrange,
  deepPurple,
  lightGreen,
  lightBlue,
} from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";

function DataDisplay() {
  return (
    <div>
      <h4>Profiles that we have collected so far..</h4>
      <Stack
        direction="row"
        spacing={2}
      >
        <Tooltip
          title="Adam"
          arrow
        >
          <Avatar
            sx={{ bgcolor: deepOrange[400] }}
            alt="Adam"
            src="/static/images/avatar/1.jpg"
          />
        </Tooltip>
        <Tooltip
          title="Anna"
          arrow
        >
          <Avatar
            sx={{ bgcolor: deepPurple[500] }}
            alt="Anna"
            src="/static/images/avatar/2.jpg"
          />
        </Tooltip>
        <Tooltip
          title="Lily"
          arrow
        >
          <Avatar
            sx={{ bgcolor: lightGreen[600] }}
            alt="Lily"
            src="/static/images/avatar/3.jpg"
          />
        </Tooltip>
        <Tooltip
          title="Diana"
          arrow
        >
          <Avatar
            sx={{ bgcolor: lightBlue[600] }}
            alt="Diana"
            src="/static/images/avatar/4.jpg"
          />
        </Tooltip>
      </Stack>
    </div>
  );
}

export default DataDisplay;
