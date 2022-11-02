/*=============== Show Menu =============== */

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== Remove Menu Mobile =============== */

/*=============== Background header =============== */
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the scroll-header class to header tag
    if(this.scrollY >=50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader);    

/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
e.preventDefault();

// check if the field has a value
if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {

// add and remove color
contactMessage.classList.remove('color-light');
contactMessage.classList.add('color-dark');


// show message 
contactMessage.textContent = 'Write all the input fields';
} else {


// serviceID - templateID - #form - publickey
emailjs.sendForm('service_9ua5hz9','template_pawzl73','#contact-form','93WKQdb9sGj7hJGEu')
.then(() => {


// show message and add color, window + dot to open emoji
contactMessage.classList.add('color-light');
contactMessage.textContent = ('Message sent ✔');


// remove message after 5 seconds
setTimeout(() => {
 contactMessage.textContent = ''; 
}, 5000);
},
(error) => {
alert('OOPs! SOMETHIN WENT WRONG... ', error);
}
);

// clear input fields
contactName.value = '';
contactEmail.value = '';
Message.value = '';
}
};  

contactForm.addEventListener('submit', sendEmail);

/*=============== Style Switcher =============== */
