const fotos = ['https://lh3.googleusercontent.com/aida-public/AB6AXuBJYtQhIdgODOCZz_rG7ig5N0HflGTv5HsUGF_eVkcEEBBTT4Ol-CB_IOIQRiIIfe-mJ-I_OetLXONK_ssSob5-UXDMpyfH5nU4qtjCWUN3o_1erB8PnTAPANlCztA3m1pFML9zwBe6s-kPA-AoESBRTrxWyX2AsdS0jlJQP0euXIBgbkQsbGH38xBKu2E5b8hx3z8SmF-bCWe4r0g17BZ00qeq6nsyrLUMZ-2gY7Yvl3f5Na7-6nGhU0S_8fIUEg-aSEVAFNosFQ',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAkmIuJUOcLui9meulmrFwOM_kLaXI0SQa2s0EpL4cZs5LLweGenCkDalUCUXooVUcdJm7Absb6wCrdrNp1mpXDDfNyLvobwLPJww-XLcbsGJI7UVJSBOYAlVI4fMLhuhxoG7r0j-OPmIh__W7MPbaXfWT-w4xd6nz4ZkdYhXi0S75uXQLurQZWLnmg-a2KaohAMUHFnzE52hgagQ_JPtLwQLvlML8HbyZ614v5Kxh4uAjnaMEeFXrH2LjjSwf6wUA16WC3ulvWvQ', 
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDhOCD4Fe9mKJHMJzjxKwxnhVzl7EX99V9_h7xC97hHdI1loBeTReiOsFrmrp60WLwqbkyU4Dvitx9E1A-EGPUVHz-WgldELTv1oyVEaxKtNpJiF1kMqfV3CcPrZSrmZaFi-Amj7dz4eAx0E5e3BHfpK8-Y37nyWSXVMVmD6u5GXFC1tmOuRl2icRg6WnXo1BiCsY5dXMvVNi7hTbsb-m631UJIRdYwpCJOSGUP-De7jjyQlPvUMV6vUYxTti-9FuiIATwRksfTZA', 
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCKbtiwXqUibzPFet3TjjnPOUTp_UUC77Vc5Ao8V-Cpikl60c3XYE0Lme08utYeklef2Y2Lc-8H2DqWfUnf1v1BqngKfDEf4Aabkdc3Hv0yUAvZyi-VFaH4t2gJVaR0dUWMvw_AUOf88glp07710_7QdFMx9rkeuZtXC4yJTilqpvsPXTLjZJIsZr_A0t39iXCx78FX_sgWvCDyeioS9KFWqDVdnJhvqmI2EV9DPNJZ0j_E1F9k0TuY_B3TGGDdxy-nj7xonOWMMQ', 
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBeM5yPEgvmhS37cUEi9DZ-jKV3ph6z3K_IsqnnA8MRKfDFJ30Ttb5xNvfUV9gN1PYVnjucW4Ozhv9Wtly56biH2lzmZbIIcTrxHDNuG3FzBxgpE7Kk4CiEoADinwFDtslUXZldTHrgh-JerqJoW_8RbpO3r7oavSRY6Kfdn4SE1ri3Rnq6lsocEBMFw6Cj2KipcPFAehMDsIb8uG5mY1i1Vkvww7kEtFXBufgKEjMq_KCaU97P8VQKHFiJgpRXsJcPPmP0bMYsKQ']
const size = ['15', '20', '30', '45', '70'];
const cama = ['Individual', 'Matrimonial', 'King Size', '2 matrimoniales', '2 King Size'] 
const estrellas = ['4.4', '4.7', '4.8', '4.5', '4.9']
const contenedorHabitaciones = document.getElementById('contenedorHabitaciones');

async function habitacion(cantidadHuespedes, inicio, final, esCiclo = false) {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    if (isNaN(inicio.getTime()) || isNaN(final.getTime())) {
            alert('Debe de introducir un rango de fechas');
            return;
    } else if (inicio.getTime() > final.getTime()) {
            alert('El rango de fechas debe de ser válido.');
            return;
    } else if(hoy.getTime() > inicio.getTime()) {
            alert('La fecha de inicio tiene que ser futura.');
            return;
    }
    try {
        const response = await fetch(`https://ixora-4tb9.onrender.com/api/habitaciones/status/${cantidadHuespedes}`);
        const data = await response.json();
        console.log(data)
        if (!esCiclo) {{
            contenedorHabitaciones.innerHTML = ''
        }}
        for(let i = 0; i < data.length; i++) {
            const habitacionData = {
                "fecha_inicio": inicio,
                "fecha_salida": final,
                "id_habitacion": cantidadHuespedes
            }
            const fetchDisponibles = await fetch(`https://ixora-4tb9.onrender.com/api/reservaciones/ocupadas`, {
                method: 'POST',
                headers:  {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(habitacionData)
            })
            const habitacionesDisponibles = await fetchDisponibles.json()
            contenedorHabitaciones.innerHTML += `<article class="bg-surface rounded-xl overflow-hidden luxury-shadow group flex flex-col">
                        <div class="relative h-72 overflow-hidden">
                            <img alt="Suite Deluxe Ixora"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                data-alt="A spacious and high-end hotel suite with a king-size bed draped in premium linen. Large floor-to-ceiling windows reveal a lush tropical garden with sunlight pouring in. The interior features natural wood textures, minimalist Mexican furniture, and soft cream walls. The mood is tranquil and sophisticated, utilizing a light-mode color palette with subtle red accents in the textiles."
                                src=${fotos[cantidadHuespedes - 1]} />
                            <div
                                class="absolute top-4 left-4 bg-surface/90 px-3 py-1 rounded-full flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-green-500"></span>
                                <span class="font-label-sm text-label-sm text-primary uppercase">${10 - habitacionesDisponibles} Disponible(s)</span>
                            </div>
                        </div>
                        <div class="p-6 flex-grow">
                            <span class="font-label-sm text-label-sm text-tertiary uppercase tracking-widest">Deluxe
                                Garden View</span>
                            <h2 class="font-headline-lg text-headline-lg text-primary mt-2 mb-3">${data[i].nombre_tipo}
                            </h2>
                            <p class="font-body-md text-on-surface-variant line-clamp-2 mb-6">${data[i].descripcion}
                            </p>
                            <div class="grid grid-cols-2 gap-4 mb-8">
                                <div class="flex items-center gap-2 text-outline">
                                    <span class="material-symbols-outlined text-[20px]">groups</span>
                                    <span class="font-label-sm">${data[i].capacidad} persona(s)</span>
                                </div>
                                <div class="flex items-center gap-2 text-outline">
                                    <span class="material-symbols-outlined text-[20px]">aspect_ratio</span>
                                    <span class="font-label-sm">${size[cantidadHuespedes - 1]} m²</span>
                                </div>
                                <div class="flex items-center gap-2 text-outline">
                                    <span class="material-symbols-outlined text-[20px]">hotel_class</span>
                                    <span class="font-label-sm">${estrellas[cantidadHuespedes - 1]}/5</span>
                                </div>
                                <div class="flex items-center gap-2 text-outline">
                                    <span class="material-symbols-outlined text-[20px]">king_bed</span>
                                    <span class="font-label-sm">${cama[cantidadHuespedes - 1]}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="p-6 pt-0 mt-auto border-t border-outline-variant/10 flex items-center justify-between">
                            <div>
                                <p class="text-[10px] font-bold uppercase text-outline">Desde</p>
                                <p class="font-headline-lg text-primary">$${data[i].precio_base_noche} <span class="text-body-md font-body-md">/
                                        noche</span></p>
                            </div>
                            <button
                                class="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm hover:bg-secondary transition-colors botonSeleccionar">Consultar</button>
                        </div>
                    </article>`
        }
    } catch(error) {
        console.log(error)
    }
}

document.getElementById('botonConsultar').addEventListener('click', (event) => {
    event.preventDefault();
    const cantidadHuespedes = document.getElementById('selectorHuespedes').value;
    const inicio = new Date (document.getElementById('selectorInicio').value);
    const final = new Date (document.getElementById('selectorFinal').value);
    console.log(inicio)
    console.log(final)
    habitacion(cantidadHuespedes[0], inicio, final)
})

document.addEventListener('DOMContentLoaded', (event) => {
    for(let i = 0; i < 6; i++) {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        habitacion(i, hoy, hoy, true)
    }
})

contenedorHabitaciones.addEventListener('click', (event) => {
    const botonHabitacion = event.target.closest('.botonSeleccionar');
    if (botonHabitacion) {
        event.preventDefault();
        const cantidadHuespedes = document.getElementById('selectorHuespedes').value;
        const inicio = document.getElementById('selectorInicio').value;
        const final = document.getElementById('selectorFinal').value;
        if (!inicio || !final || !cantidadHuespedes) {
        alert('Debe de incluir un rango de fechas.')
        return;
        } 
        const datosMenu = {
        'cantidadHuespedes': cantidadHuespedes,
        'inicio': inicio,
        'final': final
        };

        localStorage.removeItem('datosMenu');
        localStorage.setItem('datosMenu', JSON.stringify(datosMenu))
        window.location.href = '../../front/4/reservacion.html';
    }
});