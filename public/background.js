// Allows users to open the side panel by clicking the extension icons
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "forward_to_webpage") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, {
              action: "copy_to_textarea",
              content: msg.content
          });
      });
  }
});
