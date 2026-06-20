async function crear(nombre_usuario, email_usuario, password_usuario) {
    try {
        if (nombre_usuario.split(' ').length < 2) {
            alert('Debe de incluir al menos un apellido.');
            return;
        } else if (password_usuario.length < 8) {
            alert('La contraseña debe de tener al menos 8 caracteres.');
            return;
        }
        
        const usuarioData = {
            nombre_usuario: nombre_usuario,
            email: email_usuario,
            password: password_usuario,
            fecha_registro: new Date().toISOString().slice(0, 19).replace('T', ' '), // Formato YYYY-MM-DD HH:MM:SS
            ultimo_acceso: null,
            activo: 0
        };

        const response = await fetch('https://ixora-4tb9.onrender.com/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Le avisamos al backend que le enviamos un JSON
            },
            body: JSON.stringify(usuarioData) // Convertimos el objeto JS a una cadena de texto JSON
        });

        const resultado = await response.json();
        
        if (response.ok) {
            alert('Usuario creado con éxito.');
            document.location.href = "../../front/3/sesion.html";
        } else {
            alert('El email ingresado ya está ocupado.');
        }
        
    } catch (error) {
        console.error('Error de red o conexión:', error);
        alert('No se pudo conectar con el servidor. Verifica que esté encendido.');
    }
}

document.getElementById("botonCrearCuenta").addEventListener("click", (event) => {
    event.preventDefault();
    const nombre_usuario = document.getElementById('full-name').value.trim();
    const email_usuario = document.getElementById('email').value.trim();
    const password_usuario = document.getElementById('password').value;
    crear(nombre_usuario, email_usuario, password_usuario);
});