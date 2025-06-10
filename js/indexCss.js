export async function getIndexCss() {
  const response = await fetch("../css/index.css");
  if (!response.ok) {
    throw new Error("Could not load index.css");
  }
  const cssText = await response.text();
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(cssText);
  return sheet;
}