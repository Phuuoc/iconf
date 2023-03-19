import * as React from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';

export default function InputComponent() {
  return (
    <Box
      sx={{
        py: 2,
        display: 'grid',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
  
    <span>a</span>
      <Input placeholder="" variant="solid" />
          <span>a</span>
      <Input placeholder="Type in here…" variant="soft" />
      <Input placeholder="Type in here…" variant="outlined" />
      <Input placeholder="Type in here…" variant="plain" />
    </Box>
  );
}