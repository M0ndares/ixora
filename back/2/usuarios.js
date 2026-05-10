async function autenticar(inputUsuario, inputClave) {
            try {
                const respuestaInput = document.getElementById('respuestaInput');
                const response = await fetch('../../back/1/data.json');
                const data = await response.json();
                const usuario = data.usuarios.find(u => u.nombre === inputUsuario);
                if (!usuario) respuestaInput.innerHTML = "<h3>Usuario inexistente<h3>"
                else if (usuario.clave == inputClave) respuestaInput.innerHTML = `<h3>Usuario: ${usuario.nombre}<h3> <br> <h3> id: ${usuario.id}<h3>`
                else respuestaInput.innerHTML = "<h3>Contraseña incorrecta<h3>"
            } catch (error) {
                console.error('Error:', error);
            }
        }

document.getElementById("botonAutenticar").addEventListener("click", (event) => {
    event.preventDefault()
    const inputUsuario = document.getElementById('inputUsuario').value.trim()
    const inputClave = document.getElementById('inputClave').value
    console.log(auth(inputUsuario, inputClave))
});

async function crear(inputUsuario, inputClave) {
            try {
                const respuestaInput = document.getElementById('respuestaInput');
                const response = await fetch('../../back/1/data.json');
                const data = await response.json();
                const usuario = data.usuarios.find(u => u.nombre === inputUsuario);
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

document.getElementById("botonAutenticar").addEventListener("click", (event) => {
    event.preventDefault()
    const inputUsuario = document.getElementById('inputUsuario').value.trim()
    const inputClave = document.getElementById('inputClave').value
    console.log(auth(inputUsuario, inputClave))
})