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


## Convenciones de código: 
- linting, formateo, nomenclatura, ramas de Git.

### Frontend 
El proyecto de frontend está alojado en el repositorio CC-unison de GitHub.
Para mantener un control de versiones adecuado, se recomienda utilizar Git y crear un fork del repositorio, trabajando desde este fork.
Todas las modificaciones futuras deben realizarse mediante un pull request desde el fork, el cual deberá ser aprobado por el equipo de CC-unison.
Los cambios realizados en el repositorio se deben actualizar en el servidor utilizando el comando:
```bash
git pull
```

### Backend
El proyecto de backend está alojado en el repositorio CC-unison de GitHub.
A diferencia del frontend, no es necesario hacer un fork ni clonar el repositorio para realizar modificaciones; los cambios pueden hacerse directamente desde el servidor y luego subirse al repositorio de GitHub.
Es importante verificar que no se incluya información sensible al subir los cambios al repositorio.

### Convencion de Commits sugeriada

:::tip[Recomendado]
El estandar para un commit sugerido es **Conventional Commits**. 
:::
Ejemplo:
```bash
feat: se agregaron nuevos tags y prioridad en el orden de anuncios
```
Se compoene de:
```bash
<tipo>[alcance opcional]: <descripción>
```
Donde:feat → Tipo de cambio: indica que agregaste una nueva funcionalidad (feature).
se agregaron nuevos tags y prioridad en el orden de anuncios → Mensaje descriptivo, explica qué hiciste.

Otros ejemplos de commits

| Tipo         | Significado                                                  |
| ------------ | ------------------------------------------------------------ |
| **feat**     | Nueva funcionalidad                                          |
| **fix**      | Corrección de un error (*bug fix*)                           |
| **docs**     | Cambios en documentación                                     |
| **style**    | Cambios que no afectan el código (formato, espacios, estilo) |
| **refactor** | Refactorización de código, sin cambiar funcionalidad         |
| **perf**     | Mejora de rendimiento                                        |
| **test**     | Agregar o modificar tests                                    |
| **chore**    | Tareas de mantenimiento, configuraciones, scripts            |
