//boton de consultar
document.getElementById('botonConsultar').addEventListener('click', (event) => {
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
})