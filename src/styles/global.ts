import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    // Font Weights
    --regular: 400;
    --bold: 700;
    --black: 800;

    // Font Sizes
    --font-1: 10px;
    --font-2: 12px;
    --font-3: 14px;
    --font-4: 16px;
    --font-5: 18px;
    --font-6: 24px;
    --font-7: 28px;
    --font-8: 32px;
    --font-9: 48px;

    // Radii
    --radius-1: 4px;
    --radius-2: 8px;
    --radius-3: 12px;
    --radius-4: 50px;
    --radius-max: 99999px;

    // Spacing
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-7: 32px;
    --space-8: 48px;
    --space-9: 64px;
    --space-10: 128px;
    --space-11: 256px;
    --space-12: 512px;

    // Z-Indices
    --z-100: 100;
    --z-200: 200;
    --z-300: 300;
    --z-400: 400;
    --z-max: 999;

    // Blue Color Scale (dark->light)
    --blue-1: hsl(212 35.0% 9.2%);
    --blue-2: hsl(216 50.0% 11.8%);
    --blue-3: hsl(214 59.4% 15.3%);
    --blue-4: hsl(214 65.8% 17.9%);
    --blue-5: hsl(213 71.2% 20.2%);
    --blue-6: hsl(212 77.4% 23.1%);
    --blue-7: hsl(211 85.1% 27.4%);
    --blue-8: hsl(211 89.7% 34.1%);
    --blue-9: hsl(206 100% 50.0%);
    --blue-10: hsl(209 100% 60.6%);
    --blue-11: hsl(210 100% 66.1%);
    --blue-12: hsl(206 98.0% 95.8%);

    // Gray Color Scale (dark->light)
    --gray-1: hsl(230 20.0% 8.8%);
    --gray-2: hsl(230 20.1% 10.4%);
    --gray-3: hsl(230 19.8% 13.6%);
    --gray-4: hsl(230 19.6% 15.8%);
    --gray-5: hsl(230 19.4% 17.9%);
    --gray-6: hsl(230 19.2% 19.5%);
    --gray-7: hsl(230 19.0% 24.3%);
    --gray-8: hsl(230 18.6% 31.6%);
    --gray-9: hsl(230 19.0% 43.9%);
    --gray-10: hsl(230 18.2% 49.5%);
    --gray-11: hsl(230 19.0% 69.0%);
    --gray-12: hsl(230 19.0% 93.0%);

    // Green Color Scale (dark->light)
    --green-1: hsl(146 30.0% 7.4%);
    --green-2: hsl(155 44.2% 8.4%);
    --green-3: hsl(155 46.7% 10.9%);
    --green-4: hsl(154 48.4% 12.9%);
    --green-5: hsl(154 49.7% 14.9%);
    --green-6: hsl(154 50.9% 17.6%);
    --green-7: hsl(153 51.8% 21.8%);
    --green-8: hsl(151 51.7% 28.4%);
    --green-9: hsl(151 55.0% 41.5%);
    --green-10: hsl(151 49.3% 46.5%);
    --green-11: hsl(151 50.0% 53.2%);
    --green-12: hsl(137 72.0% 94.0%);

    // Red Color Scale (dark->light)
    --red-1: hsl(353 23.0% 9.8%);
    --red-2: hsl(357 34.4% 12.0%);
    --red-3: hsl(356 43.4% 16.4%);
    --red-4: hsl(356 47.6% 19.2%);
    --red-5: hsl(356 51.1% 21.9%);
    --red-6: hsl(356 55.2% 25.9%);
    --red-7: hsl(357 60.2% 31.8%);
    --red-8: hsl(358 65.0% 40.4%);
    --red-9: hsl(358 75.0% 59.0%);
    --red-10: hsl(358 85.3% 64.0%);
    --red-11: hsl(358 100% 69.5%);
    --red-12: hsl(351 89.0% 96.0%);

    // Amber Color Scale (dark->light)
    --amber-1: hsl(36 100% 6.1%);
    --amber-2: hsl(35 100% 7.6%);
    --amber-3: hsl(32 100% 10.2%);
    --amber-4: hsl(32 100% 12.4%);
    --amber-5: hsl(33 100% 14.6%);
    --amber-6: hsl(35 100% 17.1%);
    --amber-7: hsl(35 91.0% 21.6%);
    --amber-8: hsl(36 100% 25.5%);
    --amber-9: hsl(39 100% 57.0%);
    --amber-10: hsl(43 100% 64.0%);
    --amber-11: hsl(39 90.0% 69.8%);
    --amber-12: hsl(39 97.0% 93.2%);

    --lime-9: hsl(75 65% 80%);

    // Common Tones
    --background: var(--gray-3);
    --foreground: white;
    --foreground-low: var(--gray-11);
    --panel: var(--gray-6);
    --primary: var(--blue-9);
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }
  body {
      font-family: Lato, sans-serif;
      background: var(--background);
      color: var(--foreground);
  }
`;
