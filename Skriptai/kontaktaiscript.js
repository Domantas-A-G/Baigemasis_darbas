function initMap() {
    // Kurkite žemėlapį su smeigtuku
    const location = { lat: 54.687157, lng: 25.279652 }; // Vilniaus koordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Formos duomenų pateikimas
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Surinkite formos duomenis
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        service: document.getElementById('service').value
    };

    console.log(formData);

    // Siųskite duomenis į serverį (pavyzdžiui, naudojant fetch ar XMLHttpRequest)
    // Arba integruokite su serverio pusės kodu kaip PHP ar Node.js.

    alert('Užklausa išsiųsta!');
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Sustabdyti formos automatinį siuntimą

    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');

    if (!phoneInput.value) {
        phoneError.style.display = 'block';
    } else {
        phoneError.style.display = 'none';
        // Čia galite pridėti kodą formos duomenų siuntimui
        alert('Formą pateikta sėkmingai!');
    }
});
