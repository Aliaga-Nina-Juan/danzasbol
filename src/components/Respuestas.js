function Respuesta(){
    const nom = document.getElementById('nombre').value;
    const edad = 2023 - (parseInt(document.getElementById('año').value));
    const uni = document.getElementById('universidad').value;

    (document.getElementById('salida-nombre').value)=nom;
    (document.getElementById('salida-año').value)=edad;
    (document.getElementById('salida-uni').value)=uni;
}

export default Respuesta
