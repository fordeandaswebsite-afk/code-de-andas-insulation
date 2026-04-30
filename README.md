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
  - Incluye un sistema de **verificación de seguridad (CAPTCHA)** para proteger el sitio
  - Después de completar la verificación, te lleva a la página principal

- **`inicio.html`** - Página **principal** del sitio
  - Información sobre la empresa y sus servicios
  - Muestra **20 reseñas de clientes reales** (todas con 5 estrellas ⭐)
  - Videos de **proyectos reales** completados
  - Formulario para que **dejes tu propia reseña**
  - Sistema de **contacto directo** (email y teléfono)
  - Datos estructurados para que Google entienda mejor el negocio

- **`videos.html`** - Página de **galería de videos y fotos**
  - Videos del trabajo realizado en casas, garajes, sótanos, áticos y techos exteriores
  - Fotografías de proyectos completados organizadas por categoría
  - Enlaces para volver a la página principal

### **Carpetas para archivos multimedia**

- **`imagenes/`** - Almacena logos y imágenes del sitio
  - Logo de la empresa (versiones completa y acortada)
  - Imágenes de cómo llegan a tu casa

- **`js/`** - Carpeta para archivos **JavaScript** (la "magia interactiva")
  - Contiene `reviews.js` para manejar las reseñas de clientes

- **`css/`** - Carpeta para archivos de **estilos**
  - `styles.css` - Estilos para la página principal
  - `styles2.css` - Estilos para la página de videos
  - Controla colores, tamaños, fuentes y diseño responsive (se adapta a móviles y computadoras)

- **`videos y fotos/`** - Almacena todos los videos y fotografías del portafolio
  - Videos de trabajos en: hogares, garajes, sótanos, áticos, techos exteriores
  - Fotos de antes y después de los proyectos

### **Archivos especiales de configuración**

- **`robots.txt`** - Le dice a Google cómo explorar el sitio
  - Marca qué páginas deben aparecer en Google
  - Indica dónde está el mapa del sitio (sitemap)

- **`sitemap.xml`** - Es como un **índice de contenidos**
  - Le dice a Google todas las páginas del sitio y cuándo se actualizaron
  - Ayuda a que el sitio aparezca mejor en búsquedas

- **`BingSiteAuth.xml`** - Verificación para el buscador Bing
  - Confirma que somos propietarios del sitio

- **`google385e6d4c88897a47.html`** - Verificación para Google
  - Confirma que somos propietarios en Google Search Console

- **`README.md`** - Este archivo que estás leyendo 📖

---

## 🔧 ¿Cómo funciona todo junto?

Imagina que el sitio web es una **casa**:

1. **HTML** (en `index.html` e `inicio.html`) = Los **planos y estructura** de la casa (paredes, puertas, ventanas)

2. **CSS** (en la carpeta `css/`) = La **decoración** de la casa (pintura, muebles, iluminación, colores bonitos)

3. **JavaScript** (en `js/`) = Los **sistemas inteligentes** de la casa:
   - El CAPTCHA que verifica que eres una persona real
   - El formulario de reseñas que guarda tus opiniones
   - Las animaciones y efectos interactivos

4. **Imágenes y videos** = La **galería de fotos** de la casa mostrando proyectos realizados

5. **`robots.txt` y `sitemap.xml`** = Los **señalamientos** para que Google encuentre fácilmente todas las habitaciones

---

## 📊 Lo que contiene el sitio

### **Información del negocio**
- Descripción de servicios: aislamiento de espuma en spray, fiberglass, pulverización
- Cobertura geográfica: Milwaukee, Wisconsin y estados vecinos
- Experiencia: Más de 20 años en el negocio

### **Reseñas de clientes**
- 20 reseñas reales de clientes satisfechos
- Sistema de calificación de 5 estrellas
- Testimonios sobre calidad, profesionalismo y rapidez

### **Galería multimedia**
- Videos de proyectos en: hogares, garajes, sótanos, áticos, techos exteriores
- Fotografías profesionales del trabajo realizado
- Compilación de trabajos del 2025

### **Funcionalidades interactivas**
- Verificación de seguridad (CAPTCHA) al entrar
- Formulario para dejar reseñas y calificaciones
- Ventana emergente para dar opinión sobre el sitio web
- Enlaces directos a contacto, email, teléfono y Facebook

### **Optimización para buscadores (SEO)**
- Meta etiquetas con palabras clave (Milwaukee, aislamiento, spray foam)
- Datos estructurados en formato JSON para Google
- Información de ubicación (direcciones, horario)
- Calificaciones agregadas (4.8 estrellas de 15 reseñas)

---

## 🛠️ Lenguajes y tecnologías utilizadas

