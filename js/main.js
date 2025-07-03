document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
      nombre: form.nombre.value,
      curp: form.curp.value,
      fecha_nacimiento: form.fecha_nacimiento.value,
      sexo: form.sexo.value,
      telefono: form.telefono.value,
      correo: form.correo.value,
      domicilio: form.domicilio.value,
      municipio: form.municipio.value,
      estado: form.estado.value,
      curso: form.curso.value,
      escolaridad: form.escolaridad.value,
      difusion: form.difusion.value
    };

    try {
      const res = await fetch('https://TU-BACKEND.onrender.com/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      alert(data.message || 'Inscripción enviada');
      form.reset();
    } catch (err) {
      alert('❌ Error al enviar la inscripción');
      console.error(err);
    }
  });
});

