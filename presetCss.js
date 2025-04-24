export const presetCss = `
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  html, body {
    height: 100%;
    font-family: system-ui, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    background-color: #fff;
    color: #000;
  }

  body {
    margin: 0;
  }

  img, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button, input, optgroup, select, textarea {
    font: inherit;
    color: inherit;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }
`;