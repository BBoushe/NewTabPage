// Helper function to get bookmarks from the 'Read Later' folder
function getReadLaterBookmarks() {
    return new Promise((resolve, reject) => {
      chrome.bookmarks.search({ title: 'Read Later' }, (folders) => {
        if (folders.length === 0) {
          reject("Read Later folder not found");
          return;
        }
        const folderId = folders[0].id;
        chrome.bookmarks.getChildren(folderId, resolve);
      });
    });
  }
  
  // Function to pick 2 random bookmarks and open them
  function pickAndOpenTwoBookmarks() {
    getReadLaterBookmarks().then((bookmarks) => {
      if (bookmarks.length < 2) {
        console.log("Not enough bookmarks to pick two.");
        return;
      }
  
      // Pick two random bookmarks
      let randomIndexes = [];
      while (randomIndexes.length < 2) {
        let randomIndex = Math.floor(Math.random() * bookmarks.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }
  
      // Open the bookmarks in new tabs and remove them from the folder
      randomIndexes.forEach((index) => {
        const bookmark = bookmarks[index];
        chrome.tabs.create({ url: bookmark.url });
        chrome.bookmarks.remove(bookmark.id);
      });
    }).catch((error) => {
      console.error(error);
    });
  }
  
  // Listen for a message from the content script to trigger bookmark handling
  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "openBookmarks") {
      pickAndOpenTwoBookmarks();
    }
  });
  