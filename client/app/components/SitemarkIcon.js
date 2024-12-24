'use client';

import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function SitemarkIcon() {
  return (
    <SvgIcon sx={{ height: 50, width: 100, mr: 2 }}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="50"
      viewBox="0 0 150 50"
    >
      <text
        x="0"
        y="42"
        fontFamily="Inter,sans-serif"
        fontWeight="800"
        fontSize="48"
        fill="#027af2"
      >
        BFX
      </text>
    </svg>
    </SvgIcon>
  );
}
