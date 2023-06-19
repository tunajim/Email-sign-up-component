const form = document.forms["sign-up-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const errorMessage = e.target.parentNode.querySelector(".error");
  const input = form["email"];
  const email = form["email"].value;
  let value = form["email"].value;
  if (form["email"].checkValidity()) {
    removeFormError(errorMessage, input);
    clearPage();
    loadSuccessState(email);
  } else {
    activateFormError(errorMessage, input);
  }
});

function activateFormError(error, input) {
  error.classList.add("active");
  input.classList.add("invalid");
}

function removeFormError(error, input) {
  if (error.classList.contains("active")) {
    error.classList.remove("active");
  }

  if (input.classList.contains("invalid")) {
    input.classList.remove("invalid");
  }
  const email = form["email"].value;
}

function clearPage() {
  const main = document.getElementsByTagName("main")[0];
  let len = main.children.length;
  let i = 0;
  while (len > 0) {
    main.children[len - 1].remove();
    len--;
  }
}

function loadSuccessState(email) {
  const container = createElement("div", [
    "flex",
    "fl-between",
    "fl-column",
    "success-card",
  ]);
  container.style.paddingBottom = "1.5rem";
  const messageContainer = createElement("div", [
    "flex",
    "fl-column",
    "fl-gap",
    "success-container",
  ]);
  const successImage = createElement("img");
  successImage.setAttribute("src", "./assets/images/icon-success.svg");
  successImage.setAttribute("width", "64");
  successImage.setAttribute("height", "64");
  const header = createElement("h1", ["bold"], "Thanks for subscribing!");
  const description = createElement(
    "p",
    [],
    `A confirmation email has been sent to <span class="bold">${email}</span>.  Please open it and click the button inside to confirm your subscription.`
  );

  const button = createElement("button", ["bold"], "Dismiss message");
  button.style.margin = "1rem 0";

  messageContainer.append(successImage, header, description, button);
  container.append(messageContainer);
  document.getElementsByTagName("main")[0].append(container);
}

function createElement(el, arr, message) {
  const elem = document.createElement(`${el}`);

  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      elem.classList.add(`${arr[i]}`);
    }
  }

  if (message) {
    elem.innerHTML = `${message}`;
  }

  return elem;
}
