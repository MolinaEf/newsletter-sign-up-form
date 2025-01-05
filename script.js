const form = document.getElementById('form');
const container1 = document.getElementById('container1');
const errorMsg = document.getElementById('email-error');
const confirmationScreen = document.getElementById('confirmation-screen');
const submit = document.getElementById('submit');
const emailText = document.getElementById('email-in-confirmation');
const input = document.getElementById('email');
const dismissButton = document.getElementById('dismiss-button');


form.addEventListener('submit', handleSubmit);

dismissButton.addEventListener('click', handleDismiss);

function validateEmail(email){
    const emailRegex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailRegex.test(email)){
        return true;
        console.log('true');
    }
    else{
        return false;
    }
}

function handleSubmit(event){
    event.preventDefault();

    let email = form.email.value.trim();

    if(validateEmail(email)){
        confirmationScreen.classList.remove('hide');
        container1.classList.add('hide');
        emailText.innerText = email;
    }
    else{
        errorMsg.classList.remove('hide');
        input.style.border = '1px solid var(--tomato)';
        input.style.color = 'var(--tomato)';
        input.style.backgroundColor = 'var(--light-tomato)';
    }
}

function handleDismiss(){
    container1.classList.remove('hide');
    confirmationScreen.classList.add('hide');
}