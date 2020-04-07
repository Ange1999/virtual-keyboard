import './css/style.css';
import * as keyboardListener from './keyboardListerer';
import * as renderer from './keyboardRenderer';
import * as language from './languageManage';

window.addEventListener('load', () => {
  const oBody = document.getElementById('body');
  renderer.renderTextarea(oBody);
  renderer.keyboardRenderer(oBody, language.getProperty('lang'), language.getProperty('size'));
  keyboardListener.appendKeyboardListeners();
  keyboardListener.visibleClick();
});
