<template>
  <svg
    role="img"
    width="1092"
    height="390"
    aria-labelledby="loading-aria"
    viewBox="0 0 1092 390"
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
        <rect x="0" y="-1" rx="20" ry="20" width="255" height="390" />
        <rect x="295" y="95" rx="5" ry="5" width="350" height="12" />
        <rect x="295" y="40" rx="5" ry="5" width="250" height="40" />
        <rect x="295" y="115" rx="5" ry="5" width="345" height="12" />
        <rect x="295" y="135" rx="5" ry="5" width="348" height="12" />
        <rect x="295" y="155" rx="5" ry="5" width="340" height="12" />
        <rect x="295" y="175" rx="5" ry="5" width="347" height="12" />
        <rect x="295" y="195" rx="5" ry="5" width="300" height="12" />
        <rect x="295" y="285" rx="14" ry="14" width="54" height="54" />
      </clipPath>
      <linearGradient id="fill">
        <stop offset="0.599964" stop-color="#191817" stop-opacity="1">
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="1.59996" stop-color="#454340" stop-opacity="1">
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="2.59996" stop-color="#191817" stop-opacity="1">
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
