# Guía de Instalación - Pipeline DevOps

## Requisitos Previos

### Software Requerido
- **Node.js** v18 o superior (LTS recomendada)
- **Git** v2.30 o superior
- **Docker** v20.10 o superior
- **Docker Compose** v2.0 o superior

### Verificar instalación
```bash
node --version
npm --version
git --version
docker --version
docker-compose --version
```

## Instalación Paso a Paso

### 1. Clonar el Repositorio
```bash
git clone https://github.com/garciadejesustrianaolivadia165-a11y/Proyecto_Implemebtacion_Pipeline-CI-CD_DevOps.git
cd Proyecto_Implemebtacion_Pipeline-CI-CD_DevOps/Proyecto_Final_DevOps
```

### 2. Configurar Backend
```bash
cd backend
npm install
```

### 3. Configurar Variables de Entorno (Opcional)
Crea un archivo `.env` en la carpeta `backend/`:
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/devops_demo
```

### 4. Ejecutar en Modo Desarrollo

#### Opción A: Sin Docker
```bash
# Terminal - Backend
cd backend
npm run dev
```

El frontend se sirve automáticamente desde `http://localhost:3000`

#### Opción B: Con Docker
```bash
# Desde la raíz del proyecto
cd infra
docker-compose up --build
```

Accede a:
- **Aplicación**: http://localhost:3000
- **Prometheus**: http://localhost:9090
- **MongoDB**: localhost:27017

## Ejecución de Pruebas

### Pruebas Unitarias e Integración
```bash
cd backend
npm test
```

### Cobertura de Código
```bash
npm test -- --coverage
```

### Análisis Estático (ESLint)
```bash
npm run lint
```

## Configuración de GitHub Actions

### 1. Crear Secrets en GitHub
Ve a tu repositorio ? **Settings** ? **Secrets and variables** ? **Actions**

Agrega los siguientes secrets:
- `DOCKER_USERNAME`: Tu usuario de Docker Hub
- `DOCKER_PASSWORD`: Tu token de acceso de Docker Hub

### 2. Obtener Token de Docker Hub
1. Ve a https://hub.docker.com/settings/security
2. Crea un nuevo Access Token
3. Cópialo y úsalo como `DOCKER_PASSWORD`

## Problemas Comunes

### Error: EADDRINUSE (Puerto ocupado)
```bash
# Linux/Mac
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Error: MongoDB connection failed
```bash
# Verificar que MongoDB esté corriendo
docker ps | grep mongo

# Reiniciar contenedor
docker-compose restart db
```

### Error: npm install falla
```bash
# Limpiar caché
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## Verificación de Instalación

### Test Rápido
```bash
# 1. Ejecutar pruebas
cd backend
npm test

# 2. Verificar lint
npm run lint

# 3. Probar aplicación
npm start
# Abrir http://localhost:3000
```

## Siguientes Pasos
- Lee la [Documentación del Pipeline](Documentacion_Pipeline.md)
- Revisa el [Manual de Operaciones](Manual_Operaciones.md)
- Consulta la [Guía de Contribución](CONTRIBUTING.md)
