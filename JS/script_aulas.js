let slideActual = 0;
const slides = document.querySelectorAll('.slide');
const ContenedorPuntos = document.getElementById('contenedor-puntos');



// Función para mostrar un slide específico
function mostrarSlider(index) {
    if (index >= slides.length) {
        slideActual = 0;
    } else if (index < 0) {
        slideActual = slides.length - 1;
    } else {
        slideActual = index;
    }

    // Mover las diapositivas
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${slideActual * 100}%)`;

    // Actualizar el estado activo de los puntos
    actualizarPuntos();
}

// Función para mover el slide hacia adelante o atrás
function moverSlider(direction) {
    mostrarSlider(slideActual + direction);
}

// Función para crear los puntos de navegación automáticamente
function crearPuntos() {
    slides.forEach((_, index) => {
        const punto = document.createElement('div');
        punto.classList.add('punto');
        punto.addEventListener('click', () => mostrarSlider(index));
        ContenedorPuntos.appendChild(punto);
    });
}

// Función para actualizar el punto activo
function actualizarPuntos() {
    const puntos = document.querySelectorAll('.punto');
    puntos.forEach(punto => punto.classList.remove('punto-activo'));
    puntos[slideActual].classList.add('punto-activo');
}

// Inicializar slider y puntos de navegación
function iniciarSlider() {
    crearPuntos();
    mostrarSlider(slideActual); // Mostrar el primer slide
}

iniciarSlider();
