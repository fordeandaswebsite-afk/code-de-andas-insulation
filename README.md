# Code de Andas Insulation

Bienvenido al repositorio de **Code de Andas Insulation** - El sitio web oficial de De Anda's Insulation, una empresa familiar especializada en aislamiento de espuma en spray.

---

## 🎯 ¿Qué es este proyecto?

Este es el **código completo del sitio web** de **De Anda's Insulation**, una empresa que ofrece servicios de aislamiento profesional en Milwaukee, Wisconsin. 

Piensa en este repositorio como una **caja de herramientas digital** que contiene todos los archivos necesarios para que el sitio web funcione correctamente cuando lo visitas en tu navegador.

---

## 📁 Estructura del Proyecto

### **Archivos HTML principales** (Las "páginas" del sitio)

- **`index.html`** - Página de **carga/verificación de seguridad**
  - Lo primero que ves cuando entras al sitio
  - Tiene una animación de carga con un logo que brilla
  - Incluye un sistema de **verificación de seguridad (reCAPTCHA v3)** que funciona en segundo plano
  - Después de completar la verificación, muestra el contenido principal

- **`videos.html`** - Página de **galería de videos y fotos**
  - Videos del trabajo realizado en casas, garajes, sótanos, áticos y techos exteriores
  - Fotografías de proyectos completados organizadas por categoría
  - Enlaces para volver a la página principal

### **Carpetas para archivos multimedia**

- **`imagenes/`** - Almacena logos y imágenes del sitio
  - Logo de la empresa (versiones completa y acortada)
  - Imágenes de proyectos y llegada a domicilio

- **`css/`** - Carpeta para archivos de **estilos**
  - `styles.css` - Estilos mejorados para la página principal
  - `styles2.css` - Estilos para la página de videos
  - Controla colores, tamaños, fuentes y diseño responsive

- **`videos y fotos/`** - Almacena todos los videos y fotografías del portafolio

### **Archivos especiales de configuración**

- **`robots.txt`** - Le dice a Google cómo explorar el sitio
- **`sitemap.xml`** - Mapa del sitio para Google
- **`BingSiteAuth.xml`** - Verificación para Bing
- **`google385e6d4c88897a47.html`** - Verificación para Google
- **`README.md`** - Este archivo que estás leyendo 📖

---

## 🗄️ Sistema de Almacenamiento de Reseñas (JSONBin.io)

**¡Novedad!** El sitio ahora utiliza un **sistema basado en JSONBin.io** que permite que **todos los usuarios vean las mismas reseñas**:

### ✅ Características del sistema:
- **Almacenamiento en la nube** - Las reseñas se guardan en JSONBin.io
- **Visibilidad global** - Todos los usuarios ven las mismas reseñas
- **Persistencia de datos** - Las reseñas permanecen guardadas para siempre
- **Actualización en tiempo real** - Nuevas reseñas aparecen inmediatamente para todos
- **100% gratuito** - El plan gratuito de JSONBin.io es suficiente

### 📊 Funciones del sistema:
| Función | Descripción |
|---------|-------------|
| `loadReviews()` | Carga las reseñas desde JSONBin.io |
| `saveReviews()` | Guarda las reseñas en JSONBin.io |
| `addReview()` | Agrega una nueva reseña |
| `renderReviews()` | Muestra las reseñas en pantalla |

### 📝 Datos que guarda cada reseña:
```json
{
  "id": 1,
  "rating": 5,
  "text": "Texto de la reseña...",
  "author": "Customer",
  "date": "Mar 2026"
}
```

---

## 🔧 ¿Cómo funciona todo junto?

Imagina que el sitio web es una **casa**:

1. **HTML** (en `index.html`) = Los **planos y estructura** de la casa
2. **CSS** (en la carpeta `css/`) = La **decoración** de la casa
3. **JavaScript** (en el código) = Los **sistemas inteligentes** de la casa:
   - reCAPTCHA v3 que verifica que eres humano sin que hagas clic
   - Sistema JSONBin.io que guarda reseñas en la nube
   - Animaciones y efectos interactivos
   - Popup de opinión flotante y arrastrable
4. **Imágenes y videos** = La **galería de fotos** de la casa
5. **`robots.txt` y `sitemap.xml`** = **Señalamientos** para Google

---

## 📊 Lo que contiene el sitio

### **Información del negocio**
- Servicios: aislamiento de espuma en spray, fiberglass, pulverización
- Cobertura: Milwaukee, Wisconsin
- Experiencia: Más de 20 años

### **Reseñas de clientes**
- Sistema de almacenamiento JSONBin.io
- **Todos los usuarios ven las mismas reseñas**
- Calificación de 5 estrellas
- Formulario para agregar nuevas reseñas

### **Galería multimedia**
- Videos de proyectos en: hogares, garajes, sótanos, áticos, techos exteriores
- Fotografías profesionales del trabajo realizado

### **Funcionalidades interactivas**
- Verificación de seguridad (reCAPTCHA v3) en segundo plano
- Formulario para dejar reseñas y calificaciones
- Ventana emergente flotante y arrastrable para opinión del sitio
- Enlaces directos a contacto, email, teléfono y Facebook

### **Optimización para buscadores (SEO)**
- Meta etiquetas con palabras clave
- Datos estructurados en formato JSON para Google
- Mejoras continuas para mejor indexación

