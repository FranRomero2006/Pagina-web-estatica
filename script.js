document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío por defecto
        
        // Validaciones
        const nombre = document.getElementById('nombre');
        const motivo = document.getElementById('motivo');
        const email = document.getElementById('email');
        
        // Validar nombre
        if (nombre.value.trim() === '') {
            alert('Por favor, ingresa tu nombre');
            nombre.focus();
            return false;
        }
        
        // Validar motivo
        if (motivo.value.trim() === '') {
            alert('Por favor, ingresa el motivo de contacto');
            motivo.focus();
            return false;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert('Por favor, ingresa un correo electrónico válido');
            email.focus();
            return false;
        }
        
        // Si todas las validaciones pasan
        alert('Formulario enviado exitosamente');
        form.reset();
    });
});