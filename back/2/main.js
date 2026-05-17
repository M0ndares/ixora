document.addEventListener('DOMContentLoaded', async () => {
    const email = localStorage.getItem('emailUsuario');
    if (!email) {
        alert('No has iniciado sesión');
        window.location.href = '../../front/3/sesion.html'; // Lo regresamos
        return;
    }
    try {
        const response = await fetch(`http://127.0.0.1:3000/api/usuarios/status/${email}`)
        const datos = await response.json()
        if (datos && datos.length > 0) {
            nombre = datos[0].nombre_usuario.split(' ')[0]
            apellido = datos[0].nombre_usuario.split(' ')[datos[0].nombre_usuario.split(' ').length - 1]
            document.getElementById('anuncioBienvenida').innerText = `BIENVENID@ ${nombre.toUpperCase()}`
            document.getElementById('nombreBienvenida').innerText = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`
            document.getElementById('emailBienvenida').innerText = `${datos[0].email.toLowerCase()}`
            fecha = new Date(datos[0].fecha_registro)
            document.getElementById('fechaBienvenida').innerText = `Miembro desde ${fecha.toISOString().slice(0, 10)}`
        }
    } catch (error) {
        console.error('Error al cargar la página principal:', error);
    }
})

document.getElementById('cerrarSesion').addEventListener('click', (event) => {
    event.preventDefault();
    try {
        const email = localStorage.getItem('emailUsuario');
        const usuarioData = {
            activo: 0
        };
        const response = fetch(`http://127.0.0.1:3000/api/usuarios/actualizar/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(usuarioData)     
        });
        localStorage.clear()
        window.location.href = '../../front/3/menu.html' 
    }
    catch (error) {
        console.error('Error de red o conexión:', error);
    }
})