document.getElementById('openBookmarksButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "openBookmarks" });
  });
  