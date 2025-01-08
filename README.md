# Frontend con Angular para la Aplicación de Usuarios

Este proyecto es un frontend desarrollado con Angular que consume un microservicio creado con Node.js y Express (Parte 1). Permite obtener datos de usuarios desde el backend y mostrarlos en un formulario dinámico.

---

## Características
- **Consumo de API REST** utilizando el módulo `HttpClient` de Angular.
- Renderización dinámica de los usuarios obtenidos desde el backend.
- Formulario que permite visualizar y editar los datos de los usuarios en tiempo real.

---

## Funcionalidades
- Solicitar los datos de los usuarios mediante una petición `GET` al endpoint del backend.
- Mostrar cada usuario en una fila del formulario con sus datos:
  - Nombre
  - Correo
  - Edad
- Interfaz sencilla y responsive basada en Bootstrap o CSS personalizado.

---

## Requisitos Previos
1. **Node.js** (v14 o superior).
2. **Angular CLI** instalado globalmente:
   ```bash
   npm install -g @angular/cli
   ```
3. **Backend** en ejecución (ver Parte 1 del proyecto).

---

## Configuración e Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/tu-repo-frontend.git
   cd tu-repo-frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura el archivo `environment.ts` con la URL del backend:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:3000/api' // URL del backend
   };
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```
   El frontend estará disponible en `http://localhost:4200`.

---


## Ejemplo Visual

![image](https://github.com/user-attachments/assets/a648b105-8692-470e-853b-4231fc2c2875)




## Autor
**Sergio Andrés Bareño**

