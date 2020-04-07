import keyboardMapping from './keyboardMapping';
import * as language from './languageManage';

const rootKeyboardId = 'rootKeyboard';

function renderTextarea(oBody) {
  oBody.insertAdjacentHTML('afterbegin', '<textarea id="field" disabled rows="5"></textarea><p>Change Language: Shift+Alt</p>');
}
function keyboardRenderer(oBody, sLang, sSize) {
  oBody.insertAdjacentHTML('beforeend', `<div id ='${rootKeyboardId}'>
    <div class = "keyboardRow"><div class = "letter button" id="192">${keyboardMapping[sLang][192][sSize]}</div>
    <div class = "letter button"><span>${keyboardMapping[sLang][49][sSize]}</span><sup>!</sup></div>
    <div class = "letter button"><span>${keyboardMapping[sLang][50][sSize]}</span><sup>@</sup></div>
    <div class = "letter button"><span>${keyboardMapping[sLang][51][sSize]}</span><sup>#</sup></div>
    <div class = "letter button"><span>${keyboardMapping[sLang][52][sSize]}</span><sup>$</sup></div>
    <div class = "letter button"><span>${keyboardMapping[sLang][53][sSize]}</span><sup>%</sup></div>
    <div class = "letter button"><span>${keyboardMapping[sLang][54][sSize]}</span><sup>^</sup></div>
    <div class = "letter button"><span>${keyboardMapping[sLang][55][sSize]}</span><sup>?</sup></div>
    <div class = "letter button"><span>${keyboardMapping[sLang][56][sSize]}</span><sup>*</sup></div>
    <div class = "letter button"><span>${keyboardMapping[sLang][57][sSize]}</span><sup>(</sup></div>
    <div class = "letter button"><span>${keyboardMapping[sLang][48][sSize]}</span><sup>)</sup></div>
    <div class = "letter button"><span>-</span><sup>_</sup></div>
    <div class = "letter button"><span>=</span><sup>+</sup></div>
    <div class = "button backspace" id = "8">${keyboardMapping.en[8][sSize]}</div>
    </div>
    <div class = "keyboardRow"><div class = "letter button" id = "9">${keyboardMapping.en[9][sSize]}</div>
    <div class = "letter button" id = "81">${keyboardMapping[sLang][81][sSize]}</div><div class = "letter button"id = "87">${keyboardMapping[sLang][87][sSize]}</div>
    <div class = "letter button" id = "69">${keyboardMapping[sLang][69][sSize]}</div><div class = "letter button" id = "82">${keyboardMapping[sLang][82][sSize]}</div>
    <div class = "letter button" id = "84">${keyboardMapping[sLang][84][sSize]}</div><div class = "letter button" id = "89">${keyboardMapping[sLang][89][sSize]}</div>
    <div class = "letter button" id = "85">${keyboardMapping[sLang][85][sSize]}</div><div class = "letter button" id = "73">${keyboardMapping[sLang][73][sSize]}</div>
    <div class = "letter button" id = "79">${keyboardMapping[sLang][79][sSize]}</div><div class = "letter button" id = "80">${keyboardMapping[sLang][80][sSize]}</div>
    <div class = "letter button" id = "219">${keyboardMapping[sLang][219][sSize]}</div><div class = "letter button" id = "221">${keyboardMapping[sLang][221][sSize]}</div>
    <div class = "letter button" id = "220">${keyboardMapping[sLang][220][sSize]}</div><div class = "button delete"  id = "46">${keyboardMapping.en[46][sSize]}</div>
    </div>
    <div class = "keyboardRow"><div class = "button caps" id = "20">${keyboardMapping.en[20][sSize]}</div>
    <div class = "letter button" id = "65">${keyboardMapping[sLang][65][sSize]}</div><div class = "letter button" id = "83">${keyboardMapping[sLang][83][sSize]}</div>
    <div class = "letter button" id = "68">${keyboardMapping[sLang][68][sSize]}</div><div class = "letter button" id = "70">${keyboardMapping[sLang][70][sSize]}</div>
    <div class = "letter button" id = "71">${keyboardMapping[sLang][71][sSize]}</div><div class = "letter button" id = "72">${keyboardMapping[sLang][72][sSize]}</div>
    <div class = "letter button" id = "74">${keyboardMapping[sLang][74][sSize]}</div><div class = "letter button" id = "75">${keyboardMapping[sLang][75][sSize]}</div>
    <div class = "letter button" id = "76">${keyboardMapping[sLang][76][sSize]}</div><div class = "letter button" id = "186">${keyboardMapping[sLang][186][sSize]}</div>
    <div class = "letter button" id = "222">${keyboardMapping[sLang][222][sSize]}</div><div class = "button enter" id = "13">${keyboardMapping.en[13][sSize]}</div>
    </div>
    <div class = "keyboardRow"><div class = "button shift1" id = "16">${keyboardMapping.en[16][sSize]}</div>
    <div class = "letter button" id = "220">${keyboardMapping[sLang][220][sSize]}</div><div class = "letter button" id = "90">${keyboardMapping[sLang][90][sSize]}</div>
    <div class = "letter button" id = "88">${keyboardMapping[sLang][88][sSize]}</div><div class = "letter button" id = "67">${keyboardMapping[sLang][67][sSize]}</div>
    <div class = "letter button" id = "86">${keyboardMapping[sLang][86][sSize]}</div><div class = "letter button" id = "66">${keyboardMapping[sLang][66][sSize]}</div>
    <div class = "letter button" id = "78">${keyboardMapping[sLang][78][sSize]}</div><div class = "letter button" id = "77">${keyboardMapping[sLang][77][sSize]}</div>
    <div class = "letter button" id = "188">${keyboardMapping[sLang][188][sSize]}</div><div class = "letter button" id = "190">${keyboardMapping[sLang][190][sSize]}</div>
    <div class = "letter button" id = "191">${keyboardMapping[sLang][191][sSize]}</div><div class = "button" id = "38"><div id = "up"></div></div>
    <div class = "button shift2" id = "16">${keyboardMapping.en[16][sSize]}</div>
    </div>
    <div class = "keyboardRow"><div class = "button ctrl" id="17">${keyboardMapping.en[17][sSize]}</div>
    <div class = "button" id = "91">${keyboardMapping.en[91][sSize]}</div><div class = "button" id="18">${keyboardMapping.en[18][sSize]}</div>
    <div  class = "button space" id = "32">${keyboardMapping.en[32][sSize]}</div><div class = "button" id="18">${keyboardMapping.en[18][sSize]}</div>
    <div class = "button ctrl" id = "17">${keyboardMapping.en[17][sSize]}</div><div class = "button" id = "37"><div id = "left"></div></div>
    <div class = "button" id = "40"><div id = "down"></div></div>
    <div class = "button" id = "39"><div id = "right" ></div></div>
    </div> 
    </div>`);
  // eslint-disable-next-line no-use-before-define
  appendListenersToKeyboard(oBody, rootKeyboardId);
}

function deleteKeyboard(oBody) {
  const oKeyboard = document.getElementById(rootKeyboardId);
  oBody.removeChild(oKeyboard);
}

function rerenderKeyboard(oBody, sLang, sSize) {
  deleteKeyboard(oBody);
  keyboardRenderer(oBody, sLang, sSize);
}

function appendListenersToKeyboard(oBody, KeyboardId) {
  document.getElementById(KeyboardId).addEventListener('click', (oEvent) => {
    if (+oEvent.target.id === 20) {
      language.changeSize();
      rerenderKeyboard(oBody, language.getProperty('lang'), language.getProperty('size'));
    }
    if (+oEvent.target.id === 8) {
      const textField = document.getElementById('field');
      const newValue = textField.value.slice(0, -1);
      textField.value = newValue;
    }
    const char = keyboardMapping[language.getProperty('lang')][oEvent.target.id][language.getProperty('size')];
    if (char && char.length === 1) document.getElementById('field').value += char;
  });
}

export {
  keyboardRenderer,
  deleteKeyboard,
  renderTextarea,
  rerenderKeyboard,
};
