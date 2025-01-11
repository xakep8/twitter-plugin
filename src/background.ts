chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url?.includes("x.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["main.js"],
    });
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["styles.css"],
    });
  }
});