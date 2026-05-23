let container = document.getElementById('containerReservaciones');
document.addEventListener('DOMContentLoaded', async () => {
    const email = localStorage.getItem('emailUsuario');
    if (!email) {
        alert('No has iniciado sesión');
        window.location.href = '../../front/3/sesion.html'; 
        return;
    }
    try {
        const response = await fetch(`http://127.0.0.1:3000/api/usuarios/status/${email}`)
        const datos = await response.json()
        if (datos && datos.length > 0) {
            nombre = datos[0].nombre_usuario.split(' ')[0]
            apellido = datos[0].nombre_usuario.split(' ')[datos[0].nombre_usuario.split(' ').length - 1]
            document.getElementById('anuncioBienvenida').innerText = `BIENVENID@, ${nombre.toUpperCase()}`
            document.getElementById('nombreBienvenida').innerText = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`
            document.getElementById('emailBienvenida').innerText = `${datos[0].email.toLowerCase()}`
            fecha = new Date(datos[0].fecha_registro)
            document.getElementById('fechaBienvenida').innerText = `Miembro desde ${fecha.toISOString().slice(0, 10)}`
        }

        const response2 = await fetch(`http://127.0.0.1:3000/api/reservaciones/status/${email}`);
        const data2 = await response2.json();
        const estadoReservacion = ['Pendiente', 'Confirmada'];
        const fotos = [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBJYtQhIdgODOCZz_rG7ig5N0HflGTv5HsUGF_eVkcEEBBTT4Ol-CB_IOIQRiIIfe-mJ-I_OetLXONK_ssSob5-UXDMpyfH5nU4qtjCWUN3o_1erB8PnTAPANlCztA3m1pFML9zwBe6s-kPA-AoESBRTrxWyX2AsdS0jlJQP0euXIBgbkQsbGH38xBKu2E5b8hx3z8SmF-bCWe4r0g17BZ00qeq6nsyrLUMZ-2gY7Yvl3f5Na7-6nGhU0S_8fIUEg-aSEVAFNosFQ',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAkmIuJUOcLui9meulmrFwOM_kLaXI0SQa2s0EpL4cZs5LLweGenCkDalUCUXooVUcdJm7Absb6wCrdrNp1mpXDDfNyLvobwLPJww-XLcbsGJI7UVJSBOYAlVI4fMLhuhxoG7r0j-OPmIh__W7MPbaXfWT-w4xd6nz4ZkdYhXi0S75uXQLurQZWLnmg-a2KaohAMUHFnzE52hgagQ_JPtLwQLvlML8HbyZ614v5Kxh4uAjnaMEeFXrH2LjjSwf6wUA16WC3ulvWvQ', 
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDhOCD4Fe9mKJHMJzjxKwxnhVzl7EX99V9_h7xC97hHdI1loBeTReiOsFrmrp60WLwqbkyU4Dvitx9E1A-EGPUVHz-WgldELTv1oyVEaxKtNpJiF1kMqfV3CcPrZSrmZaFi-Amj7dz4eAx0E5e3BHfpK8-Y37nyWSXVMVmD6u5GXFC1tmOuRl2icRg6WnXo1BiCsY5dXMvVNi7hTbsb-m631UJIRdYwpCJOSGUP-De7jjyQlPvUMV6vUYxTti-9FuiIATwRksfTZA', 
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCKbtiwXqUibzPFet3TjjnPOUTp_UUC77Vc5Ao8V-Cpikl60c3XYE0Lme08utYeklef2Y2Lc-8H2DqWfUnf1v1BqngKfDEf4Aabkdc3Hv0yUAvZyi-VFaH4t2gJVaR0dUWMvw_AUOf88glp07710_7QdFMx9rkeuZtXC4yJTilqpvsPXTLjZJIsZr_A0t39iXCx78FX_sgWvCDyeioS9KFWqDVdnJhvqmI2EV9DPNJZ0j_E1F9k0TuY_B3TGGDdxy-nj7xonOWMMQ', 
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBeM5yPEgvmhS37cUEi9DZ-jKV3ph6z3K_IsqnnA8MRKfDFJ30Ttb5xNvfUV9gN1PYVnjucW4Ozhv9Wtly56biH2lzmZbIIcTrxHDNuG3FzBxgpE7Kk4CiEoADinwFDtslUXZldTHrgh-JerqJoW_8RbpO3r7oavSRY6Kfdn4SE1ri3Rnq6lsocEBMFw6Cj2KipcPFAehMDsIb8uG5mY1i1Vkvww7kEtFXBufgKEjMq_KCaU97P8VQKHFiJgpRXsJcPPmP0bMYsKQ'
        ]
        container.innerHTML = '';
        for(let i = 0; i < data2.length; i++) {
            const current = data2[i];
            const fetchHabitacion = await fetch(`http://127.0.0.1:3000/api/habitaciones/status/${current.cantidad_huespedes}`)
            const nombreHabitacion = await fetchHabitacion.json()
            const botones = ['Confirmar', 'Confirmada'];
            const colores = ['#000000', '#b63c47']
            
            container.innerHTML += `<div
                            class="group flex flex-col md:flex-row gap-6 p-4 rounded-xl border border-secondary/20 bg-secondary/5 transition-all hover:bg-secondary/10">
                           <div class="w-full md:w-48 flex flex-col gap-3 flex-shrink-0">
                                <img class="w-full h-32 object-cover rounded-lg shadow-sm"
                                    data-alt="A luxurious and spacious hotel suite at Ixora..."
                                    src="${fotos[current.cantidad_huespedes - 1]}">
                                    
                                <button 
                                data-id="${current.id_reservacion}" 
                                style="background-color: ${colores[current['id_estado_reservacion'] - 1] || '#000000'};"
                                class="w-full text-on-primary px-4 py-2.5 rounded-lg font-label-sm text-xs tracking-wider uppercase hover:opacity-90 transition-all active:scale-95 shadow-sm botonReservacion">
                                    ${botones[current['id_estado_reservacion'] - 1] || 'Confirmar'}
                                </button>
                            </div>
                            <div class="flex-grow">
                                <div class="flex justify-between items-start mb-2">
                                    <div>
                                        <span
                                            class="font-label-sm text-[11px] text-secondary bg-secondary/10 px-2 py-0.5 rounded-full uppercase mb-2 inline-block">${estadoReservacion[current.id_estado_reservacion - 1]}</span>
                                        <h5 class="font-headline-lg text-lg text-primary">${nombreHabitacion[0].nombre_tipo} para ${current.cantidad_huespedes} persona(s)</h5>
                                    </div>
                                    <span class="font-headline-lg text-lg text-primary">$${current['total']} USD</span>
                                </div>
                                <div class="grid grid-cols-1 gap-4 text-on-surface-variant text-sm">
                                    <div class="flex items-center gap-1">
                                        <span class="material-symbols-outlined text-sm">calendar_today</span>
                                        ${current['fecha_entrada'].slice(0, 10)} al ${current['fecha_salida'].slice(0, 10)}
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-sm">spa</span>
                                        Servicios incluidos: ${current['servicios']}
                                    </div>
                                </div>
                            </div>
                        </div>`
        }
    } catch (error) {
        console.error('Error al cargar la página principal:', error);
    }
})

document.getElementById('cerrarSesion').addEventListener('click', (event) => {
    event.preventDefault();
    try {
        const email = localStorage.getItem('emailUsuario');
        const usuarioData = { activo: 0 };
        fetch(`http://127.0.0.1:3000/api/usuarios/actualizar/${email}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuarioData)     
        });
        localStorage.removeItem('emailUsuario')
        window.location.href = '../../front/3/menu.html' 
    }
    catch (error) {
        console.error('Error de red o conexión:', error);
    }
})

container.addEventListener('click', async (event) => {
    const botonReservacion = event.target.closest('.botonReservacion');
    if (botonReservacion) {
        event.preventDefault();
        
        const idReservacion = botonReservacion.getAttribute('data-id');

        try {
            const fetchEstadoActual = await fetch(`http://127.0.0.1:3000/api/reservaciones/id/${idReservacion}`)
            const estadoActual = await fetchEstadoActual.json()
            
            // Validamos de forma segura si la respuesta es un array o un objeto directo
            const datosReserva = Array.isArray(estadoActual) ? estadoActual[0] : estadoActual;

            if(datosReserva && datosReserva['id_estado_reservacion'] == 1) {
                alert('Reservación confirmada!');
                await fetch(`http://127.0.0.1:3000/api/reservaciones/actualizar/${idReservacion}`, {
                    method: 'PUT',
                    headers:  { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ estadoReservacion: 2 })
                });
                window.location.href = '../../front/3/main.html'
            }
        } catch (error) {
            console.error("Error al procesar el click:", error);
        }
    }
});