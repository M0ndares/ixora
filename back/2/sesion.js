async function main(inputEmail) {
    try {
        const usuarioData = {
            ultimo_acceso: new Date().toISOString().slice(0, 19).replace('T', ' '), // Formato YYYY-MM-DD HH:MM:SS,
            activo: 1
        };
        const response = await fetch(`http://127.0.0.1:3000/api/usuarios/actualizar/${inputEmail}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(usuarioData)     
        });
        localStorage.setItem('emailUsuario', inputEmail);   
    }
    catch (error) {
        console.error('Error de red o conexión:', error);
    }
}

async function autenticar(inputEmail, inputClave) {
            try {
                const respuestaInput = document.getElementById('respuestaInput');
                const response = await fetch('http://127.0.0.1:3000/api/usuarios');
                const data = await response.json();
                const usuario = data.find(u => u.email === inputEmail);
                if (!usuario) respuestaInput.innerHTML = "<h3>Usuario inexistente</h3>"
                else if (usuario.password == inputClave) {
                    main(inputEmail)
                    window.location.href = '../../front/3/main.html'
                }
                else respuestaInput.innerHTML = "<h3>Contraseña incorrecta</h3>"
            } catch (error) {
                console.error('Error:', error);
            }
        }

document.getElementById("botonAutenticar").addEventListener("click", (event) => {
    event.preventDefault()
    const inputEmail = document.getElementById('email').value.trim()
    const inputClave = document.getElementById('password').value
    console.log(autenticar(inputEmail, inputClave))
});

