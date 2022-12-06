const finishForm = () => {
    const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('name', 'login');
    const form = document.querySelector('.login-form');
    form.prepend(textInput);
    const passwordInput = document.querySelector('input[name="password"]');
    passwordInput.setAttribute('type', 'password');
};

finishForm();
