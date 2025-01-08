document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert(`Merci pour votre message, ${name}!`);
        this.reset(); 
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

document.getElementById('downloadCV').addEventListener('click', function() {
    const cvLink = 'folio\cv_de_Bamba.pdf'; 
    const a = document.createElement('a');
    a.href = cvLink;
    a.download = 'Mon_CV.pdf';
    a.click();
});
