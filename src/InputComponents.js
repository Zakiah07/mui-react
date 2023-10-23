import React, { useState } from "react";
import {
  Button,
  Autocomplete,
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Box,
  Typography,
  Rating,
  Divider,
} from "@mui/material";

const top5Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
];

function InputComponents() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h3>What's your favourite movie from the list below?</h3>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top5Films}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Movie"
          />
        )}
      />
      <h3>Select your favourite fruits</h3>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Apple"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Orange"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Grape"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Banana"
        />
      </FormGroup>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          What's your gender
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>
      <Box
        sx={{
          "& > legend": { mt: 5 },
        }}
      >
        <Typography component="legend">Rate yourself</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(e, newValue) => {
            setValue(e.target.value, newValue);
          }}
        />
      </Box>
      <h3>Tell one word about yourself</h3>
      <TextField
        id="outlined-basic"
        label="Strength"
      />
      <TextField
        id="outlined-basic"
        label="Weakness"
      />
      <Divider
        variant="fullWidth"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      />
      <div>
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
}

export default InputComponents;
