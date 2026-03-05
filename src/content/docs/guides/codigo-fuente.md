---
title: Código fuente
description: Explicar cómo mantener, actualizar y operar la aplicación de forma segura y eficiente.
---

El código fuente se divide en Frontend y en Backend. Para evitar duplicar información, se recomienda revisar los repositorios de cada parte para obtener información sobre como replicar en ambiente local.

## Estructura de carpetas y archivos
```text
📦 proyecto
 ┣ 📂 src/               # Código fuente
 ┣ 📂 public/            # Archivos estáticos
 ┣ astro.config.mjs      # Configuración de Astro
 ┣ starlight.config.mjs  # Configuración de Starlight
 ┗ package.json          # Dependencias
```




### Backend
El proyecto de backend está alojado en el repositorio CC-unison de GitHub.
A diferencia del frontend, no es necesario hacer un fork ni clonar el repositorio para realizar modificaciones; los cambios pueden hacerse directamente desde el servidor y luego subirse al repositorio de GitHub.
Es importante verificar que no se incluya información sensible al subir los cambios al repositorio.

