# Documentación de LCC-HUB (Construida con Starlight)

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Este repositorio contiene el código fuente de la documentación oficial del proyecto LCC-HUB, construida utilizando **Astro** y **Starlight**.

> 🧑‍🚀 **¿Eres nuevo en el proyecto?** Sigue las instrucciones a continuación para levantar el entorno local, realizar cambios y entender cómo se despliega el sitio.

## 🚀 Estructura del Proyecto

Dentro de este proyecto de Astro + Starlight, encontrarás la siguiente estructura de carpetas y archivos clave:

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

* **`/src/content/docs/`**: Aquí es donde ocurre la magia. Starlight busca archivos `.md` o `.mdx` en este directorio. Cada archivo se convierte automáticamente en una página web basada en su nombre.
* **`/src/assets/`**: Guarda aquí las imágenes del proyecto. Puedes incrustarlas en tus archivos Markdown utilizando enlaces relativos.
* **`/public/`**: Directorio para recursos estáticos que no necesitan ser procesados, como el *favicon* (`favicon.svg`).

## 🧞 Comandos Útiles

Todos los comandos deben ejecutarse desde la raíz del proyecto utilizando tu terminal:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala todas las dependencias necesarias del proyecto. |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:4321`. |
| `npm run build` | Compila el sitio y lo prepara para producción en la carpeta `./dist/`. |
| `npm run preview` | Previsualiza tu compilación localmente antes de desplegarla. |
| `npm run astro ...` | Ejecuta comandos de la CLI de Astro (ej. `astro add`, `astro check`). |
| `npm run astro -- --help` | Muestra el menú de ayuda de la CLI de Astro. |

## 🌐 Despliegue en GitHub Pages (CI/CD)

Este repositorio ya incluye un flujo de trabajo de GitHub Actions ([`deploy.yml`](.github/workflows/deploy.yml)) configurado para compilar y publicar la documentación automáticamente en **GitHub Pages** cada vez que se realiza un *push* a la rama `main`.

**Pasos necesarios para habilitarlo en GitHub (solo la primera vez):**

1. Ve a la pestaña **Settings** (Configuración) del repositorio en GitHub.
2. En la barra lateral izquierda, selecciona **Pages**.
3. En la sección *Build and deployment*, cambia la opción de *Source* a **GitHub Actions**.
4. Realiza un *push* a la rama `main` para disparar el flujo de trabajo por primera vez.

**URL de despliegue esperada:**
👉 [https://mahynlo.github.io/documentacion-lcchub/](https://mahynlo.github.io/documentacion-lcchub/)

## 📚 ¿Quieres aprender más?

Si necesitas realizar configuraciones avanzadas o personalizar la apariencia del sitio, te recomendamos revisar la documentación oficial de las herramientas que utilizamos:
* [Documentación de Starlight](https://starlight.astro.build/es/)
* [Documentación de Astro](https://docs.astro.build/es/)