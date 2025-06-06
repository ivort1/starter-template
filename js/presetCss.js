export async function getPresetCss() {
  const response = await fetch("../css/preset.css");
  if (!response.ok) {
    throw new Error("Could not load preset.css");
  }
  const cssText = await response.text();
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(cssText);
  return sheet;
}