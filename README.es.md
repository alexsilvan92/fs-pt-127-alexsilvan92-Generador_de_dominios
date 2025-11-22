<!-- hide -->
# Generador de Dominios

Este proyecto genera combinaciones de nombres de dominio usando JavaScript.  
El usuario puede generar dominios a partir de listas de pronombres, adjetivos, sustantivos y extensiones de dominio.

---

## 📂 Estructura del proyecto

```text
/src
   ├─ app.js            // Versión que genera los dominios y los imprime en la consola
   ├─ index.js          // Versión que genera los dominios y los muestra en el HTML
   ├─ index.html        // HTML principal
   └─ style.css         // Estilos opcionales
```

---

## 📝 Descripción de los archivos JavaScript

### 1️⃣ `app.js`
- Contiene la lógica básica para generar todos los dominios posibles.  
- **Salida:** imprime todos los dominios en la consola del editor.  
- **Uso:** útil para pruebas rápidas y para verificar que la lógica funciona correctamente.

### 2️⃣ `index.js`
- Contiene la misma lógica de generación de dominios, pero interactúa con el HTML.  
- **Salida:** agrega cada dominio como un elemento `<li>` dentro de un `<ul>` en la página.  
- Incluye un botón que, al pulsarlo, genera y muestra los dominios en el HTML.

---

## 💻 Cómo usar el proyecto

### Versión principal (requerida)
1. Ejecutar `app.js` en la consola del editor con Node.js.  
2. Los dominios generados se imprimirán en la consola con `console.log()`.

### Versión opcional (interactiva en HTML)
1. Abrir `index.html` en un navegador.  
2. Pulsar el botón Generar dominios.  
3. Los dominios aparecerán listados dinámicamente en la página como elementos `<li>` dentro de un `<ul>`.  
> Esta versión sirve para ver el resultado directamente en la página y practicar interacción con el DOM.

---

## 🚀 Funcionalidad extra: Domain Hacks

Además de generar dominios completos, se pueden crear **"domain hacks"**, donde la extensión forma parte del nombre del dominio.  

Por ejemplo:  

- En lugar de `puedes.es`, el **hack** sería `pued.es`  
  - Se mantiene la palabra completa (`puedes`)  
  - Se aprovecha la extensión `.es` para formar la palabra dentro del dominio  

Esto permite crear dominios **más creativos** usando combinaciones con las extensiones.

---

## 🛠 Tecnologías usadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Bootstrap 5 (opcional para estilos de lista y botones)

---

## ✨ Resumen

Este proyecto demuestra:

- Uso de arrays y bucles anidados para generar combinaciones.
- Manipulación del DOM para mostrar resultados dinámicamente.
- Diferencia entre generar resultados en la consola (`app.js`) y en el HTML (`index.js`).
