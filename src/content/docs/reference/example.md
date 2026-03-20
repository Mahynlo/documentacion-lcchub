---
title: Instalacion local de la documentacion
description: Pasos para ejecutar la documentacion en local y validar cambios antes de publicar.
---

## Requisitos

- Node.js 20 o superior
- npm
- Git

## 1. Clonar el repositorio

```bash
git clone https://github.com/Mahynlo/documentacion-lcchub.git
cd documentacion-lcchub
```

## 2. Instalar dependencias

```bash
npm install
```

## 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

Abre en tu navegador la URL que muestre la terminal (normalmente http://localhost:4321).

## 4. Generar build de produccion

```bash
npm run build
```

Esto valida que rutas, enlaces e imagenes compilen correctamente.

## 5. Previsualizar el build

```bash
npm run preview
```

## Notas para GitHub Pages

- El sitio usa base de repositorio: /documentacion-lcchub
- Si agregas links manuales, evita rutas mal formadas y valida navegacion en local.
