React Challenge - Aplicación Web con React Router y JSONPlaceholder

Descripción

Este proyecto es una aplicación web desarrollada con React que implementa enrutamiento utilizando react-router-dom, manejo de temas con context API y consumo de una API REST (JSONPlaceholder) para mostrar publicaciones en una lista interactiva.

Características

React Router: Navegación entre páginas con rutas definidas.

Consumo de API: Obtiene publicaciones desde https://jsonplaceholder.typicode.com/posts.

Context API: Manejo de tema con ThemeContext.

Tailwind CSS: Estilos modernos y responsivos.

Tecnologías utilizadas

*React

*React Router

*Tailwind CSS

*Context API

*Vite

JSONPlaceholder API

Instalación y Configuración

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local.

Prerrequisitos

Asegúrate de tener instalados:

Node.js (versión 16 o superior)

npm (o yarn como alternativa)

Paso 1: Clonar el repositorio

  git clone <URL_DEL_REPOSITORIO>
  cd <NOMBRE_DEL_PROYECTO>

Paso 2: Instalar dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:

  npm install
  # O si usas yarn
  yarn install

Paso 3: Ejecutar el proyecto en modo desarrollo

Inicia el servidor de desarrollo con el siguiente comando:

  npm run dev
  # O si usas yarn
  yarn dev

El proyecto estará disponible en http://localhost:5173/ (o el puerto que indique Vite).

Estructura del Proyecto

├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Product.jsx
│   │   ├── Details.jsx
│   │   ├── layout.jsx
│   │   ├── PageLayout.jsx
│   ├── context.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md

Explicación de Archivos Clave

main.jsx: Punto de entrada de la aplicación, configura React Router y ThemeProvider.

App.jsx: Define las rutas principales utilizando useRoutes().

context.jsx: Define el ThemeContext para manejar temas.

PageLayout.jsx: Configura las rutas dentro de la carpeta pages.

Product.jsx: Obtiene y muestra una lista de publicaciones desde JSONPlaceholder.

Details.jsx: Muestra los detalles de una publicación seleccionada.

layout.jsx: Proporciona una estructura de navegación.

Uso de la Aplicación

Inicio: Se muestra la pantalla principal con enlaces a "Home" y "Product".

Lista de Publicaciones: Al hacer clic en "Product", se carga la lista de publicaciones.

Detalles de Publicación: Se puede hacer clic en un post para ver sus detalles.

Mejoras Futuras

Implementar autenticación de usuario.

Agregar modo oscuro.

Mejorar la interfaz de usuario con animaciones.

Implementar página de "Acerca de".

Autor

Desarrollado por [Tu Nombre].

