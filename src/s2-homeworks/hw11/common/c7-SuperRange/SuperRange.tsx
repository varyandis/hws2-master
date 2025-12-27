import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        width: "200px",
        margin: "10px",
      }}
      {...props}
    />
  );
};

export default SuperRange;