---

## 🛠️ Lenguajes y tecnologías utilizadas

| Lenguaje/Tecnología | Uso |
|----------|-----|
| **HTML** | Estructura del sitio |
| **CSS** | Diseño y estilos |
| **JavaScript** | Interactividad y sistema JSONBin.io |
| **Google reCAPTCHA v3** | Seguridad invisible |
| **JSONBin.io API** | Almacenamiento en la nube de reseñas |
| **FormSubmit.co** | Envío de emails |

---

## 🌐 Cómo se ve el flujo del usuario

```
1. Usuario entra al sitio
        ↓
2. Ve la pantalla de carga con logo animado
        ↓
3. Barra de progreso avanza del 0% al 100%
        ↓
4. Sistema reCAPTCHA v3 verifica que es humano (EN SEGUNDO PLANO)
        ↓
5. Se muestra el contenido principal del sitio
        ↓
6. Carga las reseñas desde JSONBin.io (todos ven las mismas)
        ↓
7. Puede:
   - Dejar una nueva reseña (se guarda en la nube para todos)
   - Ver más videos/fotos (videos.html)
   - Contactar a la empresa
   - Opinar sobre el sitio web (popup arrastrable)
```

---

## 💾 Persistencia de datos

El sistema JSONBin.io guarda las reseñas en la **nube**:

- ✅ Las reseñas persisten para siempre
- ✅ **Todos los usuarios ven las mismas reseñas**
- ✅ No se pierden al borrar caché
- ✅ Se puede acceder desde cualquier dispositivo
- 📧 Las reseñas también se envían por email como notificación

---

## 🎨 Diseño responsive y mejoras visuales

El sitio funciona en:
- ✅ Computadoras de escritorio
- ✅ Tablets
- ✅ Teléfonos móviles

**Mejoras recientes en CSS:**
- Diseño más moderno y profesional
- Tarjetas de reseñas con efecto hover
- Animaciones suaves en la interfaz
- Colores corporativos (rojo y azul)
- Popup flotante arrastrable

---

## 🔐 Seguridad

- **reCAPTCHA v3 de Google** - Verificación invisible
- **FormSubmit.co** - Envío seguro de emails
- **Escape de HTML** - Previene ataques XSS
- **JSONBin.io** - Almacenamiento seguro en la nube
- **Meta etiquetas** - Validación con Google y Bing

### Diferencia entre reCAPTCHA v2 y v3:

| Característica | reCAPTCHA v2 (antes) | reCAPTCHA v3 (ahora) |
|----------------|---------------------|---------------------|
| Interacción del usuario | ❌ Hacer clic | ✅ Totalmente invisible |
| Experiencia | Molesta | Fluida |
| Tiempo de verificación | Manual | Automático |

---

## 📞 Información de contacto de la empresa

| Dato | Valor |
|------|-------|
| **Nombre** | De Anda's Insulation |
| **Especialidad** | Aislamiento de espuma en spray (Closed Cell) |
| **Teléfono** | +1 (414) 791-5065 |
| **Email** | deandasinsulation@gmail.com |
| **Ubicación** | Milwaukee, Wisconsin |
| **Experiencia** | Más de 20 años |

---

## 📌 Resumen para no técnicos

Este repositorio contiene **TODO el código** necesario para que el sitio web funcione:

- 📄 **2 páginas HTML** - Principal y galería
- 🎨 **2 archivos CSS** - Diseño moderno
- 🔧 **JavaScript integrado** - Sistema JSONBin.io, reCAPTCHA v3, popups
- 🖼️ **4 carpetas** - Imágenes, videos, estilos
- 🤖 **Configuración SEO** - Para Google
- ☁️ **JSONBin.io** - Reseñas en la nube visibles para todos

**Cuando alguien visita `deandasinsulation.netlify.app/`**, todos ven las mismas reseñas gracias a JSONBin.io. ✨

---

## 📋 Novedades y cambios recientes

| Fecha | Cambio |
|-------|--------|
| **2026-06-11** | 🚀 **Migración a JSONBin.io** - Las reseñas ahora son visibles para todos los usuarios |
| **2026-06-11** | 🎨 **Mejora del archivo styles.css** - Diseño más moderno |
| **2026-06-11** | 🤖 **Mejoras de SEO** - Mejor posicionamiento en Google |
| **2026-06-11** | 🔄 **Actualización de reCAPTCHA** - De v2 a v3 (verificación invisible) |
| **2026-06-11** | 📉 **Reducción de reseñas por defecto** - 6 reseñas iniciales |

---

### ✨ Resumen de mejoras clave:

1. **JSONBin.io** → Reseñas visibles para todos los usuarios
2. **CSS mejorado** → Diseño más profesional
3. **SEO optimizado** → Mejor posicionamiento
4. **reCAPTCHA v3** → Verificación invisible

---

- **Sitio web creado por:** Daniel de Anda
- **Para:** De Anda's Insulation LLC
- **Año:** 2026
- **Tecnología:** HTML, CSS, JavaScript, Google reCAPTCHA v3, JSONBin.io API
- **Hosting:** Netlify
- **Fecha de actualización: 11-junio-2026**
- **URL: <a>https://deandasinsulation.netlify.app/</a>**
