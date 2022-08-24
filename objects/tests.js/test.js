////// DECLARING MODULE DEPENDECIES //////
const documentMock = (() => ({
  querySelector: (selector) => ({
    innerHTML: null,
  }),
}))();

const Formatter = ((doc) => {
  const timesRun = [];
  const log = (message) => console.log(`[${Date.now()}] logger: ${message}`);

  const makeUpperCase = (text) => {
    log("Making Upper Case");
    return text.toUpperCase();
  };
  /*
  This wont run in a server side console, only in a browser
  We to add a check
  */
  const writeToDOM = (selector, message) => {
    doc.querySelector(selector).innerHTML = message;
  };
  return { makeUpperCase, writeToDOM };
})(document || documentMock);

Formatter.writeToDOM(".module", "Hello, greetings from  the under World");
Formatter.makeUpperCase("Hello, greetings from  Planet of REDDES");
Formatter.makeUpperCase("Hello, greetings from  Weird people");
