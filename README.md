# After Licors - Bar Restaurante

Sitio web oficial del bar restaurante After Licors, diseñado para desplegarse en Cloudflare Workers.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🍸 Menú completo de cócteles y comidas
- 📱 Optimizado para móviles
- ⚡ Ultra rápido con Cloudflare Workers
- 🎨 Animaciones suaves y elegantes
- 📞 Formulario de contacto integrado

## 📋 Requisitos

- Node.js (versión 16 o superior)
- Una cuenta de Cloudflare
- Wrangler CLI (incluido en las dependencias)

## 🛠️ Instalación

Instala las dependencias:

```bash
npm install
```

## 🧪 Desarrollo Local

Para probar el sitio localmente:

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo en `http://localhost:8787`

## 📤 Despliegue en Cloudflare

### Primer despliegue

1. Inicia sesión en Cloudflare:
```bash
npx wrangler login
```

2. Despliega el sitio:
```bash
npm run deploy
```

Después del despliegue, recibirás una URL en el formato: `https://after-licors.<tu-subdomain>.workers.dev`

## 🔧 Configuración

### Personalizar el contenido

Edita `worker.js` para modificar:
- Información del restaurante
- Elementos del menú
- Datos de contacto (dirección, teléfono, email)
- Horarios de apertura
- Enlaces de redes sociales

### Dominio personalizado

Para usar tu propio dominio:

1. Añade tu dominio en Cloudflare
2. Edita `wrangler.toml` y descomenta la sección `routes`:
```toml
routes = [
  { pattern = "tudominio.com/*", zone_name = "tudominio.com" }
]
```
3. Vuelve a desplegar: `npm run deploy`

## 📁 Estructura del Proyecto

```
after-licors/
├── worker.js          # Cloudflare Worker con HTML completo
├── wrangler.toml      # Configuración de Wrangler
├── package.json       # Dependencias del proyecto
├── .gitignore         # Archivos ignorados por Git
└── README.md          # Este archivo
```

## 🎨 Personalización de Estilos

Los colores principales se definen en las variables CSS dentro de `worker.js`:

```css
--primary-color: #d4af37;    /* Dorado */
--secondary-color: #1a1a1a;  /* Negro */
--accent-color: #8b4513;      /* Marrón */
```

## 📱 Características Responsivas

El sitio está optimizado para:
- 📱 Móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Escritorio (> 1024px)

## 🔒 Seguridad

- Sin dependencias del lado del cliente
- Contenido estático servido desde Cloudflare Edge
- Headers de seguridad configurables

## 📈 Rendimiento

- ⚡ Tiempo de carga: < 100ms
- 🌍 CDN global de Cloudflare
- 💾 Cache optimizado (1 hora)
- 📦 HTML inline (sin archivos externos)

## 🆘 Comandos útiles

```bash
# Desarrollo local
npm run dev

# Desplegar a producción
npm run deploy

# Ver logs en tiempo real
npx wrangler tail

# Ver información del worker desplegado
npx wrangler deployments list
```

## 📝 Licencia

MIT License - Siéntete libre de usar y modificar este proyecto.

---

**¡Disfruta de After Licors! 🍸**
