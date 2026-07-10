// ==========================================================================
// LÓGICA DE CONTROL - FITLIFE PREMIUM (DOM & MATH CHALLENGE)
// ==========================================================================

document.getElementById('btn-calcular').addEventListener('click', function() {
    
    // --- REQUISITO 3A: CAPTURA DE INPUTS (COMPLETAR / CORREGIR) ---
    const selectMembresia = document.getElementById('tipo-membresia');
    const tipoMembresia = selectMembresia.value;

    // ERROR EN CAPTURA: El alumno debe capturar correctamente el valor del botón de radio SELECCIONADO.
    // Actualmente solo toma un elemento genérico sin validar cuál está activo (checked).
    // PISTA: Reemplazar por querySelector correcto que busque el input name="periodo" que esté :checked
    const periodoSeleccionado = document.querySelector('input[name="periodo"]'); 
    const mesesContratacion = parseInt(periodoSeleccionado.value);

    // --- REQUISITO 3B: ESTRUCTURA CONDICIONAL LOGICIAL (COMPLETAR) ---
    let costoBaseMensual = 0;

    if (tipoMembresia === 'basico') {
        costoBaseMensual = 30;
    } 
    // ¡COMPLETAR AQUÍ! El alumno debe agregar las condicionales para 'estudiante' ($25) y 'premium' ($50)
    // utilizando estructuras else if.
    


    // --- REQUISITO 3C: OPERACIONES Y CICLOS/MÉTODOS ADICIONALES (CORREGIR) ---
    let cargosAdicionales = 0;
    const checkboxesAdicionales = document.querySelectorAll('input[name="adicional"]:checked');
    
    checkboxesAdicionales.forEach(function(checkbox) {
        if (checkbox.value === 'casillero') {
            cargosAdicionales += 5;
        } else if (checkbox.value === 'nutricion') {
            cargosAdicionales += 15;
        }
        // ¡COMPLETAR AQUÍ! El alumno debe agregar la lógica para sumar el costo de la 'piscina' ($10)
        
    });

    // --- REQUISITO 3D: CÁLCULO DE DESCUENTOS POR PERÍODO (COMPLETAR) ---
    let porcentajeDescuento = 0;

    if (mesesContratacion === 6) {
        porcentajeDescuento = 0.10; // 10% descuento
    }
    // ¡COMPLETAR AQUÍ! El alumno debe agregar la lógica para el descuento del 20% si los meses son 12
    


    // --- OPERACIONES MATEMÁTICAS ---
    // Cálculo final: (Costo Base + Cargos Adicionales) * Meses, aplicándole el descuento correspondiente.
    const subtotalMensual = costoBaseMensual + cargosAdicionales;
    const totalSinDescuento = subtotalMensual * mesesContratacion;
    const montoDescuento = totalSinDescuento * porcentajeDescuento;
    const totalFinalCalculado = totalSinDescuento - montoDescuento;

    // --- REQUISITO 3E: IMPRESIÓN Y MANIPULACIÓN DEL DOM (COMPLETAR) ---
    document.getElementById('res-base').innerText = `$${costoBaseMensual.toFixed(2)} USD/mes`;
    document.getElementById('res-adicionales').innerText = `$${cargosAdicionales.toFixed(2)}`;
    document.getElementById('res-descuento').innerText = `${porcentajeDescuento * 100}%`;
    
    // ERROR / INCOMPLETO: El alumno debe renderizar el 'totalFinalCalculado' con 2 decimales en el elemento correcto del DOM.
    // PISTA: Identificar el id del elemento span que muestra el Total Final en el HTML.
    // [Escribir código aquí para actualizar el total final]

});