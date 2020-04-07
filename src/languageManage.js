let oSettings = {
  lang: 'en',
  size: 'lit',
};

function getProperty(prop) {
  return oSettings[prop];
}

function changeLanguage() {
  // eslint-disable-next-line no-unused-expressions
  oSettings.lang === 'en' ? oSettings.lang = 'ru' : oSettings.lang = 'en';
}

function changeSize() {
  // eslint-disable-next-line no-unused-expressions
  oSettings.size === 'lit' ? oSettings.size = 'caps' : oSettings.size = 'lit';
}

window.addEventListener('beforeunload', () => {
  localStorage.setItem('languageSettings', JSON.stringify(oSettings));
});
window.addEventListener('load', () => {
  const object = JSON.parse(localStorage.getItem('languageSettings'));
  if (object) { oSettings = object; }
});

export {
  getProperty,
  changeLanguage,
  changeSize,
};
