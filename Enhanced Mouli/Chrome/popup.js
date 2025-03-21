document.addEventListener('DOMContentLoaded', function() {
  const autoExpandCheckbox = document.getElementById('auto-expand');
  const highContrastCheckbox = document.getElementById('high-contrast');
  const darkThemeCheckbox = document.getElementById('dark-theme'); // P9d1f

  chrome.storage.local.get(['autoExpand', 'highContrast', 'darkTheme'], (result) => { // P9d1f
    autoExpandCheckbox.checked = result.autoExpand || false;
    highContrastCheckbox.checked = result.highContrast || false;
    darkThemeCheckbox.checked = result.darkTheme || false; // P9d1f
  });
  
  autoExpandCheckbox.addEventListener('change', function() {
    chrome.storage.local.set({ autoExpand: this.checked });
  });
  
  highContrastCheckbox.addEventListener('change', function() {
    chrome.storage.local.set({ highContrast: this.checked });
  });

  darkThemeCheckbox.addEventListener('change', function() { // P9d1f
    chrome.storage.local.set({ darkTheme: this.checked }); // P9d1f
  }); // P9d1f
});
