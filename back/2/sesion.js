async function autenticar(inputEmail, inputClave) {
            try {
                const respuestaInput = document.getElementById('respuestaInput');
                const response = await fetch('http://127.0.0.1:3000/api/usuarios');
                const data = await response.json();
                const usuario = data.find(u => u.email === inputEmail);
                if (!usuario) respuestaInput.innerHTML = "<h3>Usuario inexistente<h3>"
                else if (usuario.password == inputClave) respuestaInput.innerHTML = `<h3>Usuario: ${usuario.email}<h3> <br> <h3> nombre: ${usuario.nombre_usuario}<h3>`
                else respuestaInput.innerHTML = "<h3>Contraseña incorrecta<h3>"
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
