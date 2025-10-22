document.addEventListener('DOMContentLoaded', function() {
    // Update current time in milliseconds
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        function updateTime() {
            timeElement.textContent = Date.now();
    }

    updateTime();// run immediately
    setInterval(updateTime, 100); // update every 100 milliseconds
}

    // Update year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
     const form = document.getElementById('contact-form');
    if(!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        //input fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        const successMessage = document.getElementById('form-success');

        //error fields
        const errors = {
            name: document.getElementById('error-name'),
            email: document.getElementById('error-email'),
            subject: document.getElementById('error-subject'),
            message: document.getElementById('error-message'),
        };

        let isValid = true;

        // Clear previous errors
        Object.values(errors).forEach(el=> el.textContent = '');

        // Validate name
        if(name.value.trim() === '') {
            errors.name.textContent = 'Full name is required.';
            isValid = false;
        }

        // Validate email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!emailPattern.test(email.value.trim())) {
            errors.email.textContent = 'Enter a valid email.';
            isValid = false;
        }

        // Validate subject
        if(subject.value.trim() === '') {
            errors.subject.textContent = 'Subject is required.';
            isValid = false;
        }

        // Validate message
        if(message.value.trim().length < 10) {
            errors.message.textContent = 'Message must be at least 10 characters.';
            isValid = false;
        }

        if(isValid) {
            successMessage.style.display = 'block';
            successMessage.textContent = 'Thank you, message sent successfully! Redirecting...';

            //Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = "success.html";
            }, 1500);
        }
    });
});

