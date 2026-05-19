const fotosHabitaciones = ['https://lh3.googleusercontent.com/aida-public/AB6AXuBJYtQhIdgODOCZz_rG7ig5N0HflGTv5HsUGF_eVkcEEBBTT4Ol-CB_IOIQRiIIfe-mJ-I_OetLXONK_ssSob5-UXDMpyfH5nU4qtjCWUN3o_1erB8PnTAPANlCztA3m1pFML9zwBe6s-kPA-AoESBRTrxWyX2AsdS0jlJQP0euXIBgbkQsbGH38xBKu2E5b8hx3z8SmF-bCWe4r0g17BZ00qeq6nsyrLUMZ-2gY7Yvl3f5Na7-6nGhU0S_8fIUEg-aSEVAFNosFQ',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAkmIuJUOcLui9meulmrFwOM_kLaXI0SQa2s0EpL4cZs5LLweGenCkDalUCUXooVUcdJm7Absb6wCrdrNp1mpXDDfNyLvobwLPJww-XLcbsGJI7UVJSBOYAlVI4fMLhuhxoG7r0j-OPmIh__W7MPbaXfWT-w4xd6nz4ZkdYhXi0S75uXQLurQZWLnmg-a2KaohAMUHFnzE52hgagQ_JPtLwQLvlML8HbyZ614v5Kxh4uAjnaMEeFXrH2LjjSwf6wUA16WC3ulvWvQ', 
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDhOCD4Fe9mKJHMJzjxKwxnhVzl7EX99V9_h7xC97hHdI1loBeTReiOsFrmrp60WLwqbkyU4Dvitx9E1A-EGPUVHz-WgldELTv1oyVEaxKtNpJiF1kMqfV3CcPrZSrmZaFi-Amj7dz4eAx0E5e3BHfpK8-Y37nyWSXVMVmD6u5GXFC1tmOuRl2icRg6WnXo1BiCsY5dXMvVNi7hTbsb-m631UJIRdYwpCJOSGUP-De7jjyQlPvUMV6vUYxTti-9FuiIATwRksfTZA', 
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCKbtiwXqUibzPFet3TjjnPOUTp_UUC77Vc5Ao8V-Cpikl60c3XYE0Lme08utYeklef2Y2Lc-8H2DqWfUnf1v1BqngKfDEf4Aabkdc3Hv0yUAvZyi-VFaH4t2gJVaR0dUWMvw_AUOf88glp07710_7QdFMx9rkeuZtXC4yJTilqpvsPXTLjZJIsZr_A0t39iXCx78FX_sgWvCDyeioS9KFWqDVdnJhvqmI2EV9DPNJZ0j_E1F9k0TuY_B3TGGDdxy-nj7xonOWMMQ', 
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBeM5yPEgvmhS37cUEi9DZ-jKV3ph6z3K_IsqnnA8MRKfDFJ30Ttb5xNvfUV9gN1PYVnjucW4Ozhv9Wtly56biH2lzmZbIIcTrxHDNuG3FzBxgpE7Kk4CiEoADinwFDtslUXZldTHrgh-JerqJoW_8RbpO3r7oavSRY6Kfdn4SE1ri3Rnq6lsocEBMFw6Cj2KipcPFAehMDsIb8uG5mY1i1Vkvww7kEtFXBufgKEjMq_KCaU97P8VQKHFiJgpRXsJcPPmP0bMYsKQ']
const fotosServicios = [ "https://lh3.googleusercontent.com/aida-public/AB6AXuDzzAE3GjOxATiQz66ZJJpagVBh1GiG2zBeMIkkWUcbMnfKv3uu80c_7aOHGlZqdY6jjdwzsiG-_pr0lqgIEX7MhnQZyFPq6UB_9CIk_gDuFAri8K9uEPi2AYiH6np53Qe5fiWS3R7wOLr7wTLcmYFwM9gld1QnQQB_UBAOXkVCTxldhn--JM73Ju6p6B2HUMN3mhR-uAWKlsSd_-DUgQxpzQKxZ_lQzNNJfXWc6sKoiV9ggYf1YGvnRKqEjULK8YATH-NzR7bnnQ",
            "https://cdn.aarp.net/content/dam/aarpe/es/home/turismo/consejos-para-viajar/info-2023/autobuses-de-lujo/_jcr_content/root/container_main/container_body_main/container_image/articlecontentfragme/cfimage.coreimg.75.1320.jpeg/content/dam/aarp/travel/travel_tips/2023/08/1140-vonlane-luxury-bus-esp.jpg",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD8XShENsd-N05jEYm3NHqnv-mcsuaI-8y3JKsM0pdeL7KMppID0-b4voEgNBdPzBQ449toKGyNxV4sGqqr7uur5xd396CnsrUcS1sT6iO8l4CEOcSfFIs1DUdCoSyteHlgmnBuaBSQccu_-yubijB3sZDoudNM5jdJl-fD4Xpr5Acm9W6f_2RaAnoeLnR6gEpSvSxnBIye4Uc9n4TXvPMjMgFUerV9_7RZDoVkHRRzRc-dZk1bUMvSPwHOmblHEKIrgHtoEResdw", 
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAJM3UbtpkQSY0f3Im9Hkl4mk8blcDBoLQdNsnrY2AHDByV24Hzv1oxGHOrZgCE8RNjRNhlhXwQ84EKsIwvWED5Hl6IzlZkRTWAZl22-R9fBVopwA4vZhrp2XfvC2d5p61jm9t75CiLbrLU27muFfICk328AcJwJEhs1hmkx5Dn5SRF8NHUT6yYJNLEz83ql7RspT7fspuoKB330Kh4a--9M5PhnqBjBUO9SVBykLfojs-Xf3IZSC9aXRwLTthklrYZn1Y-YCyMyA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBgWbWb-D1gIT9SNuQPHw88PkSHiHy2aj653rKgc98zlq5JwMOouZboFYBgaQ_OleCkqWCIcn3F03h5ZuJmgOdRFWEiAWEdGLiHvMGJGsLIxWIAjDfjHMuQtDFrssr4lgGD3I1VlSUcA0-9FWTGmYyamij-N-sHX5S3Xv1uHifWsE2Ft1Kez8ExHK-A2z1fb-G0B23Xn0c8AoXH5BUwdDkd2L1y1M2AONZ06Vy2XoaSqMDXLv4L2P1Xx8xGiPio-iU0esIbLURxtw",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAmrVOdDq76i7ToAbRmKAgFMAvOpn1KeB10PzRp5LXTVU4kx6Zlx3z_bIMRinCZ4kF2NcekYE4dHgmbBrrG7_F9t4q7twGO4ret2nj_rjlYELMw3yDa7xF6Uujl5YMzLHR4XaSUj8okqMcLiCjZXHwOjubeLH_S7zIpbSigd_vmPlQLxEiRE2pnGFt-mTIgZLUrCP7dhAK-hrU8iAqDAAcdnKVGiyilfKy3EFc4XTfcyr8i2RIxVglCTe1GpX7aFPAJ4bmf_8XD-g"]

const size = ['15', '20', '30', '45', '70'];
const cama = ['Individual', 'Matrimonial', 'King Size', '2 matrimoniales', '2 King Size'] 
const estrellas = ['4.4', '4.7', '4.8', '4.5', '4.9']
const contenedor = document.getElementById('containerVisual');
let consultarServicios = document.getElementById('consultarServicios');
let consultarHabitaciones = document.getElementById('consultarHabitaciones');

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
    consultarHabitaciones.className = 'px-8 py-4 font-label-md text-label-md border-b-2 border-primary text-primary hover:text-primary-dark transition-all cursor-pointer';
    consultarServicios.className = 'px-8 py-4 font-label-md text-label-md text-outline hover:text-primary transition-all cursor-pointer';
    try {
        const response = await fetch(`http://127.0.0.1:3000/api/habitaciones/status/${cantidadHuespedes}`);
        const data = await response.json();
        
        if (!esCiclo) {{
            contenedor.innerHTML = ''
        }}
        for(let i = 0; i < data.length; i++) {
            const disponibles = await fetch(`http://127.0.0.1:3000/api/habitaciones/total/${data[i].id_tipo_habitacion}`)
            const habitacionesDisponibles = await disponibles.json()
            contenedor.innerHTML += `<div
            class="bg-white rounded-xl overflow-hidden group border border-outline-variant/30 hover:shadow-lg transition-shadow duration-500"
          >
            <div class="relative aspect-[4/5] overflow-hidden">
              <img
                alt="Ixora Garden Suite"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="A luxurious minimalist hotel suite in Mexico featuring high ceilings, warm cream walls, and organic wooden furniture. Natural light floods the space from a private interior garden. The aesthetic is contemporary heritage with soft linen textiles and a sculptural stone bathtub visible in the background. Calm, serene, high-end photography."
                src=${fotosHabitaciones[cantidadHuespedes - 1]}
              />
              <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full font-label-sm text-label-sm text-primary"
              >
                ${habitacionesDisponibles[0]["count(id_habitacion)"]} disponible(s)
              </div>
            </div>
            <div class="p-8 space-y-4">
              <div class="flex justify-between items-baseline">
                <h4 class="font-headline-lg text-headline-lg">${data[i].nombre_tipo}</h4>
                <span class="text-on-surface-variant font-body-md"
                  >$${data[i].precio_base_noche} / noche</span
                >
              </div>
              <p class="text-on-surface-variant font-body-md">
                ${data[i].descripcion}
              </p>
              <button
                class="w-full py-3 border border-primary text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all"
              >
                Seleccionar
              </button>
            </div>`
        }
    } catch(error) {
        console.log(error)
    }
}

