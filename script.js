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

        // Here you would typically send the data to your server
        // For now, we'll just show the success message
        alert(`Thanks, ${name}! Your invite is on the way 🚀`);

        // Reset form and hide it
        contactForm.reset();
        inviteForm.classList.add('hidden');
        inviteBtn.classList.remove('hidden');
    });
}); 

