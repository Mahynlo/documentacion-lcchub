// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mahynlo.github.io',
	base: '/documentacion-lcchub',
	integrations: [
		starlight({
			title: 'LCC-HUB Docs',
			customCss: ['./src/styles/lcchub-theme.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/CC-unison/lcchub-dev' }],
			sidebar: [
				{
					label: 'Guía de Mantenimiento',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducción', slug: 'guides/introduccion' },
						{ label: 'Código fuente', slug: 'guides/codigo-fuente' },
						{ label: 'Arquitectura de la aplicación', slug: 'guides/arquitectura' },
						{ label: 'Despliegue (Deployment)', slug: 'guides/despliegue' },
						{
							label: 'Frontend',
							items: [
								{ label: 'Introducción', slug: 'frontend/introduccion' },
								{ label: 'Instalación de Frontend', slug: 'frontend/instalacion' },
								{ label: 'Contribuciones de código', slug: 'frontend/cambios' },
								{ label: 'Actualización de contenido', slug: 'frontend/actualizacion-de-contenido' },
							],
						},
						{
							label: 'Backend',
							items: [
								{ label: 'Introducción', slug: 'backend/introduccion' },
								{ label: 'Instalación de Backend', slug: 'backend/instalacion' },
								{ label: 'Contribuciones de código', slug: 'backend/cambios' },
							],
						},
						{
							label: 'Asistente Virtual',
							items: [
								{ label: 'Introducción', slug: 'asistente_virtual/introduccion' },
								{ label: 'Instalación del Chatbot', slug: 'asistente_virtual/instalacion' },
								{ label: 'Mantenimiento del Chatbot', slug: 'asistente_virtual/mantenimiento' },
							],
						},
						{
							label: 'Programa extractor',
							items: [
								// Each item here is one entry in the navigation menu.
								{ label: 'Introducción', slug: 'programa_extractor/introduccion' },
								{ label: 'Arquitectura', slug: 'programa_extractor/arquitectura_app' },
							],
						},
						{
							label: 'Servidor',
							items: [
								{ label: 'Introducción', slug: 'servidor/introduccion' },
								{ label: 'Actualizaciones y Mantenimiento', slug: 'servidor/actualizaciones' },
							],
						},
					],
				},
				{
					label: 'Guía de uso',
					items: [{ label: 'Introducción', slug: 'guia-de-uso/introduccion' }],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },

				},

			],
			
		}),
		
	],
});
