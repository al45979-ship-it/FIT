# 🏋️‍♂️ Desafío Práctico: Cotizador FitLife Premium

¡Bienvenido al examen práctico de Programación Web! En esta prueba actuarás como desarrollador de software para la cadena de gimnasios **FitLife Premium**. Tu objetivo es terminar y corregir un prototipo interactivo de cotización de membresías universitarias utilizando **HTML5**, **CSS3 (Flexbox)** y **JavaScript**.

El proyecto ya cuenta con una estructura inicial, pero está **incompleto y contiene errores intencionales** que bloquean la experiencia de usuario y los cálculos matemáticos.

---

## 🛠️ Fase Inicial: Flujo de Trabajo con Git y GitHub

Antes de escribir cualquier línea de código, debes configurar tu entorno de desarrollo siguiendo estos pasos obligatorios:

1. **Crear desde el Template / Clonar:**
   - Accede al repositorio base proporcionado por tu docente.
   - Haz clic en el botón **"Use this template"** (Usar esta plantilla) para generar una copia en tu cuenta personal de GitHub.
   - Clona tu nuevo repositorio en tu computadora local usando la terminal:
     ```bash
     git clone [https://github.com/TU_USUARIO/nombre-del-repositorio.git](https://github.com/TU_USUARIO/nombre-del-repositorio.git)
     ```
2. **Crear Rama de Trabajo:**
   - Muévete a la carpeta del proyecto y crea una rama llamada `desarrollo-examen`:
     ```bash
     git checkout -b desarrollo-examen
     ```
3. **Guardar Cambios (Commits):**
   - Realiza al menos **3 commits** durante la prueba que demuestren tu progreso incremental (por ejemplo: `feat: completado requerimiento HTML`, `fix: corregido layout con flexbox`, `feat: logica JS finalizada`).

---

## 📋 Requerimientos del Examen (30 - 45 Minutos)

### 1. Estructura y Controles (HTML5)
Abre el archivo `index.html`. Debes expandir el formulario con los siguientes controles faltantes especificados en el caso de negocio:
- **1A. Tipos de Membresía (`<select>`):** Agrega dos nuevas opciones dentro del elemento select existente:
  - Opción: `Estudiante Universitario` con el atributo `value="estudiante"`.
  - Opción: `Plan Premium Total` con el atributo `value="premium"`.
- **1B. Período de Contratación (`radio`):** Agrega una tercera opción de botón de opción (radio button) en el grupo `name="periodo"`:
  - Debe tener el atributo `value="12"`.
  - El texto visible debe indicar: `12 Meses (20% descuento total)`.
- **1C. Servicios Adicionales (`checkbox`):** Agrega una tercera opción de casilla de verificación (checkbox) en el grupo de adicionales:
  - Debe tener el atributo `name="adicional"` y `value="piscina"`.
  - El texto visible debe indicar: `Acceso a la Piscina Olímpica (+$10 USD)`.

### 2. Diseño Responsivo y Alineación (CSS3 Flexbox)
Abre el archivo `style.css`. El sitio actualmente se visualiza roto o en una sola columna vertical debido a un error de maquetación intencional.
- **2A. Contenedor Principal:** Localiza la clase `.main-container`. Cambia la propiedad `display: block` a `display: flex`. Asegúrate de habilitar `flex-wrap` para que los paneles se reacomoden fluidamente en dispositivos móviles.
- **2B. Distribución de Paneles:** Asegúrate de que las tarjetas `.form-panel` y `.result-panel` tengan asignada la propiedad `flex` de forma que compartan el espacio disponible equitativamente en pantallas de escritorio (`min-width`), pero bajen limpiamente a ocupar el 100% en pantallas móviles.

### 3. Lógica del Cotizador y DOM (JavaScript)
Abre el archivo `script.js`. El código tiene la estructura general de eventos, pero carece de la lógica de captura dinámica y validación. Busca las etiquetas `// REQUISITO` para guiarte:
- **3A. Corregir Captura de Radio Buttons:** El código actual lee incorrectamente el grupo de botones de opción de tipo radio. Modifica la instrucción utilizando el selector adecuado (`querySelector`) para extraer únicamente el valor del botón que el usuario ha seleccionado (`:checked`).
- **3B. Condicionales de Costo Base:** Completa la estructura `if/else if` para asignar el costo base correcto a la variable `costoBaseMensual` según la selección del usuario:
  - Si el valor es `estudiante`, el costo es `$25`.
  - Si el valor es `premium`, el costo es `$50`.
- **3C. Validación de Checkboxes Adicionales:** Dentro del ciclo `forEach`, añade la condición faltante para comprobar si el checkbox seleccionado corresponde a `piscina`. Si es así, suma `$10` a la variable `cargosAdicionales`.
- **3D. Aplicar Descuento a Largo Plazo:** Añade la condición para identificar si el período seleccionado (`mesesContratacion`) es igual a `12`. De ser verdadero, asigna un `0.20` (20%) a la variable `porcentajeDescuento`.
- **3E. Impresión del Total General:** Al final del evento, localiza el elemento del DOM correspondiente al precio total (`#res-total`) e inyecta el resultado de la variable `totalFinalCalculado` formateado con exactamente dos decimales (ej. `$120.00`).

---

## 🚀 Despliegue Final

Una vez que el sistema funcione correctamente y todos los cálculos sean exactos:
1. Fusiona tus cambios a la rama principal e insértalos en GitHub (`git push origin main`).
2. Ve a la pestaña **Settings** (Configuración) de tu repositorio en GitHub.
3. En el menú izquierdo, selecciona **Pages**.
4. En la sección *Build and deployment*, configura la fuente (*Source*) para que despliegue desde la rama `main` (o `master`) y la carpeta `/root`. Haz clic en **Save**.
5. Envía a tu profesor el enlace público generado (ej. `https://tu-usuario.github.io/nombre-del-repositorio/`).

---
*¡Mucho éxito! Lee con detenimiento cada comentario en el código y asegúrate de verificar tus operaciones matemáticas en la consola del navegador.*