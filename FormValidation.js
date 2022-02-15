console.log("Hii");
const Name = document.getElementById('name')
const Email = document.getElementById('email')
const phone = document.getElementById('phone')
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide()
$(`#success`).hide()

Name.addEventListener('blur', () => {
    console.log("BLur");
    //validate your phone
    let regx = /^[a-zA-Z0-9.\-_$@*!]{3,30}$/;
    let str = Name.value;
    console.log(regx, str)
    if (regx.test(str)) {
        console.log(`Your name is valid`);
        Name.classList.remove('is-invalid')
        validUser = true;
    } else {
        console.log("Your name is invalid");
        Name.classList.add('is-invalid')
        validUser = false;
    }
})
Email.addEventListener('blur', () => {
    console.log("BLur");
    //validate your phone
    let regx = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = Email.value;
    console.log(regx, str)
    if (regx.test(str)) {
        console.log(`Your email is valid`);
        Email.classList.remove('is-invalid')
        validEmail = true;
    } else {
        console.log("Your email is invalid");
        Email.classList.add('is-invalid')
        validEmail = false;
    }
})
phone.addEventListener('blur', () => {
    console.log("BLur");
    //validate your phone
    let regx = /^[0-9]{10}$/;
    let str = phone.value;
    console.log(regx, str)
    if (regx.test(str)) {
        console.log(`Your number is valid`);
        phone.classList.remove('is-invalid')
        validPhone = true;
    } else {
        console.log("Your number is invalid");
        phone.classList.add('is-invalid')
        validPhone = false
    }
})
let submit = document.getElementById('submit')
let failure = document.getElementById('failure')
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Clicked");
    if (validEmail && validUser && validPhone) {
        console.log('phone,email and Username is valid please sumbit the form');
        let success = document.getElementById('success')
        success.classList.add('show');
        //failure.classList.remove('show');
        $('#failure').hide()
        $(`#success`).show()
    } else {
        console.log("phone,email and username is invalid,please check and correct it then try to submit the form");
        let failure = document.getElementById('failure')
        failure.classList.add('show')
            //success.classList.remove('show')
        $(`#success`).hide()
        $(`#failure`).show()
    }
})