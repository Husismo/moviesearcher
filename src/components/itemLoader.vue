<template>
  <svg
    role="img"
    width="255"
    height="450"
    aria-labelledby="loading-aria"
    viewBox="0 0 255 450"
    preserveAspectRatio="none"
  >
    <title id="loading-aria">Loading...</title>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      clip-path="url(#clip-path)"
      style="fill: url('#fill')"
    ></rect>
    <defs>
      <clipPath id="clip-path">
        <rect x="0" y="0" rx="20" ry="20" width="255" height="386" />
        <rect x="0" y="390" rx="15" ry="15" width="255" height="43" />
      </clipPath>
      <linearGradient id="fill">
        <stop offset="0.599964" stop-color="#f2f2f2" stop-opacity="1">
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="1.59996" stop-color="#ffffff" stop-opacity="1">
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="2.59996" stop-color="#f2f2f2" stop-opacity="1">
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
  </svg>
</template>
<script></script>
