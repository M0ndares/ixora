async function crear(inputEmail, inputClave) {
            try {
                const respuestaInput = document.getElementById('respuestaInput');
                const response = await fetch('../../back/1/data.json');
                const data = await response.json();
                const usuario = data.usuarios.find(u => u.email === inputEmail);
                if (usuario) respuestaInput.innerHTML = `Ese usuario ya existe`
                else  {
                    const respuestaInput = document.getElementById('respuestaInput');
                    const response = await fetch('../../back/1/data.json');
                    respuestaInput.innerHTML = "<h3>Usuario creado exitosamente<h3>"
                    
                }
                    
            } catch (error) {
                console.error('Error:', error);
            }
        }

document.getElementById("botonCrearCuenta").addEventListener("click", (event) => {
    event.preventDefault()
    const inputEmail = document.getElementById('email').value.trim()
    const inputEmail = document.getElementById('email').value.trim()
    const inputClave = document.getElementById('password').value
    console.log(auth(inputEmail, inputClave))
})