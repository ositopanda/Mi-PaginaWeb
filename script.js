// script.js
 
// Mostrar un mensaje de bienvenida cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    alert('¡Bienvenido a Mi Página Web!');
});
 
// Añadir funcionalidad para cambiar el color de fondo al hacer clic en un botón
function cambiarColorFondo() {
    document.body.style.backgroundColor = '#e0f7fa';
}
 
// Añadir un evento al botón para cambiar el color de fondo
document.getElementById('cambiarColorBtn').addEventListener('click', cambiarColorFondo);