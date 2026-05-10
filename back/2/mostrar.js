async function auth(cuenta) {
            try {
                const response = await fetch('../../back/1/data.json');
                if (response.status !== 200) {
                    insertar.innerHTML = "<h3>Acceso no autorizado<h3>"
                    return {
                        success: false,
                        message: 'Acceso no autorizado'
                    };
                }
               
                const data = await response.json();
                const usuario = data.usuarios.find(u => u.nombre === cuenta);
                const formulario = document.getElementById("formulario")
                if (!usuario) {
                    console.log("<h3>Acceso no autorizado<h3>")
                    return {
                        success: false,
                        message: 'Acceso no autorizado'
                    };
                }
               
                console.log(`<h3>Usuario: ${usuario.nombre}<h3> <br> <h3> id: ${usuario.id}<h3>`)
                formulario.style.display = "none"
                return {
                    success: true,
                    usuario: usuario
                };
            } catch (error) {
                console.error('Error:', error);
                insertar.innerHTML = "<h3>Acceso no autorizado<h3>"

                return {
                    success: false,
                    message: 'Acceso no autorizado'
                };
            }
        }

document.getElementById("toSubmit").addEventListener("click", (event) => {
    event.preventDefault()
    const cuenta = document.getElementById('insertar').value.trim()
    console.log(auth(cuenta))
})