| Lenguaje | Uso | Dónde |
|----------|-----|-------|
| **HTML** | Estructura del sitio | `index.html`, `inicio.html`, `videos.html` |
| **CSS** | Diseño y estilos | `css/styles.css`, `css/styles2.css` |
| **JavaScript** | Interactividad | `js/reviews.js`, código en HTML |
| **Google reCAPTCHA** | Seguridad | Sistema de verificación |
| **Supabase** | Base de datos para reseñas | Almacena opiniones de usuarios |
| **FormSubmit.co** | Envío de emails | Recibe opiniones desde el popup |

---

## 📝 Descripción técnica por página

### **Página de Carga (index.html)**
- **Logo animado** que brilla y se expande
- **Barra de progreso** que simula carga durante 4 segundos
- **Sistema CAPTCHA de Google** para verificar que eres humano
- Después de completar todo, redirige a `inicio.html`

### **Página Principal (inicio.html)**
- **Encabezado** con logo y descripción de servicios
- **Secciones de información**:
  - Quiénes somos
  - Servicios ofrecidos
  - Beneficios del aislamiento
  - Ventajas de la empresa
  - Datos útiles técnicos
- **Videos incrustados** de YouTube mostrando proyectos
- **20 tarjetas de reseñas** con testimonios de clientes
- **Formulario para dejar reseña**
- **Información de contacto** (email, teléfono, Facebook)
- **Popup interactivo** que pregunta tu opinión sobre el sitio

### **Página de Galería (videos.html)**
- **6 secciones** organizadas por tipo de proyecto:
  1. Casas/Hogares (5 videos, 1 foto)
  2. Garajes (2 videos, 5 fotos)
  3. Sótanos (2 videos)
  4. Áticos/Penthouses (1 video, 2 fotos)
  5. Techos exteriores (4 videos)
  6. Compilación 2025 (1 video)
- Todos los videos son controlables (play, pause, volumen)
- Enlace para volver a la página principal

---

## 🌐 Cómo se ve el flujo del usuario

```
1. Usuario entra al sitio
        ↓
2. Ve la página de carga (index.html) con logo animado
        ↓
3. Sistema CAPTCHA verifica que es humano
        ↓
4. Se redirige a la página principal (inicio.html)
        ↓
5. Ve información, reseñas, videos y contacto
        ↓
6. Puede:
   - Dejar una reseña
   - Ver más videos/fotos (videos.html)
   - Contactar a la empresa
   - Opinar sobre el sitio web
```

---

## 🎨 Diseño responsive

El sitio funciona en:
- ✅ **Computadoras de escritorio** (pantallas grandes)
- ✅ **Tablets** (pantallas medianas)
- ✅ **Teléfonos móviles** (pantallas pequeñas)

El CSS se adapta automáticamente para que se vea bien en cualquier dispositivo.

---

## 🔐 Seguridad

- **CAPTCHA de Google** - Protege contra bots automatizados
- **FormSubmit.co** - Servicio seguro para recibir emails
- **Supabase** - Base de datos segura para almacenar reseñas
- **Meta etiquetas** - Validan la propiedad con Google y Bing

---

## 📞 Información de contacto de la empresa

| Dato | Valor |
|------|-------|
| **Nombre** | De Anda's Insulation |
| **Especialidad** | Aislamiento de espuma en spray |
| **Teléfono** | +1 (414) 791-5065 |
| **Email** | deandasinsulation@gmail.com |
| **Ubicación** | Milwaukee, Wisconsin |
| **Servicio** | Wisconsin y estados vecinos |
| **Facebook** | De Anda's Insulation LLC |
| **Experiencia** | Más de 20 años |

---

## 👨‍💻 Créditos

- **Sitio web creado por:** Daniel de Anda
- **Para:** De Anda's Insulation LLC
- **Año:** 2026
- **Tecnología:** HTML, CSS, JavaScript, Google APIs
- **Hosting:** Netlify

---

## 📌 Resumen para no técnicos

Este repositorio contiene **TODO el código** necesario para que el sitio web de De Anda's Insulation funcione. Es como tener el "recetario completo" de la página web:

- 📄 **3 páginas HTML** - Las diferentes "habitaciones" del sitio
- 🎨 **2 archivos CSS** - Cómo se ve y se siente el sitio
- 🔧 **1 archivo JavaScript** - La "inteligencia" del sitio
- 🖼️ **4 carpetas** - Para organizar imágenes, videos, estilos y código
- 🤖 **Configuración SEO** - Para que Google encuentre el sitio fácilmente

**Cuando alguien visita `deandasinsulation.netlify.app/`**, GitHub y Netlify usan estos archivos para mostrar el sitio web completo. ✨

---

*Creado por: fordeandaswebsite-afk*  
*Fecha de actualización: 2026-04-30*
