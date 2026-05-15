async function autenticar(inputEmail, inputClave) {
            try {
                const respuestaInput = document.getElementById('respuestaInput');
                const response = await fetch('../../back/1/data.json');
                const data = await response.json();
                const usuario = data.usuarios.find(u => u.email === inputEmail);
                if (!usuario) respuestaInput.innerHTML = "<h3>Usuario inexistente<h3>"
                else if (usuario.password == inputClave) respuestaInput.innerHTML = `<h3>Usuario: ${usuario.nombre}<h3> <br> <h3> id: ${usuario.id}<h3>`
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
