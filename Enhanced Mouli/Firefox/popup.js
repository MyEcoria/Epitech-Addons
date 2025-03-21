document.addEventListener('DOMContentLoaded', function() {
    const autoExpandCheckbox = document.getElementById('auto-expand');
    const highContrastCheckbox = document.getElementById('high-contrast');
    const darkThemeCheckbox = document.getElementById('dark-theme');

    browser.storage.local.get(['autoExpand', 'highContrast', 'darkTheme']).then((result) => {
      autoExpandCheckbox.checked = result.autoExpand || false;
      highContrastCheckbox.checked = result.highContrast || false;
      darkThemeCheckbox.checked = result.darkTheme || false;
    });

    autoExpandCheckbox.addEventListener('change', function() {
      browser.storage.local.set({ autoExpand: this.checked });
    });
    
    highContrastCheckbox.addEventListener('change', function() {
      browser.storage.local.set({ highContrast: this.checked });
    });

    darkThemeCheckbox.addEventListener('change', function() {
      browser.storage.local.set({ darkTheme: this.checked });
    });
  });