async function servicio(inicio, final, cantidadHuespedes, categoria = null, esCiclo = false) {
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
    contenedor.innerHTML = ''
    consultarServicios.className = 'px-8 py-4 font-label-md text-label-md border-b-2 border-primary text-primary hover:text-primary-dark transition-all cursor-pointer';
    consultarHabitaciones.className = 'px-8 py-4 font-label-md text-label-md text-outline hover:text-primary transition-all cursor-pointer';
    try {
        const response = await fetch(`http://127.0.0.1:3000/api/servicios`);
        const data = await response.json();
        for(let i = 0; i < data.length; i++) {
            if (categoria != null && categoria != data[i].categoria) continue;
            contenedor.innerHTML += `<div class="bg-white rounded-xl overflow-hidden group border border-outline-variant/30 hover:shadow-lg transition-shadow duration-500">
  
        <div class="relative aspect-[4/5] overflow-hidden">
            <img
            alt="Ixora Garden Suite"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="${fotosServicios[i]}"
            />
            
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full font-label-sm text-label-sm text-primary z-10">
            Para ${cantidadHuespedes} persona(s)
            </div>
        </div>

        <div class="p-8 space-y-4">
            <div class="flex justify-between items-baseline">
            <h4 class="font-headline-lg text-headline-lg">${data[i].nombre_servicio}</h4>
            <span class="text-on-surface-variant font-body-md">$${data[i].precio * cantidadHuespedes}</span>
            </div>
            
            <p class="text-on-surface-variant font-body-md">
            ${data[i].descripcion}
            </p>
            
            <button class="w-full py-3 border border-primary text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all">
            Seleccionar
            </button>
        </div>
        </div>`
        }
    } catch(error) {
        console.log(error)
    }
}

