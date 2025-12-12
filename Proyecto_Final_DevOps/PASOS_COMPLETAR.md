# 🚀 PASOS PARA COMPLETAR EL PROYECTO DEVOPS

## ✅ FASE 1: PREPARACIÓN INICIAL (15 minutos)

### 1.1 Instalar Dependencias del Backend
```bash
cd backend
npm install
```

Esto instalará las nuevas dependencias agregadas (mongoose, cors).

### 1.2 Verificar Estructura de Archivos
Asegúrate de que ahora tienes esta estructura:
```
Proyecto_Final_DevOps/
├── .github/
│   └── workflows/
│       └── ci-cd.yml ✓ (NUEVO)
├── backend/
│   ├── src/
│   │   ├── app.js (actualizado)
│   │   ├── routes/
│   │   │   ├── health.js ✓ (NUEVO)
│   │   │   └── index.js ✓ (NUEVO)
│   │   └── utils/
│   │       └── math.js ✓ (NUEVO)
│   ├── tests/
│   │   ├── unit/
│   │   │   └── math.test.js ✓ (ACTUALIZADO)
│   │   └── integration/
│   │       └── app.test.js ✓ (NUEVO)
│   ├── .eslintrc.js ✓ (NUEVO)
│   ├── jest.config.js ✓ (NUEVO)
│   ├── .dockerignore ✓ (NUEVO)
│   ├── Dockerfile ✓ (ACTUALIZADO)
│   └── package.json ✓ (ACTUALIZADO)
├── frontend/
│   ├── index.html (existente)
│   ├── styles.css ✓ (NUEVO)
│   └── app.js ✓ (NUEVO)
├── docs/
│   ├── Guia_Instalacion.md ✓ (NUEVO)
│   ├── Documentacion_Pipeline.md ✓ (NUEVO)
│   ├── Manual_Operaciones.md ✓ (NUEVO)
│   ├── CONTRIBUTING.md ✓ (NUEVO)
│   └── README.md ✓ (NUEVO)
└── .gitignore ✓ (NUEVO)
```

---

## 🧪 FASE 2: PROBAR LOCALMENTE (20 minutos)

### 2.1 Ejecutar Pruebas
```bash
cd backend

# Ejecutar ESLint
npm run lint

# Ejecutar pruebas
npm test

# Ver cobertura de código
npm test -- --coverage
```

**Resultado esperado**: Todas las pruebas deben pasar ✅

### 2.2 Probar Aplicación Local
```bash
# Opción A: Sin Docker
cd backend
npm run dev
# Abrir en navegador: http://localhost:3000
```

```bash
# Opción B: Con Docker
cd infra
docker-compose up --build
# Abrir en navegador: http://localhost:3000
# Prometheus: http://localhost:9090
```

### 2.3 Verificar Endpoints
```bash
# Health check
curl http://localhost:3000/api/health

# API hello
curl http://localhost:3000/api/hello?name=DevOps
```

---

## 🔐 FASE 3: CONFIGURAR GITHUB ACTIONS (10 minutos)

### 3.1 Crear Cuenta en Docker Hub
Si no tienes:
1. Ve a https://hub.docker.com
2. Crea una cuenta gratuita
3. Verifica tu email

### 3.2 Generar Token de Docker Hub
1. Inicia sesión en Docker Hub
2. Ve a: Account Settings → Security → New Access Token
3. Nombre: "GitHub Actions"
4. Permisos: "Read, Write, Delete"
5. **COPIA EL TOKEN** (no podrás verlo de nuevo)

### 3.3 Agregar Secrets en GitHub
1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. Click en "New repository secret"
4. Agregar dos secrets:

**Secret 1:**
- Name: `DOCKER_USERNAME`
- Value: tu_usuario_dockerhub

**Secret 2:**
- Name: `DOCKER_PASSWORD`
- Value: el_token_que_copiaste

---

## 📤 FASE 4: HACER COMMIT Y PUSH (10 minutos)

### 4.1 Verificar Cambios
```bash
cd Proyecto_Final_DevOps
git status
```

### 4.2 Agregar Archivos Nuevos
```bash
git add .
git status  # Verificar que todo esté agregado
```

### 4.3 Hacer Commit
```bash
git commit -m "feat: completar pipeline DevOps con CI/CD, pruebas y documentación"
```

### 4.4 Push a GitHub
```bash
git push origin main
```

---

## ✨ FASE 5: VERIFICAR PIPELINE (15 minutos)

### 5.1 Ver Ejecución en GitHub
1. Ve a tu repositorio en GitHub
2. Click en tab **Actions**
3. Deberías ver el workflow "CI/CD Pipeline" ejecutándose
4. Click para ver detalles

### 5.2 Monitorear Stages
Espera a que se completen:
- ✅ Test Stage (2-3 min)
- ✅ Build Stage (3-5 min)
- ✅ Deploy Stage (<1 min)

### 5.3 Verificar Imagen en Docker Hub
1. Ve a https://hub.docker.com
2. Inicia sesión
3. Busca tu repositorio
4. Deberías ver la imagen con tags `latest` y el SHA del commit

---

## 🛠️ COMANDOS RÁPIDOS DE REFERENCIA

### Desarrollo
```bash
# Instalar dependencias
cd backend && npm install

# Modo desarrollo
npm run dev

# Ejecutar tests
npm test

# Lint
npm run lint

# Docker
cd infra && docker-compose up
```

### Git
```bash
# Ver status
git status

# Agregar cambios
git add .

# Commit
git commit -m "mensaje"

# Push
git push origin main

# Ver historial
git log --oneline
```

### Docker
```bash
# Build
cd Proyecto_Final_DevOps
docker build -t adonismburet/devops-app:latest -f backend/Dockerfile .

# Push
docker push adonismburet/devops-app:latest

# Compose
cd infra
docker-compose up -d
docker-compose logs -f
docker-compose down
```

---

## 🔧 TROUBLESHOOTING

### Pipeline falla en Tests
```bash
# Ejecutar localmente para debug
cd backend
npm test -- --verbose
npm run lint
```

### Pipeline falla en Docker Build
```bash
# Probar build local
cd Proyecto_Final_DevOps
docker build -t test -f backend/Dockerfile .

# Ver logs detallados
docker build --progress=plain -t test -f backend/Dockerfile .
```

### Secrets no funcionan
1. Verifica nombres exactos: `DOCKER_USERNAME`, `DOCKER_PASSWORD`
2. Regenera el token en Docker Hub
3. Actualiza el secret en GitHub

### App no funciona local
```bash
# Verificar puerto
lsof -ti:3000 | xargs kill -9  # Mac/Linux
netstat -ano | findstr :3000  # Windows

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 CONTACTO Y SOPORTE

Si tienes problemas durante la implementación:
1. Revisa la documentación en `/docs`
2. Consulta los logs de GitHub Actions
3. Verifica que todos los archivos se hayan creado
4. Contacta al equipo

**¡ÉXITO EN TU PROYECTO!** 🎉
