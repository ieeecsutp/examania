# Examania - Landing Page

Esta es la landing page oficial de [Nombre del Proyecto], una plataforma innovadora diseñada para revolucionar la creación de material evaluativo. Nuestro sistema permite a educadores, capacitadores y profesionales generar exámenes y prácticas de alta calidad utilizando plantillas profesionales o con el poder de la Inteligencia Artificial.

El diseño de la plataforma se centra en la **flexibilidad** y **adaptabilidad**, asegurando una experiencia de usuario fluida e intuitiva tanto para creadores de contenido como para estudiantes.

---

## 🚀 Descripción del Proyecto

El objetivo de esta landing page es servir como la principal puerta de entrada a nuestra aplicación. Presenta de manera clara y concisa la propuesta de valor, las características clave y los beneficios de utilizar [Nombre del Proyecto] para la creación de evaluaciones.

### Características Principales (de la App)

* **Creación Asistida por IA:** Genera preguntas, respuestas e incluso exámenes completos basados en tus prompts.
* **Biblioteca de Plantillas:** Accede a un amplio repositorio de plantillas profesionales adaptadas a diferentes materias y tipos de evaluación.
* **Sistema Flexible:** Personaliza cada aspecto de tus exámenes, desde el tipo de pregunta hasta los esquemas de calificación.
* **Diseño Adaptativo (Responsive):** La plataforma (y esta landing page) están diseñadas para funcionar perfectamente en cualquier dispositivo: escritorio, tableta o móvil.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con un stack moderno enfocado en el rendimiento y la experiencia de desarrollo (DX).

* **[Astro](https://astro.build/):** El framework web principal, utilizado por su arquitectura de "islas" (Astro Islands) que permite enviar cero JavaScript al cliente por defecto.
* **[Tailwind CSS](https://tailwindcss.com/):** Un framework CSS *utility-first* para un diseño rápido y adaptativo.
* **JavaScript (ES6+):** Utilizado para la interactividad de componentes específicos (UI components).
* **HTML5:** Para la estructura semántica del contenido.
* **CSS3:** Estilos personalizados y complementarios a Tailwind.

---

## 📋 Requisitos Técnicos

Para clonar, instalar dependencias y ejecutar este proyecto en tu entorno local, necesitarás tener instalado el siguiente software.

### Prerrequisitos Indispensables

* **[Node.js](https://nodejs.org/):** Versión `v18.0.0` o superior. Astro requiere un entorno de ejecución de Node.js moderno.
    * *Verifica tu versión:* `node -v`
* **Gestor de Paquetes:** El proyecto utiliza `npm`, que se incluye automáticamente con Node.js.
    * *Verifica tu versión:* `npm -v`
* **[Git](https://git-scm.com/):** Necesario para clonar el repositorio y gestionar el control de versiones.

### Herramientas Recomendadas

Si bien no son estrictamente necesarios para *ejecutar* el proyecto, facilitarán enormemente el desarrollo:

* **[Visual Studio Code](https://code.visualstudio.com/):** El editor de código recomendado.
* **Extensión de VS Code:**
    * **[Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode):** Proporciona resaltado de sintaxis y IntelliSense para archivos `.astro`.
    * **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss):** Autocompletado inteligente para las clases de Tailwind.

---

## ⚡ Instalación y Ejecución

Sigue estos pasos para poner en marcha el proyecto:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
    ```

2.  **Navega al directorio del proyecto:**
    ```bash
    cd tu-repositorio
    ```

3.  **Instala las dependencias:**
    (Esto leerá el archivo `package.json` e instalará Astro, Tailwind y demás dependencias de desarrollo).
    ```bash
    npm install
    ```

4.  **Ejecuta el servidor de desarrollo:**
    (Esto inicia un servidor local, generalmente en `http://localhost:4321`, con *hot-reloading*).
    ```bash
    npm run dev
    ```

### Comandos Útiles

* **Iniciar Servidor de Desarrollo:**
    ```bash
    npm run dev
    ```

* **Crear un Build de Producción:**
    (Esto compila la aplicación en la carpeta `dist/` con todos los archivos estáticos optimizados).
    ```bash
    npm run build
    ```

* **Previsualizar el Build:**
    (Este comando te permite probar el build de producción localmente antes de hacer el deploy).
    ```bash
    npm run preview
    ```

## Estructura del archivo

EXAMANIA-1/
├── .astro/
├── .vscode/
├── node_modules/
├── public/
│   ├── favicon.svg
│   ├── img_2.png
│   ├── logo.png
│   ├── plantilla_01.png
│   ├── plantilla_02.png
│   ├── plantilla_03.png
│   ├── plantilla_04.png
│   ├── plantilla_05.png
│   ├── plantilla_06.png
│   ├── plantilla_07.png
│   ├── plantilla_08.png
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── img_context.png
│   ├── components/
│   │   ├── card.astro
│   │   ├── evaluation.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HeroCarousel.astro
│   │   ├── pasos.astro
│   │   ├── plantillas.astro
│   │   ├── preg-frec.astro
│   │   ├── primary.astro
│   │   ├── testimonials.astro
│   │   └── types.astro
│   ├── layouts/
│   │   └── Base_layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   └── carrusel.js
│   └── styles/
│       ├── sections/
│       │   ├── primary_style.css
│       │   ├── testimonials.css
│       │   └── types_style.css
│       └── global.css
├── .gitignore
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json