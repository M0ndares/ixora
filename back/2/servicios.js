const fotos = [ "https://lh3.googleusercontent.com/aida-public/AB6AXuDzzAE3GjOxATiQz66ZJJpagVBh1GiG2zBeMIkkWUcbMnfKv3uu80c_7aOHGlZqdY6jjdwzsiG-_pr0lqgIEX7MhnQZyFPq6UB_9CIk_gDuFAri8K9uEPi2AYiH6np53Qe5fiWS3R7wOLr7wTLcmYFwM9gld1QnQQB_UBAOXkVCTxldhn--JM73Ju6p6B2HUMN3mhR-uAWKlsSd_-DUgQxpzQKxZ_lQzNNJfXWc6sKoiV9ggYf1YGvnRKqEjULK8YATH-NzR7bnnQ",
            "https://cdn.aarp.net/content/dam/aarpe/es/home/turismo/consejos-para-viajar/info-2023/autobuses-de-lujo/_jcr_content/root/container_main/container_body_main/container_image/articlecontentfragme/cfimage.coreimg.75.1320.jpeg/content/dam/aarp/travel/travel_tips/2023/08/1140-vonlane-luxury-bus-esp.jpg",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD8XShENsd-N05jEYm3NHqnv-mcsuaI-8y3JKsM0pdeL7KMppID0-b4voEgNBdPzBQ449toKGyNxV4sGqqr7uur5xd396CnsrUcS1sT6iO8l4CEOcSfFIs1DUdCoSyteHlgmnBuaBSQccu_-yubijB3sZDoudNM5jdJl-fD4Xpr5Acm9W6f_2RaAnoeLnR6gEpSvSxnBIye4Uc9n4TXvPMjMgFUerV9_7RZDoVkHRRzRc-dZk1bUMvSPwHOmblHEKIrgHtoEResdw", 
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAJM3UbtpkQSY0f3Im9Hkl4mk8blcDBoLQdNsnrY2AHDByV24Hzv1oxGHOrZgCE8RNjRNhlhXwQ84EKsIwvWED5Hl6IzlZkRTWAZl22-R9fBVopwA4vZhrp2XfvC2d5p61jm9t75CiLbrLU27muFfICk328AcJwJEhs1hmkx5Dn5SRF8NHUT6yYJNLEz83ql7RspT7fspuoKB330Kh4a--9M5PhnqBjBUO9SVBykLfojs-Xf3IZSC9aXRwLTthklrYZn1Y-YCyMyA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBgWbWb-D1gIT9SNuQPHw88PkSHiHy2aj653rKgc98zlq5JwMOouZboFYBgaQ_OleCkqWCIcn3F03h5ZuJmgOdRFWEiAWEdGLiHvMGJGsLIxWIAjDfjHMuQtDFrssr4lgGD3I1VlSUcA0-9FWTGmYyamij-N-sHX5S3Xv1uHifWsE2Ft1Kez8ExHK-A2z1fb-G0B23Xn0c8AoXH5BUwdDkd2L1y1M2AONZ06Vy2XoaSqMDXLv4L2P1Xx8xGiPio-iU0esIbLURxtw",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAmrVOdDq76i7ToAbRmKAgFMAvOpn1KeB10PzRp5LXTVU4kx6Zlx3z_bIMRinCZ4kF2NcekYE4dHgmbBrrG7_F9t4q7twGO4ret2nj_rjlYELMw3yDa7xF6Uujl5YMzLHR4XaSUj8okqMcLiCjZXHwOjubeLH_S7zIpbSigd_vmPlQLxEiRE2pnGFt-mTIgZLUrCP7dhAK-hrU8iAqDAAcdnKVGiyilfKy3EFc4XTfcyr8i2RIxVglCTe1GpX7aFPAJ4bmf_8XD-g"]
const estrellas = ['4.4', '4.7', '4.8', '4.5', '4.9']
const contenedorServicios = document.getElementById('contenedorServicios');
async function servicio(categoria = null, esCiclo = false) {
    try {
        const response = await fetch(`https://ixora-4tb9.onrender.com/api/servicios`);
        const data = await response.json();
        for(let i = 0; i < data.length; i++) {
            if (categoria != null && categoria != data[i].categoria) continue;
            contenedorServicios.innerHTML += `<article class="bg-surface rounded-xl overflow-hidden luxury-shadow group flex flex-col">
                        <div class="relative h-72 overflow-hidden">
                            <img alt="Suite Deluxe Ixora"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                data-alt="A spacious and high-end hotel suite with a king-size bed draped in premium linen. Large floor-to-ceiling windows reveal a lush tropical garden with sunlight pouring in. The interior features natural wood textures, minimalist Mexican furniture, and soft cream walls. The mood is tranquil and sophisticated, utilizing a light-mode color palette with subtle red accents in the textiles."
                                src=${fotos[i]} />
                            <div
                                class="absolute top-4 left-4 bg-surface/90 px-3 py-1 rounded-full flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-green-500"></span>
                                <span class="font-label-sm text-label-sm text-primary uppercase">Disponible</span>
                            </div>
                        </div>
                        <div class="p-6 flex-grow">
                            <h2 class="font-headline-lg text-headline-lg text-primary mt-2 mb-3">${data[i].nombre_servicio}
                            </h2>
                            <p class="font-body-md text-on-surface-variant line-clamp-2 mb-6">${data[i].descripcion}
                            </p>
                            <div class="grid grid-cols-2 gap-4 mb-8">
                                <div class="flex items-center gap-2 text-outline">
                                    <span class="material-symbols-outlined text-[20px]">category</span>
                                    <span class="font-label-sm">${data[i].categoria} </span>
                                </div>
                                <div class="flex items-center gap-2 text-outline">
                                    <span class="material-symbols-outlined text-[20px]">hotel_class</span>
                                    <span class="font-label-sm">${estrellas[data[i].id_servicio - 1]}/5</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="p-6 pt-0 mt-auto border-t border-outline-variant/10 flex items-center justify-between">
                            <div>
                                <p class="text-[10px] font-bold uppercase text-outline">Desde</p>
                                <p class="font-headline-lg text-primary">Desde $${data[i].precio} <span class="text-body-md font-body-md">/
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
    contenedorServicios.innerHTML = '';
    const categoria = document.getElementById('selectorCategoria').value;
    servicio(categoria);
})
    
document.addEventListener('DOMContentLoaded', (event) => {
    contenedorServicios.innerHTML = '';
    servicio(null);
})

contenedorServicios.addEventListener('click', (event) => {
    const botonHabitacion = event.target.closest('.botonSeleccionar');
    if (botonHabitacion) {
        window.location.href = '../../front/4/reservacion.html'
    }
});