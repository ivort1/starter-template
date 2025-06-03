// presetStyles.js
export async function getPresetSheet() {
  // Check if the stylesheet is already cached
  if (window.presetSheet) return window.presetSheet;

  try {
    const response = await fetch('/preset.css'); // URL to your preset CSS file
    const cssText = await response.text();

    // Create a new CSSStyleSheet and populate it
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(cssText);

    // Cache it on the window object so subsequent calls reuse it.
    window.presetSheet = sheet;
    return sheet;
  } catch (error) {
    console.error('Error loading preset styles:', error);
    throw error;
  }
}