# Configuración DNS para After Licors en Cloudflare

Para que www.after-licors.online funcione con tu Cloudflare Worker, sigue estos pasos:

## Pasos en el Dashboard de Cloudflare:

### 1. Accede a tu zona DNS
- Ve a https://dash.cloudflare.com
- Selecciona el dominio `after-licors.online`
- Ve a la sección **DNS** → **Records**

### 2. Configura los registros DNS

#### Para el dominio raíz (after-licors.online):
- **Tipo**: A o AAAA
- **Nombre**: @ (o after-licors.online)
- **Contenido**: 192.0.2.1 (IP placeholder)
- **Proxy status**: ✅ Proxied (nube naranja activada)
- **TTL**: Auto

#### Para el subdominio www:
- **Tipo**: A o AAAA
- **Nombre**: www
- **Contenido**: 192.0.2.1 (IP placeholder)
- **Proxy status**: ✅ Proxied (nube naranja activada)
- **TTL**: Auto

### 3. Verifica la configuración del Worker
El archivo wrangler.toml ya está configurado correctamente con las rutas:
```toml
routes = [
  { pattern = "after-licors.online/*", zone_name = "after-licors.online" },
  { pattern = "www.after-licors.online/*", zone_name = "after-licors.online" }
]
```

### 4. Verifica que el Worker esté asignado
En Cloudflare Dashboard:
- Ve a **Workers & Pages**
- Busca el worker `after-licors`
- Verifica que las rutas estén activas:
  - after-licors.online/*
  - www.after-licors.online/*

## Notas importantes:

1. **La nube naranja debe estar activada** (Proxied) en los registros DNS
2. La IP 192.0.2.1 es solo un placeholder - Cloudflare la ignora cuando el Worker está activo
3. Los cambios DNS pueden tardar unos minutos en propagarse
4. Si ya desplegaste el worker (ya lo hiciste), las rutas deberían estar activas

## Verificación:
Después de configurar el DNS, verifica que funcione:
```bash
curl -I https://www.after-licors.online
curl -I https://after-licors.online
```

Ambos deberían devolver respuesta del Worker.
