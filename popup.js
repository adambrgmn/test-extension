const newButton = document.getElementById('button-new');
const currentButton = document.getElementById('button-current');

newButton.addEventListener('click', () => {
  const url = document.getElementById('input-new').value;
  chrome.runtime.sendMessage({ event: 'NEW', url });
});

currentButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ event: 'CURRENT' });
});
