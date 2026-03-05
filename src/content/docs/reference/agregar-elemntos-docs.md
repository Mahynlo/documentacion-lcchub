---
title: Añadir o modificar la docuemntacion
description: Explicar cómo mantener, actualizar y operar la aplicación de forma segura y eficiente.
---

## Instalacion de la doceumntacion

Para añadir a la docuemntacion clone el repositorio de la docuemntacion:
```bash
git clone los demas 
```
instale las dependiencias:
```bash
npm install
```

## Estructura de doceumntacion

```text
my-starlight-docs/       # Carpeta raíz del proyecto
├─ public/                # Archivos públicos servidos tal cual
│  ├─ images/             # Imágenes usadas en la documentación
│  │   └─ arquitectura.png
│  └─ favicon.ico
├─ src/
│  ├─ assets/             # Archivos que requieren build (JS, SCSS, etc.)
│  │   └─ styles/
│  │       └─ main.css
│  ├─ components/         # Componentes reutilizables de Astro
│  │   └─ MyComponent.astro
│  ├─ content/            # Documentación y guías
│  │   ├─ docs/
│  │   │   ├─ guides/
│  │   │   │   ├─ introduccion.md
│  │   │   │   ├─ arquitectura.md
│  │   │   │   ├─ codigo-fuente.md
│  │   │   │   ├─ instalacion-y-configuracion.md
│  │   │   │   ├─ actualizacion-de-contenido.md
│  │   │   │   └─ despliegue.md
│  │   │   └─ reference/  # Documentación de referencia autogenerada
│  │   │       └─ ejemplo.md
│  └─ layouts/            # Layouts de Starlight
│      └─ Layout.astro
├─ astro.config.mjs       # Configuración principal de Astro
├─ starlight.config.mjs   # Configuración de Starlight (sidebar, título, etc.)
├─ package.json
└─ tsconfig.json          # Si usas TypeScript

```

## Añadir archivo a la doceumntacion
En el directorio **guides/** dodnde se pude indexar un nuevo archivo o modificar los existente.
Despues en nesesario direigirse a astro.config.mjs para añadir el archivo creado para que aparesca en la docuemntacion.