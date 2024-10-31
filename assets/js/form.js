var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

//Name validation
function validateName() {

    var name = document.getElementById('name-field').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;

    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#11ff00"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';
    return true;

}

//mail validation
function validateEmail() {
    var email = document.getElementById('email-field').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#11ff00"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';
    return true;

}

//subject validation
function validateSubject() {
    var subject = document.getElementById('subject-field').value;
    if (subject.length == 0) {
        subjectError.innerHTML = 'Subject is required';
        return false;
    }

    if (subject.length < 10 || subject.length > 50) {
        subjectError.innerHTML = 'min 10 characters';
        return false;
    }

    subjectError.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#11ff00"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';
    return true;


}

//message validation
function validateMessage() {
    var message = document.getElementById('message-field').value;
    var required = 20;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#11ff00"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';
    return true;
}

//submit validation
function submitForm() {
    if (!validateName() || !validateEmail() || !validateSubject() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function () {
            submitError.style.display = 'none';
         }, 3000);

        return false;
    }
}
