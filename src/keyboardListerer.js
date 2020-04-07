import * as language from './languageManage';
import keyboardMapping from './keyboardMapping';
import * as rerender from './keyboardRenderer';

const rootKeyboardId = 'rootKeyboard';
const oBody = document.getElementById('body');
function visibleClick() {
  document.getElementById(rootKeyboardId).addEventListener('mousedown', (oEvent) => {
    if (oEvent.target.classList.contains('button')) {
      oEvent.target.classList.add('active');
    }
  });
  document.getElementById(rootKeyboardId).addEventListener('mouseup', () => {
    document.querySelectorAll('.active').forEach((item) => {
      item.classList.remove('active');
    });
  });
}

function appendKeyboardListeners() {
  document.addEventListener('keydown', (oEvent) => {
    document.getElementById(oEvent.keyCode).classList.add('active');
    if (oEvent.keyCode === 20) {
      language.changeSize();
      rerender.rerenderKeyboard(oBody, language.getProperty('lang'), language.getProperty('size'));
    }
    if (oEvent.keyCode === 8) {
      const textField = document.getElementById('field');
      const newValue = textField.value.slice(0, -1);
      textField.value = newValue;
    }
    if (oEvent.shiftKey && oEvent.altKey) {
      language.changeLanguage();
      rerender.rerenderKeyboard(oBody, language.getProperty('lang'), language.getProperty('size'));
    }
  });
  document.addEventListener('keyup', (oEvent) => {
    document.getElementById(oEvent.keyCode).classList.remove('active');
  });

  document.addEventListener('keydown', (oEvent) => {
    const char = keyboardMapping[language.getProperty('lang')][oEvent.keyCode][language.getProperty('size')];
    if (char.length === 1) document.getElementById('field').value += char;
  });
}

export {
  appendKeyboardListeners,
  visibleClick,
};
