class FormBuilder {
    constructor(fields, formId) { this.fields = fields; this.form = document.getElementById(formId); }
    generateForm() {
        this.fields.forEach(field => {
            const label = document.createElement('label');
            label.innerText = field.label;
            const input = document.createElement('input');
            input.type = field.type;
            input.name = field.label.toLowerCase();
            input.id = field.label.toLowerCase();
            input.style.display = "block";
            input.style.marginBottom = "10px";
            this.form.appendChild(label);
            this.form.appendChild(input);
        });
        const submitBtn = document.createElement('button');
        submitBtn.innerText = "Submit";
        submitBtn.type = "button";
        submitBtn.addEventListener('click', () => console.log(this.getFormData()));
        this.form.appendChild(submitBtn);
    }
    getFormData() {
        const data = {};
        this.fields.forEach(field => { data[field.label] = document.getElementById(field.label.toLowerCase()).value; });
        return data;
    }
}
const fields = [
    { type: 'text', label: 'Username' },
    { type: 'email', label: 'Email' },
    { type: 'password', label: 'Password' }
];
const myForm = new FormBuilder(fields, 'dynamicForm');
myForm.generateForm();