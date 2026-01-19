# Guía Rápida de Continuación - After Licors

## 🚀 Para continuar desde otra máquina

### 1. Clonar el repositorio
```bash
git clone https://github.com/llalloman/after-licors.git
cd after-licors
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Autenticarse en Cloudflare
```bash
npx wrangler login
```
Se abrirá el navegador para autorizar. Inicia sesión con tu cuenta de Cloudflare.

### 4. Probar localmente (opcional)
```bash
npm run dev
```
El sitio estará disponible en http://localhost:8787

### 5. Desplegar cambios a producción
```bash
npm run deploy
```

---

## 📋 Tareas Pendientes

### Prioridad Alta:
- [ ] **Configurar DNS** (ver `CLOUDFLARE-DNS-SETUP.md`)
  - Agregar registros A para @ y www en Cloudflare
  - Activar proxy (nube naranja)
  
- [ ] **Subir imágenes** (ver `IMAGENES-SETUP.md`)
  - Habilitar Cloudflare R2 en el dashboard
  - Crear bucket: `npx wrangler r2 bucket create after-licors-images`
  - Subir las 8 imágenes que tienes guardadas
  - Actualizar URLs en `worker.js`

### Prioridad Media:
- [ ] Actualizar información de contacto real (teléfono, email)
- [ ] Revisar y personalizar el menú de comidas/bebidas
- [ ] Actualizar horarios si es necesario
- [ ] Agregar más fotos a la galería

### Prioridad Baja:
- [ ] Configurar formulario de contacto con backend
- [ ] Agregar sistema de reservas
- [ ] Implementar Google Analytics
- [ ] Optimizar SEO

---

## 🔗 Enlaces Importantes

- **Sitio en vivo:** https://after-licors.llallowmol.workers.dev
- **Repositorio GitHub:** https://github.com/llalloman/after-licors
- **Dashboard Cloudflare:** https://dash.cloudflare.com
- **Instagram:** https://www.instagram.com/after.licors8
- **TikTok:** https://www.tiktok.com/@after.licors8

---

## 📁 Estructura del Proyecto

```
after-licors/
├── worker.js                    # Código principal del Worker (HTML, CSS, JS)
├── wrangler.toml               # Configuración de Cloudflare
├── package.json                # Dependencias y scripts
├── README.md                   # Documentación principal
├── CLOUDFLARE-DNS-SETUP.md     # Guía de configuración DNS
├── IMAGENES-SETUP.md           # Guía para subir imágenes
├── CONTINUACION.md             # Este archivo
└── .gitignore                  # Archivos ignorados por Git
```

---

## 🎨 Personalización Rápida

### Cambiar colores:
Edita las variables CSS en `worker.js` (línea ~24):
```css
--primary-color: #00d9ff;     /* Color principal (cian)
--secondary-color: #0a0e27;   /* Color de fondo oscuro */
--accent-color: #00a8cc;      /* Color de acento */
```

### Actualizar contenido:
Todo el contenido está en `worker.js`. Busca las secciones HTML:
- Hero (línea ~440)
- Sobre Nosotros (línea ~460)
- Menú (línea ~480)
- Horarios (línea ~620)
- Contacto (línea ~645)

### Después de editar:
```bash
git add .
git commit -m "Actualización: [descripción]"
git push
npm run deploy
```

---

## 🆘 Solución de Problemas

### Error: "R2 not enabled"
- Ve a https://dash.cloudflare.com
- Busca "R2" y actívalo (gratis hasta 10GB)

### Error: "Route already exists"
- Ve a Workers & Pages en Cloudflare
- Elimina rutas duplicadas si existen

### El dominio no funciona
- Verifica que los registros DNS estén configurados
- Asegúrate de que la nube naranja esté activada
- Espera 5-10 minutos para propagación DNS

### Cambios no se ven
- Limpia caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
- Verifica que ejecutaste `npm run deploy`

---

## 💡 Prompt para IA (Copilot/ChatGPT)

Si necesitas ayuda de una IA, usa este prompt:

```
Estoy trabajando en el proyecto "After Licors", un sitio web para un bar restaurante 
desplegado como Cloudflare Worker. El proyecto está en:
https://github.com/llalloman/after-licors

Características actuales:
- Cloudflare Worker con HTML/CSS/JS inline
- Diseño con colores cian neón (#00d9ff)
- Mapa de Google Maps integrado
- Redes sociales: Instagram y TikTok
- Menú de cócteles y comida
- Formulario de contacto

Necesito ayuda con: [DESCRIBE TU NECESIDAD AQUÍ]

Archivos principales:
- worker.js: Código completo del sitio
- wrangler.toml: Configuración de Cloudflare
- package.json: Dependencias

El sitio está desplegado en: https://after-licors.llallowmol.workers.dev
```

---

## 📞 Contacto y Soporte

Si tienes dudas:
1. Revisa la documentación en los archivos MD del repo
2. Consulta la documentación de Cloudflare Workers: https://developers.cloudflare.com/workers/
3. Usa el prompt de IA de arriba con GitHub Copilot o ChatGPT

---

¡Todo está listo para continuar! 🎉
