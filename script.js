// ==========================================================================
// LÓGICA DE CONTROL - FITLIFE PREMIUM (DOM & MATH CHALLENGE)
// ==========================================================================
document.getElementById('btn-calcular').addEventListener('click', function() {

    // --- REQUISITO 3A: CAPTURA DE INPUTS (RESUELTO) ---
    const selectMembresia = document.getElementById('tipo-membresia');
    const tipoMembresia = selectMembresia.value;

    // Se usa :checked para tomar únicamente el radio button activo del grupo "periodo"
    const periodoSeleccionado = document.querySelector('input[name="periodo"]:checked');
    const mesesContratacion = parseInt(periodoSeleccionado.value);

    // --- REQUISITO 3B: ESTRUCTURA CONDICIONAL LOGICIAL (RESUELTO) ---
    let costoBaseMensual = 0;
    if (tipoMembresia === 'basico') {
        costoBaseMensual = 30;
    } else if (tipoMembresia === 'estudiante') {
        costoBaseMensual = 25;
    } else if (tipoMembresia === 'premium') {
        costoBaseMensual = 50;
    }

    // --- REQUISITO 3C: OPERACIONES Y CICLOS/MÉTODOS ADICIONALES (RESUELTO) ---
    let cargosAdicionales = 0;
    const checkboxesAdicionales = document.querySelectorAll('input[name="adicional"]:checked');

    checkboxesAdicionales.forEach(function(checkbox) {
        if (checkbox.value === 'casillero') {
            cargosAdicionales += 5;
        } else if (checkbox.value === 'nutricion') {
            cargosAdicionales += 15;
        } else if (checkbox.value === 'piscina') {
            cargosAdicionales += 10;
        }
    });

    // --- REQUISITO 3D: CÁLCULO DE DESCUENTOS POR PERÍODO (RESUELTO) ---
    let porcentajeDescuento = 0;
    if (mesesContratacion === 6) {
        porcentajeDescuento = 0.10; // 10% descuento
    } else if (mesesContratacion === 12) {
        porcentajeDescuento = 0.20; // 20% descuento
    }

    // --- OPERACIONES MATEMÁTICAS ---
    // Cálculo final: (Costo Base + Cargos Adicionales) * Meses, aplicándole el descuento correspondiente.
    const subtotalMensual = costoBaseMensual + cargosAdicionales;
    const totalSinDescuento = subtotalMensual * mesesContratacion;
    const montoDescuento = totalSinDescuento * porcentajeDescuento;
    const totalFinalCalculado = totalSinDescuento - montoDescuento;

    // --- REQUISITO 3E: IMPRESIÓN Y MANIPULACIÓN DEL DOM (RESUELTO) ---
    document.getElementById('res-base').innerText = `$${costoBaseMensual.toFixed(2)} USD/mes`;
    document.getElementById('res-adicionales').innerText = `$${cargosAdicionales.toFixed(2)}`;
    document.getElementById('res-descuento').innerText = `${porcentajeDescuento * 100}%`;

    // Se inyecta el total final formateado con exactamente 2 decimales
    document.getElementById('res-total').innerText = `$${totalFinalCalculado.toFixed(2)}`;
});
