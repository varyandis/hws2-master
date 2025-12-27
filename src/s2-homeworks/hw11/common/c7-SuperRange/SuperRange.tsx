import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        height: 4,
        px: 1,
      }}
      {...props}
    />
  );
};

export default SuperRange;