consultarServicios.addEventListener('click', (event) => {
    event.preventDefault();
    const cantidadHuespedes = document.getElementById('selectorHuespedes').value[0];
    const inicio = new Date (document.getElementById('selectorInicio').value);
    const final = new Date (document.getElementById('selectorFinal').value);
    servicio(inicio, final, cantidadHuespedes);
})
     
document.getElementById('botonConsultar').addEventListener('click', (event) => {
    event.preventDefault();
    const cantidadHuespedes = document.getElementById('selectorHuespedes').value[0];
    const inicio = new Date (document.getElementById('selectorInicio').value);
    const final = new Date (document.getElementById('selectorFinal').value);
    habitacion(cantidadHuespedes, inicio, final);
})

consultarHabitaciones.addEventListener('click', (event) => {
    event.preventDefault();
    const cantidadHuespedes = document.getElementById('selectorHuespedes').value[0];
    const inicio = new Date (document.getElementById('selectorInicio').value);
    const final = new Date (document.getElementById('selectorFinal').value);
    habitacion(cantidadHuespedes, inicio, final);
})

const datosMenu = localStorage.getItem('datosMenu')
if(datosMenu) {
    const diccionario = JSON.parse(datosMenu);
    document.getElementById('selectorHuespedes').value = diccionario.cantidadHuespedes;
    document.getElementById('selectorInicio').value = diccionario.inicio.substring(0, 10);
    document.getElementById('selectorFinal').value = diccionario.final.substring(0, 10);
    const inicio = new Date (diccionario.inicio);
    const final = new Date (diccionario.final);
    habitacion(diccionario.cantidadHuespedes[0], inicio, final);
}