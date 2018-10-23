const newButton = document.getElementById('button-new');
const popupButton = document.getElementById('button-popup');
const currentButton = document.getElementById('button-current');

newButton.addEventListener('click', () => {
  const url = document.getElementById('input-new').value;
  chrome.runtime.sendMessage({ event: 'NEW', url });
});

popupButton.addEventListener('click', () => {
  const url = document.getElementById('input-popup').value;
  chrome.tabs.create({ url }, () => {
    chrome.tabs.executeScript({ file: 'content.js' });
  });
});

currentButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ event: 'CURRENT' });
});
