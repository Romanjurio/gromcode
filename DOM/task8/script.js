const createButton = (buttonText) => {
  const btn = document.createElement("button");
  btn.innerHTML = buttonText;
  document.body.append(btn);
};

createButton('submit');
