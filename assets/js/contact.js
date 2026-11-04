emailjs.init({
    publicKey: "Ausx33y6aVpSS74zP"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_cniph8b",
        "template_gcmyjne",
        this
    )
    .then(() => {
        alert("Messaggio inviato con successo!");
        form.reset();
    })
    .catch((error) => {
        alert("Errore durante l'invio.");
        console.error(error);
    });
});