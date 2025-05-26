function validarContacto() {
    const nombreApellidoInput = document.getElementById('nombreApellido');
    const nombreApellido = nombreApellidoInput.value.trim();
    const correoElectronicoInput = document.getElementById('correoElectronico');
    const correoElectronico = correoElectronicoInput.value.trim();
    const telefonoInput = document.getElementById('telefono');
    const telefono = telefonoInput.value.trim();
    const asuntoInput = document.getElementById('asunto');
    const asunto = asuntoInput.value.trim();
    const mensajeInput = document.getElementById('mensaje');
    const mensaje = mensajeInput.value.trim();
    const errorMessages = [];

    if (nombreApellido === '') {
        errorMessages.push('Por favor, ingrese su Nombre y Apellido.');
    } else if (!/\S/.test(nombreApellido)) {
        errorMessages.push('Por favor, ingrese algún carácter en Nombre y Apellido.');
    }

    if (correoElectronico === '') {
        errorMessages.push('Por favor, ingrese su Correo Electrónico.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoElectronico)) {
        errorMessages.push('Por favor, ingrese un Correo Electrónico válido.');
    }

    if (telefono === '') {
        errorMessages.push('Por favor, ingrese su Teléfono.');
    } else if (!/^\d{7,}$/.test(telefono)) {
        errorMessages.push('Por favor, ingrese un Teléfono válido (mínimo 7 dígitos numéricos).');
    }

    if (asunto === '') {
        errorMessages.push('Por favor, ingrese el Asunto.');
    } else if (!/\S/.test(asunto)) {
        errorMessages.push('Por favor, ingrese algún carácter en el Asunto.');
    }

    if (mensaje === '') {
        errorMessages.push('Por favor, ingrese su Mensaje.');
    } else if (!/\S/.test(mensaje)) {
        errorMessages.push('Por favor, ingrese algún carácter en el Mensaje.');
    }

    if (errorMessages.length > 0) {
        alert('Por favor, corrija los siguientes errores:\n\n' + errorMessages.join('\n'));
        return false; 
    } else {
        alert(`Gracias por contactarme ${nombreApellido}. Ni bien me sea posible le estaré respondiendo al mail ${correoElectronico} o a su ${telefono}`);

        
        document.getElementById('nombreApellido').value = '';
        document.getElementById('correoElectronico').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('asunto').value = '';
        document.getElementById('mensaje').value = '';

        return false; 
    }
}
