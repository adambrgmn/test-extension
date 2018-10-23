function executeContent() {
  chrome.tabs.executeScript({ file: 'content.js' });
}

chrome.runtime.onMessage.addListener(({ event, url }) => {
  switch (event) {
    case 'NEW':
      chrome.tabs.create({ url }, executeContent);
      break;

    case 'CURRENT':
      executeContent();
      break;
  }
});
