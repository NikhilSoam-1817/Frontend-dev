function validateStudentForm(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    function validateField(field, regex) {
        if(regex.test(field.value)) field.style.border = "2px solid green";
        else field.style.border = "2px solid red";
    }
    validateField(name, nameRegex);
    validateField(email, emailRegex);
    validateField(phone, phoneRegex);
    validateField(password, passwordRegex);
}
document.getElementById('studentForm').addEventListener('submit', validateStudentForm);