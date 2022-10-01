const input = document.querySelectorAll('input')

const form = document.querySelector('.card-form')
const thank_you = document.querySelector('.thank-you')
const error = document.querySelectorAll('form span')

const btnConfirm = document.querySelector('.confirm')
const btnContinue = document.querySelector('.continue')

for (let i = 0; i < input.length; i++) {
    
    // CC NAME
    input[0].onkeyup = ()=>{

        if (input[0].value == '' || !isNaN(input[0].value)) {
           error[0].textContent = 'First name cannot be empty' ;
           input[0].classList.add('error');
           
           return false;
        }else{
            error[0].textContent = '' 
            input[0].classList.remove('error');
            input[0].classList.add('keyup');

            return true;
        }
    }

    // CC NUMBER

    input[1].onkeyup = ()=>{
        var letters = /\w+/
        if (input[1].value == '') {
           error[1].textContent = 'Card number cannot be empty' ;
           input[1].classList.add('error');
           return false;
        }else if (input[1].value.length == 4 || input[1].value.length == 9 || input[1].value.length == 14) {
            input[1].value = input[1].value + ' ';
            return false;
        }else if (input[1].value.length != 19 || letters.test(input[1].value)) {
            error[1].textContent = 'Card number is not valid' ;
            input[1].classList.add('error');
            return false;
        }
        else {
            error[1].textContent = '' 
            input[1].classList.remove('error');
            input[1].classList.add('keyup');

            return true;
        }

        
    }

    // CC EXP

    input[2].onkeyup = ()=>{
        if (input[2].value == '') {
           error[2].textContent = 'Exp. date cannot be empty' ;
           input[2].classList.add('error');
           
           return false;
        }else if (input[2].value <= '00' || input[2].value >= '13') {
            error[2].textContent = 'Exp. date is not valid' ;
            input[2].classList.add('error');
            input[2].classList.remove('keyup');
            
            return false;
        }else{
            error[2].textContent = '' 
            input[2].classList.remove('error');
            input[2].classList.add('keyup');

            return true;
        }
    }
    input[3].onkeyup = ()=>{
        if (input[3].value == '') {
           error[2].textContent = 'Exp. date cannot be empty' ;
           input[3].classList.add('error');
           
           return false;
        }else if (input[3].value <= '2021' || input[3].value >= '2031') {
            error[2].textContent = 'Exp. date is not valid' ;
            input[3].classList.add('error');
            input[3].classList.remove('keyup');
            
            return false;
        }else{
            error[2].textContent = '' 
            input[3].classList.remove('error');
            input[3].classList.add('keyup');

            return true;
        }
    }

    // CC CVC

    input[4].onkeyup = ()=>{
        if (input[4].value == '') {
           error[3].textContent = 'CVC cannot be empty' ;
           input[4].classList.add('error');
           
           return false;
        }else if (input[4].value.length != 3 || isNaN(input[4].value)) {
            error[3].textContent = 'CVC is not valid' ;
            input[4].classList.add('error');
            input[4].classList.remove('keyup');

            return false;
        }
        else{
            error[3].textContent = '' 
            input[4].classList.remove('error');
            input[4].classList.add('keyup');

            return true;
        }
    }
}


btnConfirm.addEventListener('click', (e)=>{
    e.preventDefault();
    
    

    // Display User Input
    for (let i = 0; i < input.length; i++) {
        
        if (input[i].value == '' || error[0].textContent != '' || error[1].textContent != '' || error[2].textContent != '' || error[3].textContent != '') {
            document.querySelector('.error-msg').style.visibility = 'visible';
            
        }
        else{
            form.style.display = 'none';
            thank_you.style.display = 'flex';

            document.getElementById('card-name').textContent = input[0].value;
            document.getElementById('card-number').textContent = input[1].value;
            document.getElementById('card-month').textContent = input[2].value;
            document.getElementById('card-year').textContent = input[3].value.slice(2,4);
            document.getElementById('card-cvc').textContent = input[4].value;
            
        }
    }
});
btnConfirm.onblur = ()=>{
    document.querySelector('.error-msg').style.visibility = 'hidden';
}

// Continue
btnContinue.addEventListener('click', (e)=>{
    e.preventDefault();
    
    thank_you.style.display = 'none';
    form.style.display = 'flex';


    // Display default values
    document.getElementById('card-cvc').textContent = '000';
    document.getElementById('card-number').textContent = '0000 0000 0000 0000';
    document.getElementById('card-name').textContent = 'Jane Appleseed';
    document.getElementById('card-month').textContent = '00';
    document.getElementById('card-year').textContent = '00';

    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
        input[i].classList.remove('keyup');
    }
});

    

