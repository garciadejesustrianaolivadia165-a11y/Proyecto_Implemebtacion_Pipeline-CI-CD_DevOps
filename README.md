# Proyecto_Implemebtacion_Pipeline-CI-CD_DevOps

## Descripción
Este proyecto implementa un pipeline DevOps completo (CI/CD) para una aplicación web simple, utilizando GitHub Actions, Docker, pruebas automatizadas y monitoreo básico. La aplicación está compuesta por un frontend HTML/CSS/JavaScript, un backend desarrollado en Node.js/Express y soporte para una base de datos (MongoDB opcional). Incluye pruebas unitarias y de integración con Jest y Supertest, análisis estático con ESLint, construcción de contenedores Docker y despliegue automatizado.

Es una implementación práctica que integra los conceptos fundamentales de DevOps:
* Control de versiones con Git/GitHub.
* Integración Continua (CI).
* Entrega/Despliegue Continuo (CD).
* Contenedores Docker.
* Pruebas automatizadas.
* Monitoreo (Prometheus).
* Documentación y buenas prácticas.

## Participantes
* Triana Olivadia García de Jesús (2023-1395)
* Adonis Mercedes Buret (2021-2396)
* Kaysha Hiciano (2023-1599)
* Esmerlyn Ledesma (2022-1775)

## Requisitos del Proyecto
* Node.js (versión LTS recomendada)
* Git y GitHub
* Docker y Docker Compose
* Paquetes NPM

## Instalación

1. Clona el repositorio: git clone https://github.com/usuario/Proyecto_Final_P2.git

2. Entra al proyecto: cd Proyecto_Final_P2

3. Instala dependencias del backend: cd backend / npm install

## Ejecución Local
1. Ejecutar el backend: npm run dev
* El backend correrá en: http://localhost:3000
2. Abrir el frontend
* Abre manualmente: frontend/index.html

## Pruebas 
* Pruebas unitarias: Validan funciones pequeñas y lógicas internas
* Pruebas de integración: Verifican endpoints de Express usando Supertest
* Cobertura de código: npm test -- --coverage

## Pipeline CI/CD
Etapas del pipeline:
* Instalar dependencias
* Ejecutar ESLint
* Ejecutar pruebas unitarias y de integración
* Construcción de la imagen Docker
* Publicación de la imagen en Docker Hub
* Despliegue automatizado (si está implementado)

## Despliegue
El proyecto incluye:
* Dockerfile
* docker-compose.yml
* Pipeline CI/CD para construir y publicar imágenes

Opcionalmente, puede desplegarse en:
* GitHub Pages (solo frontend)
* Render.com
* Railway.app
* VM o VPS usando docker-compose
