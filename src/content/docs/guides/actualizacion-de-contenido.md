---
title: Actualización de contenido
description: Explicar cómo mantener, actualizar y operar la aplicación de forma segura y eficiente.
---

## Actualizar el contenido de la aplicación
Podrás actualizar el contenido de la aplicación para la sección de eventos, SoyLCC, y bolsa de proyectos. Para actualizar la información de los alumnos, mapa curricular, y otros datos de la base de datos, se recomienda contactar a la responsable del proyecto Edelmira Rodriguez, ya que es un proyecto aparte a este.

## Requisitos
Estar fisicamente en la Universidad de Sonora y conectarte a la red a través de un cable de red.
Credenciales para acceder a través de SSH al servidor de producción de la aplicación.
```bash
ssh usuario-xxxx@ip-xxxx -vvv # Para un log detallado
Ingrese la contraseña: xxxx
```

Acceso de administrador a la interfaz de Strapi (usuario y contraseña).
La actualización de contenido se realiza a través de la interfaz de administrador de Strapi. Para ello hacemos un jump a la dirección IP del servidor de producción para hacerle “creer” a nuestra computadora que tenemos acceso a una aplicación en la red local.

```bash
ssh -L 1337:localhost:1337 usuario-xxxx@ip-xxxx
```
Una vez que hayamos hecho el jump, abrimos un navegador y vamos a la dirección http://localhost:1337/admin para acceder a la interfaz de administrador de Strapi. Aquí podremos actualizar el contenido de la aplicación, restrucutrar la base de datos, y abrir REST API endpoints. Para más información sobre cómo utilizar Strapi, revisa la documentación oficial.