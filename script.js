document.addEventListener('DOMContentLoaded', () => {
    const inviteBtn = document.getElementById('inviteBtn');
    const inviteForm = document.getElementById('inviteForm');
    const contactForm = document.getElementById('contactForm');

    inviteBtn.addEventListener('click', () => {
        inviteForm.classList.remove('hidden');
        inviteBtn.classList.add('hidden');
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const email = document.getElementById('email').value;

        const formData = new FormData();
        formData.append("name", name);
        formData.append("mobile", mobile);
        formData.append("email", email);

        fetch("https://script.google.com/macros/s/AKfycbzCzQwVTfS1_JOow99Q6ur-srEiuaROSJ-JcXHM8EYHJg0AVtiXcsoNz5OTSl1NX7QUCQ/exec", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(responseText => {
            alert(`Thanks, ${name}! Your invite is on the way 🚀`);
            contactForm.reset();
            inviteForm.classList.add('hidden');
            inviteBtn.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Fetch error:', error);
            alert("Oops! Something went wrong: " + error.message);
        });
    });
});
