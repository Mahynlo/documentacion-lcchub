---
title: Modificar la documentacion y contribuir
description: Flujo recomendado para editar contenido, agregar nuevas paginas y contribuir con cambios.
---

## Guía rápida: qué es cada cosa

- src/content/docs/: Aqui vive toda la documentacion en formato Markdown/MDX.
- astro.config.mjs: Aqui se define el menu lateral (sidebar), titulo del sitio y opciones de Starlight.
- src/styles/lcchub-theme.css: Estilos globales del tema visual.
- src/assets/: Imagenes y recursos que Astro procesa en build.
- public/: Archivos estaticos servidos directamente (favicon, archivos publicos).
- package.json: Scripts del proyecto (dev, build, preview).

## Donde editar el contenido

- Carpeta principal de contenido: src/content/docs/
- Secciones actuales: guides, forntend, backend, asistente_virtual, progama_extractor, reference
- La navegacion se configura en astro.config.mjs

## Crear una nueva pagina

1. Elige la seccion donde quieres agregar la pagina.
2. Crea un archivo .md o .mdx en esa carpeta.
3. Agrega frontmatter minimo:

```md
---
title: Titulo de la pagina
description: Resumen breve.
---
```

4. Escribe el contenido en Markdown/MDX.
5. Ejecuta npm run dev para revisar la pagina.

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
├─ public/                # Archivos estaticos
├─ src/
│  ├─ assets/             # Imagenes y recursos procesados por Astro
│  ├─ styles/             # Estilos globales
│  ├─ content/            # Documentacion
│  │   ├─ docs/
│  │   │   ├─ guides/
│  │   │   ├─ forntend/
│  │   │   ├─ backend/
│  │   │   ├─ reference/
├─ astro.config.mjs       # Configuracion de Starlight y sidebar
├─ package.json
└─ tsconfig.json

```

## Agregar pagina al menu lateral

En este proyecto la navegacion esta definida manualmente por secciones en astro.config.mjs.

Si creas una pagina nueva y quieres mostrarla en menu:

1. Agrega el archivo en src/content/docs/<seccion>/
2. Agrega su entrada en sidebar dentro de astro.config.mjs
3. Verifica el slug final en local

Ejemplo de entrada manual en sidebar:

```js
{
	label: 'Guia de Mantenimento',
	items: [
		{ label: 'Introduccion', slug: 'guides/introduccion' },
		{ label: 'Seguridad', slug: 'guides/seguridad' }
	]
}
```

Reglas importantes del slug:

1. No lleva barra inicial.
2. No pongas extension (.md o .mdx).
3. Debe coincidir con carpeta/archivo dentro de src/content/docs/.

## Como funciona Reference en este proyecto

La seccion Reference usa autogeneracion en astro.config.mjs:

```js
{
	label: 'Reference',
	autogenerate: { directory: 'reference' }
}
```

Esto significa:

1. Todo archivo dentro de src/content/docs/reference/ aparece automaticamente en el menu.
2. No necesitas agregar cada pagina manualmente al sidebar para esa seccion.
3. El orden normalmente sigue el orden alfabetico de archivos.

## Checklist antes de publicar

1. La pagina tiene title y description.
2. Los enlaces internos abren correctamente.
3. Las imagenes cargan en local.
4. npm run build termina sin errores.
5. La pagina aparece en el menu correcto.

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
git commit -m "docs: actualiza seccion de referencia"
```

4. Sube la rama y abre Pull Request a main.

## Buenas practicas

- Usa titulos claros y consistentes.
- Mantener ortografia y redaccion uniforme.
- Evita rutas absolutas incorrectas en enlaces e imagenes.
- Verifica en local antes de abrir PR.

## Comandos utiles (resumen)

```bash
# Desarrollo local
npm run dev

# Validar build de produccion
npm run build

# Vista previa del build
npm run preview
```