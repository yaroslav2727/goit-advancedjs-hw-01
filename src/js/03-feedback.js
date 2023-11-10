import throttle from "lodash.throttle";

const FORM_KEY = "feedback-form-state";

const formEl = document.querySelector(".feedback-form");

let settingsObj = initializeForm(formEl);

formEl.addEventListener("input", throttle(onInput, 500));
formEl.addEventListener("submit", onSubmit);

function onInput(event) {
  if (event.target.nodeName === "INPUT") {
    settingsObj.email = event.target.value;
  }
  if (event.target.nodeName === "TEXTAREA") {
    settingsObj.message = event.target.value;
  }
  localStorage.setItem(FORM_KEY, JSON.stringify(settingsObj));
}

function onSubmit(event) {
  event.preventDefault();
  if (!settingsObj.email || !settingsObj.message) {
    alert("Fill in every field, please.");
    return;
  }
  console.log(settingsObj);
  console.log(`EMAIL: ${settingsObj.email}\nMESSAGE: ${settingsObj.message}`);
  localStorage.removeItem(FORM_KEY);
  settingsObj = initializeForm(event.currentTarget);
}

function initializeForm(formElement, key = FORM_KEY) {
  const settingsObj = JSON.parse(localStorage.getItem(key)) ?? {
    email: "",
    message: "",
  };

  formElement.elements.email.value = settingsObj.email;
  formElement.elements.message.value = settingsObj.message;

  return settingsObj;
}
