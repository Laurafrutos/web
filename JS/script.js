let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    currentSlide += direction;

    // Si estamos al final, volvemos al principio
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    // Si estamos al principio, volvemos al final
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Mover el slider
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Función para desplazarse automáticamente hacia adelante cuando se hace mouse over
function setupMouseOver() {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        slide.addEventListener('mouseover', () => {
            
            moveSlide(1);  
        });
    });
}

setupMouseOver();



/*-------------------------------cookieee-----------------------------------*/


    // Función para establecer una cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Calcula el tiempo en milisegundos
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Función para obtener el valor de una cookie
    function getCookie(name) {
        const cookieArr = document.cookie.split(';');
        for (let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].trim();
            if (cookiePair.startsWith(name + "=")) {
                return cookiePair.substring(name.length + 1);
            }
        }
        return null;
    }

    // Muestra el aviso de cookies si no se ha dado consentimiento
    function checkCookieConsent() {
        const cookieConsent = getCookie("cookieConsent");
        if (!cookieConsent) {
            document.getElementById("cookie-consent").style.display = "block";
        }
    }

    // Event Listener para los botones
    document.getElementById("accept-cookies").addEventListener("click", function() {
        setCookie("cookieConsent", "accepted", 365); // Guarda la cookie por un año
        document.getElementById("cookie-consent").style.display = "none";
    });

    document.getElementById("reject-cookies").addEventListener("click", function() {
        setCookie("cookieConsent", "rejected", 365);
        document.getElementById("cookie-consent").style.display = "none";
    });

    // Ejecutar la comprobación cuando se cargue la página
    window.onload = function() {
        checkCookieConsent();
    };

