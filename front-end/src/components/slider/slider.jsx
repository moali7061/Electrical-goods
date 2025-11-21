import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

export default function RangeSlider({onRangeChange}) {
  const [value, setValue] = React.useState([0, 20000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onRangeChange) {
      onRangeChange(newValue);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={value}
        onChange={handleChange}
        min={0}
        max={20000}
        valueLabelDisplay="off"
      />

      {/* Numbers shown below the slider */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <Typography variant="body2">{value[0]}</Typography>
        <Typography variant="body2">{value[1]}</Typography>
      </Box>
    </Box>
  );
}
