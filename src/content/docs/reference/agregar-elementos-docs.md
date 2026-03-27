---
title: Modificar la documentación y contribuir
description: Flujo recomendado para editar contenido, agregar nuevas páginas y contribuir con cambios.
---

## Guía rápida: qué es cada cosa

- src/content/docs/: Aquí vive toda la documentación en formato Markdown/MDX.
- astro.config.mjs: Aquí se define el menú lateral (sidebar), título del sitio y opciones de Starlight.
- src/styles/lcchub-theme.css: Estilos globales del tema visual.
- src/assets/: Imágenes y recursos que Astro procesa en build.
- public/: Archivos estáticos servidos directamente (favicon, archivos públicos).
- package.json: Scripts del proyecto (dev, build, preview).

## Dónde editar el contenido

- Carpeta principal de contenido: src/content/docs/
- Secciones actuales: guides, frontend, backend, asistente_virtual, programa_extractor, reference
- La navegación se configura en astro.config.mjs

## Crear una nueva página

1. Elige la sección donde quieres agregar la página.
2. Crea un archivo .md o .mdx en esa carpeta.
3. Agrega frontmatter mínimo:

```md
---
title: Título de la página
description: Resumen breve.
---
```

4. Escribe el contenido en Markdown/MDX.
5. Ejecuta npm run dev para revisar la página.

Ejemplo real:

1. Archivo nuevo: src/content/docs/guides/seguridad.mdx
2. Frontmatter:

```md
---
title: Seguridad
description: Recomendaciones de seguridad para mantenimiento.
---
```

3. Ruta generada por Astro: /guides/seguridad/

```text
documentacion-lcchub/
├─ public/                # Archivos estáticos
├─ src/
│  ├─ assets/             # Imágenes y recursos procesados por Astro
│  ├─ styles/             # Estilos globales
│  ├─ content/            # Documentación
│  │   ├─ docs/
│  │   │   ├─ guides/
│  │   │   ├─ frontend/
│  │   │   ├─ backend/
│  │   │   ├─ reference/
├─ astro.config.mjs       # Configuración de Starlight y sidebar
├─ package.json
└─ tsconfig.json

```

## Agregar página al menú lateral

En este proyecto la navegación está definida manualmente por secciones en astro.config.mjs.

Si creas una página nueva y quieres mostrarla en menú:

1. Agrega el archivo en src/content/docs/<sección>/
2. Agrega su entrada en sidebar dentro de astro.config.mjs
3. Verifica el slug final en local

Ejemplo de entrada manual en sidebar:

```js
{
	label: 'Guía de Mantenimiento',
	items: [
		{ label: 'Introducción', slug: 'guides/introduccion' },
		{ label: 'Seguridad', slug: 'guides/seguridad' }
	]
}
```

Reglas importantes del slug:

1. No lleva barra inicial.
2. No pongas extensión (.md o .mdx).
3. Debe coincidir con carpeta/archivo dentro de src/content/docs/.

## Cómo funciona Reference en este proyecto

La sección Reference usa autogeneración en astro.config.mjs:

```js
{
	label: 'Reference',
	autogenerate: { directory: 'reference' }
}
```

Esto significa:

1. Todo archivo dentro de src/content/docs/reference/ aparece automáticamente en el menú.
2. No necesitas agregar cada página manualmente al sidebar para esa sección.
3. El orden normalmente sigue el orden alfabético de archivos.

## Checklist antes de publicar

1. La página tiene title y description.
2. Los enlaces internos abren correctamente.
3. Las imágenes cargan en local.
4. npm run build termina sin errores.
5. La página aparece en el menú correcto.

## Flujo recomendado para contribuir

1. Crea una rama:

```bash
git checkout -b docs/mi-cambio
```

2. Ejecuta validaciones:

```bash
npm run build
```

3. Haz commit:

```bash
git add .
git commit -m "docs: actualiza sección de referencia"
```

4. Sube la rama y abre Pull Request a main.

## Buenas prácticas

- Usa títulos claros y consistentes.
- Mantener ortografía y redacción uniforme.
- Evita rutas absolutas incorrectas en enlaces e imágenes.
- Verifica en local antes de abrir PR.

## Comandos útiles (resumen)

```bash
# Desarrollo local
npm run dev

# Validar build de produccion
npm run build

# Vista previa del build
npm run preview
```