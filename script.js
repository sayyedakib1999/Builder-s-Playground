document.addEventListener('DOMContentLoaded', () => {
    const inviteBtn = document.getElementById('inviteBtn');
    const inviteForm = document.getElementById('inviteForm');
    const contactForm = document.getElementById('contactForm');

    // Show form when "Get Invite" button is clicked
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

        fetch("https://script.google.com/macros/s/AKfycbwlwkUqE9XeTMxs4kC-K6YUtq7RSRkmDdJtvNB_7bw2FHruDWXOdHIGVWupI3z5PhGNag/exec", {
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
            alert("Something went wrong. Try again later.");
        });
    });
});
