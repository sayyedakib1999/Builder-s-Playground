document.addEventListener('DOMContentLoaded', () => {
    const inviteBtn = document.getElementById('inviteBtn');
    const inviteForm = document.getElementById('inviteForm');
    const contactForm = document.getElementById('contactForm');

    // Show the form when "Get Invite" is clicked
    inviteBtn.addEventListener('click', () => {
        inviteForm.classList.remove('hidden');
        inviteBtn.classList.add('hidden');
    });

    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const email = document.getElementById('email').value;

        const formData = new FormData();
        formData.append("name", name);
        formData.append("mobile", mobile);
        formData.append("email", email);

        // ✅ Your NEW Google Apps Script URL goes here
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
            console.error('Error!', error.message);
            alert("Uh-oh! Something went sideways. Try again later.");
        });
    });
});
