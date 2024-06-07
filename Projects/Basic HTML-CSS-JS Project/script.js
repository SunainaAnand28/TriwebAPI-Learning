function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting
    
    let isValid = true;
    
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const resume = document.getElementById('resume').value;
    
    // Regular expressions
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactRegex = /^\d{10}$/; 
    
    // Validate first name
    if (!nameRegex.test(firstName)) {
        alert('Please enter a valid first name.');
        isValid = false;
    }
    
    // Validate last name
    if (!nameRegex.test(lastName)) {
        alert('Please enter a valid last name.');
        isValid = false;
    }
    
    // Validate email
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email.');
        isValid = false;
    }
    
    // Validate contact number
    if (!contactRegex.test(contact)) {
        alert('Please enter a valid contact number (10 digits).');
        isValid = false;
    }
    
    // Validate date of birth
    if (!dob) {
        alert('Please enter a valid date of birth.');
        isValid = false;
    }
    
    // Validate age
    if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
        isValid = false;
    }
    
    // Validate resume
    if (!resume) {
        alert('Please upload a resume.');
        isValid = false;
    }
    
    // If form is valid, submit the form
    if (isValid) {
        document.getElementById('registrationForm').submit();
    }
}