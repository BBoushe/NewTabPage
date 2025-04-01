import BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode;

function handleReadAction(): void {
    openRandomBookmark("Read Later");
}

function handleWatchAction(): void {
    openRandomBookmark("Watch Later");
}

function getBookmarksFromFolder(folderTitle: string): Promise<any> {
    return new Promise((resolve, reject) => {
        chrome.bookmarks.search({ title: folderTitle }, (folders: BookmarkTreeNode[]) => {
            if(folders.length === 0){
                reject(`${folderTitle} folder doesn't exist`);
                return;
            }
            const folderId = folders[0].id;
            chrome.bookmarks.getChildren(folderId, resolve);
        });
    });
}

async function openRandomBookmark(folderTitle: string): Promise<void> {
    try{
        const bookmarks: BookmarkTreeNode[] = await getBookmarksFromFolder(folderTitle);

        if(bookmarks.length < 1){
            console.error(`No bookmarks found for folder ${folderTitle}`);
            return;
        }

        const randomIndex: number = Math.floor(Math.random() * bookmarks.length);
        const bookmark: BookmarkTreeNode = bookmarks[randomIndex];

        await chrome.tabs.create({ url: bookmark.url });
        // await chrome.bookmarks.remove(bookmark.id); For testing purposes
    }catch(e){
        console.error("Failed to open bookmark: ", e);
    }
}

export { handleReadAction, handleWatchAction };