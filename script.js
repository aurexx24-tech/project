// Show a popup when the page loads
alert("JavaScript is working!");

// Change theme colors
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.style.background = '#111';
    document.body.style.color = '#eee';
    alert("Dark Theme Applied!");
  } else {
    document.body.style.background = '#fff';
    document.body.style.color = '#111';
    alert("Light Theme Applied!");
  }
}

// Change font
function changeFont(font) {
  document.body.style.fontFamily = font + ", sans-serif";
  alert("Font changed to " + font);
}

