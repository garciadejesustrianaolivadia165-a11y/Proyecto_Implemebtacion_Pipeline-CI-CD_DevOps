# Proyecto_Implementacion_Pipeline-CI-CD_DevOps

[![CI/CD Pipeline](https://github.com/garciadejesustrianaolivadia165-a11y/Proyecto_Implemebtacion_Pipeline-CI-CD_DevOps/workflows/CI/CD%20Pipeline/badge.svg)](https://github.com/garciadejesustrianaolivadia165-a11y/Proyecto_Implemebtacion_Pipeline-CI-CD_DevOps/actions)

## 📋 Descripción
Este proyecto implementa un **pipeline DevOps completo (CI/CD)** para una aplicación web simple, utilizando GitHub Actions, Docker, pruebas automatizadas y monitoreo básico. La aplicación está compuesta por un frontend HTML/CSS/JavaScript, un backend desarrollado en Node.js/Express y soporte para una base de datos MongoDB opcional.

Es una implementación práctica que integra los conceptos fundamentales de DevOps:
* ✅ Control de versiones con Git/GitHub
* ✅ Integración Continua (CI)
* ✅ Entrega/Despliegue Continuo (CD)
* ✅ Contenedores Docker
* ✅ Pruebas automatizadas (Jest + Supertest)
* ✅ Análisis estático (ESLint)
* ✅ Monitoreo (Prometheus)
* ✅ Documentación completa

## 👥 Participantes
* **Triana Olivadia García de Jesús** (2023-1395)
* **Adonis Mercedes Buret** (2021-2396)
* **Kaysha Hiciano** (2023-1599)
* **Esmerlyn Ledesma** (2022-1775)

## 🛠️ Stack Tecnológico

### Backend
- Node.js v18+
- Express.js
- MongoDB (opcional)
- prom-client (Prometheus)

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript

### DevOps
- Git / GitHub
- GitHub Actions
- Docker / Docker Compose
- Jest (Testing)
- Supertest (API Testing)
- ESLint (Linting)
- Prometheus (Monitoring)

## 📁 Estructura del Proyecto
```
Proyecto_Final_DevOps/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # Pipeline CI/CD
├── backend/
│   ├── src/
│   │   ├── app.js             # Aplicación principal
│   │   ├── routes/            # Endpoints API
│   │   │   ├── health.js
│   │   │   └── index.js
│   │   └── utils/             # Utilidades
│   │       └── math.js
│   ├── tests/
│   │   ├── unit/              # Pruebas unitarias
│   │   └── integration/       # Pruebas de integración
│   ├── Dockerfile
│   ├── package.json
│   ├── jest.config.js
│   └── .eslintrc.js
├── frontend/
│   ├── index.html             # Interfaz web
│   ├── styles.css             # Estilos
│   └── app.js                 # Lógica frontend
├── infra/
│   ├── docker-compose.yml     # Orquestación
│   └── prometheus/
│       └── prometheus.yml     # Config monitoreo
├── docs/
│   ├── Guia_Instalacion.md    # Guía de instalación
│   ├── Documentacion_Pipeline.md  # Doc del pipeline
│   ├── Manual_Operaciones.md  # Manual de operaciones
│   ├── CONTRIBUTING.md        # Guía de contribución
│   └── README.md              # Guión de presentación
├── README.md
└── PASOS_COMPLETAR.md        # Checklist del proyecto
```

## 🚀 Requisitos Previos
* **Node.js** v18 o superior
* **Git** v2.30+
* **Docker** v20.10+
* **Docker Compose** v2.0+

## 📥 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/garciadejesustrianaolivadia165-a11y/Proyecto_Implemebtacion_Pipeline-CI-CD_DevOps.git
cd Proyecto_Implemebtacion_Pipeline-CI-CD_DevOps/Proyecto_Final_DevOps
```

### 2. Instalar dependencias del backend
```bash
cd backend
npm install
```

## ▶️ Ejecución Local

### Opción A: Sin Docker
```bash
cd backend
npm run dev
```
* El backend correrá en: http://localhost:3000
* El frontend se sirve automáticamente desde el backend

### Opción B: Con Docker (Recomendado)
```bash
cd infra
docker-compose up --build
```

Servicios disponibles:
* **Aplicación**: http://localhost:3000
* **Prometheus**: http://localhost:9090
* **MongoDB**: localhost:27017

## 🧪 Pruebas

### Ejecutar todas las pruebas
```bash
cd backend
npm test
```

### Cobertura de código
```bash
npm test -- --coverage
```

### Análisis estático (ESLint)
```bash
npm run lint
```

## 🔄 Pipeline CI/CD

El pipeline se ejecuta automáticamente en cada push o pull request a `main` o `develop`.

### Etapas del Pipeline:
1. **Test Stage**
   - Instalación de dependencias
   - Ejecución de ESLint
   - Pruebas unitarias e integración
   - Reporte de cobertura

2. **Build Stage**
   - Construcción de imagen Docker
   - Publicación en Docker Hub

3. **Deploy Stage**
   - Notificación de disponibilidad

### Configurar Secrets en GitHub
Para que el pipeline funcione, configura estos secrets en tu repositorio:

1. Ve a: Settings → Secrets and variables → Actions
2. Agrega:
   - `DOCKER_USERNAME`: Tu usuario de Docker Hub
   - `DOCKER_PASSWORD`: Tu token de Docker Hub

## 🐳 Docker

### Build manual
```bash
cd Proyecto_Final_DevOps
docker build -t adonismburet/devops-app:latest -f backend/Dockerfile .
```

### Subir a Docker Hub
```bash
docker push adonismburet/devops-app:latest
```

### Docker Compose
```bash
cd infra

# Iniciar
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

## 📊 Monitoreo

### Prometheus
Accede a http://localhost:9090 para ver métricas en tiempo real.

**Queries útiles:**
```promql
# Peticiones por segundo
rate(http_requests_total[5m])

# Uso de memoria
nodejs_heap_size_used_bytes / 1024 / 1024

# Uptime del servidor
time() - nodejs_process_start_time_seconds
```

## 📚 Documentación

Para información detallada, consulta:
* [**Guía de Instalación**](Proyecto_Final_DevOps/docs/Guia_Instalacion.md)
* [**Documentación del Pipeline**](Proyecto_Final_DevOps/docs/Documentacion_Pipeline.md)
* [**Manual de Operaciones**](Proyecto_Final_DevOps/docs/Manual_Operaciones.md)
* [**Guía de Contribución**](Proyecto_Final_DevOps/docs/CONTRIBUTING.md)
* [**Presentación del Proyecto**](Proyecto_Final_DevOps/docs/README.md)
* [**Pasos para Completar**](Proyecto_Final_DevOps/PASOS_COMPLETAR.md)

## 🎯 Criterios de Evaluación

| Criterio | Peso | Estado |
|----------|------|--------|
| Funcionalidad (Pipeline operativo, app funcional, pruebas) | 30% | ✅ |
| Implementación (Calidad, mejores prácticas, integración) | 30% | ✅ |
| Documentación (Claridad, completitud, utilidad) | 20% | ✅ |
| Presentación (Demo, explicación, Q&A) | 20% | ⏳ |

## 🔧 Comandos Útiles

### Desarrollo
```bash
npm run dev          # Modo desarrollo con nodemon
npm start            # Modo producción
npm test             # Ejecutar pruebas
npm run lint         # Análisis de código
```

### Docker
```bash
docker-compose up -d              # Iniciar servicios
docker-compose logs -f app        # Ver logs
docker-compose restart app        # Reiniciar servicio
docker-compose down               # Detener todo
docker-compose down -v            # Detener y eliminar volúmenes
```

### Git
```bash
git status                        # Ver cambios
git add .                         # Agregar todos los cambios
git commit -m "mensaje"           # Commit
git push origin main              # Push a GitHub
```

## 🚢 Despliegue

El proyecto está listo para desplegarse en:
* **Render.com** (gratis)
* **Railway.app** (gratis con créditos)
* **AWS** (con Free Tier)
* **Azure** (con créditos estudiantiles)
* **Cualquier VPS** con Docker instalado

## 🐛 Troubleshooting

### Error: Puerto 3000 ocupado
```bash
# Linux/Mac
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Error: MongoDB no conecta
```bash
docker-compose restart db
docker-compose logs db
```

### Pruebas fallan
```bash
npm test -- --verbose
npm run lint
```

## 📈 Mejoras Futuras
- [ ] Deploy automático a cloud
- [ ] Notificaciones Slack/Discord
- [ ] Escaneo de seguridad (Snyk)
- [ ] Kubernetes
- [ ] Grafana para visualización
- [ ] SonarQube para calidad

## 📄 Licencia
Este proyecto es parte de un trabajo académico.

## 🔗 Enlaces
* **Repositorio**: https://github.com/garciadejesustrianaolivadia165-a11y/Proyecto_Implemebtacion_Pipeline-CI-CD_DevOps
* **GitHub Actions**: Ver tab Actions en el repositorio
* **Docker Hub**: https://hub.docker.com/r/adonismburet/devops-app

## 💬 Contacto
Para preguntas o sugerencias, contacta al equipo de desarrollo.

---

**⭐ Si te gustó este proyecto, dale una estrella en GitHub!**
