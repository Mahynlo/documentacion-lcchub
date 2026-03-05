// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'LCC-HUB Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/CC-unison/lcchub-dev' }],
			sidebar: [
				{
					label: 'Guia de Mantenimento',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduccion', slug: 'guides/introduccion' },
						{ label: 'Arquitectura de la aplicación', slug: 'guides/arquitectura' },
						{ label: 'Código fuente', slug: 'guides/codigo-fuente' },
						{ label: 'Actualización de contenido', slug: 'guides/actualizacion-de-contenido' },
						{ label: 'Despliegue (Deployment)', slug: 'guides/despliegue' },
					],
				},
				{
					label: 'Frontend',
					items: [
						{ label: 'Introducción', slug: 'forntend/introduccion' },
						
					],
				},
				
				{
					label: 'Asistente Virtual',
					items: [
						{ label: 'Introducción', slug: "asistente_virtual/introduccion" },
						
					],
				},
				{
					label:'Programa extractor',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduccion', slug: 'progama_extractor/introduccion' },
						{label: 'Arquitectura',slug:'progama_extractor/arquitectura_app' }
						
					],
					
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },

				},

			],
			
		}),
		
	],
});
