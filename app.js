'use strict'

const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const themeBtn = document.querySelector('.theme-btn');
const btnSubmit = document.getElementById('submit-btn-a');
const form = document.querySelector('.contact-form');

const pageTransitions = () => {
    //Buttom click active class.
    sectBtn.forEach( btnSect => {
        btnSect.addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            if(currentBtn[0] && currentBtn[0] !== btnSect) {
                currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
                this.className += ' active-btn';
            }
        })
    })
    //Sections Active
    allSections.addEventListener('click',(e) => {
        const id = e.target.dataset.id;
        // console.log(id);
        if(id){
            //Remove selected from
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            //Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            document.getElementById(id).classList.add('active');
        }
    })
}

//Toggle theme
themeBtn.addEventListener('click',()=>{
    let element = document.body;
    element.classList.toggle('light-mode');
})

//Button submit
// Name and Email validation Function.
const validation = (nameElement,emailElement,titleElement,messageElement) => {
    const name = nameElement.value;
    const email = emailElement.value;
    const subject = titleElement.value;
    const message = messageElement.value;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if( name ==='' || email ==='' || subject ===''|| message ===''){
        alert("Please fill all fields...!!!!!!");
        return false;
    }else if(!(email).match(validRegex)){
        emailElement.value = '';
        emailElement.placeholder = 'Email is not valid 👀.'
        return false;
    }else{
        return true;
    }
}


// Submit form with class function.
const submit_by_class = () => {
    const nameElement = document.getElementById("nameContact");
    const emailElement = document.getElementById("emailContact");
    const titleElement = document.getElementById('titleSubject');
    const messageElement = document.getElementById('message');
    const name = nameElement.value;
    const email = emailElement.value;
    const subject = titleElement.value;
    // Calling validation function
    if (validation(nameElement,emailElement,titleElement,messageElement)){ 
    const message = messageElement.value;
        const x = document.getElementsByClassName("contact-form");
        const body = `My name is: ${name},Subject: ${subject}.Message: ${message}`;
        //x.preventDefault();
        x[0].submit(); //form submission
        //alert(" Name : " + name + " n Email : " + email + " n Form Class : " + document.getElementById("contact-inputs").getAttribute("class") + "nn Form Submitted Successfully......");
        nameElement.value = '';
        emailElement.value = '';
        titleElement.value = '';
        messageElement.value = '';
        emailElement.placeholder = 'YOUR EMAIL';
    }   
}

btnSubmit.addEventListener('click',(e) => {
    e.preventDefault();
    submit_by_class(); 
})

pageTransitions();