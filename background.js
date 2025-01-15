chrome.runtime.onInstalled.addListener(() => {
    console.log("Productivity Tracker Installed");
});
chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        console.log("Active Tab URL:", tab.url);
    });
});