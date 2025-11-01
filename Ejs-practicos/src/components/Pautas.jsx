/* Crear código que integre el manejo del estado global para el carrito de compras y la autenticación de usuarios utilizando Context API y rutas protegidas con React Router DOM.

Requisitos del Proyecto:

1) Crear un nuevo archivo CarritoContext.js en la carpeta context.

2) Implementar un contexto con las funciones para agregar productos al carrito y vaciarlo.

3) Envolver el componente principal (App.js) con el proveedor del contexto CarritoProvider.

4) Crear un archivo AuthContext.js en la carpeta context.

5) Implementar funciones para iniciar sesión (login) y cerrar sesión (logout) simulando el manejo de un token con localStorage.

6) Crear un componente Login con un formulario básico para que los usuarios ingresen un nombre de usuario y contraseña.

7) Simular la autenticación validando las credenciales y redirigir a la página principal si son correctas.

8) Crear un componente ProtectedRoute que permita acceder a ciertas páginas solo si el usuario está autenticado.

9) Proteger la ruta del carrito para que solo usuarios autenticados puedan verlo.
*/