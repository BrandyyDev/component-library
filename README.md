# component-library

Prueba tecnica para T1

# INSTRUCCIONES DE INSTALACION

1. Clona el repositorio

git clone https://github.com/BrandyyDev/component-library.git
cd component-library

2. Instala las dependencias (Node & NextJs)
npm install

3. Configura las variables de entorno (Node)
Crea un archivo .env en la raíz y agrega:

MONGO_URI=tu_conexion_de_mongo
JWT_SECRET=una_clave_secreta_segura
API_URL=http://localhost:4000

4. Inicia el backend
npm run server

5. Inicia el frontend
npm run dev

6. Ejecuta los tests (Frontend)
npm run test


# BACKEND

API – Component Library
Este backend expone un conjunto de rutas para autenticación de usuarios y tracking de componentes. Las rutas que requieren autorización deben incluir un token JWT en los headers: 

Authorization: Bearer <token>

- POST /api/auth/register
Registra un nuevo usuario

Envía un JSON con email y contraseña. Si todo va bien, se crea el usuario en la base de datos.

Body:

{
  "email": "usuario@ejemplo.com",
  "password": "secreto123"
}

Respuestas:

201 → Usuario creado
400 → El correo ya está registrado
500 → Algo salió mal

- POST /api/auth/login
Inicia sesión y devuelve un token

Verifica credenciales y responde con un JWT si son correctas.

Body:

{
  "email": "usuario@ejemplo.com",
  "password": "secreto123"
}

200 → { token: "..." }
400 → Usuario no encontrado
401 → Contraseña incorrecta
500 → Error interno

- POST /api/components/track
Guarda un evento de interacción

Registra acciones del usuario sobre un componente.

Body:

{
  "componentName": "Button",
  "variant": "primary",
  "action": "click",
  "timestamp": "2025-06-15T15:00:00.000Z"
}

201 → Evento guardado
400 → Datos inválidos
401 → No autorizado

- GET /api/components/export
Exporta todos los eventos guardados

Devuelve un JSON con todos los eventos registrados. Requiere token.

Respuestas:

200 → Lista de eventos
401 → No autorizado


- GET /api/components/stats
Estadísticas de uso agrupadas

Devuelve datos agrupados por componente, variante y tipo de acción.

Respuestas:

200 → Objeto con contadores agrupados
401 → No autorizado