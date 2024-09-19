chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: "https://tv.cctv.com/live/cctv13" });
  console.log("Extension installed successfully.");
});