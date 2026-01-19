# Guía para configurar imágenes en After Licors

## ⚠️ IMPORTANTE: Habilitar Cloudflare R2

R2 necesita ser habilitado en tu cuenta de Cloudflare:

1. Ve a https://dash.cloudflare.com
2. En el menú lateral, busca **R2**
3. Haz clic en **Purchase R2** o **Enable R2**
4. R2 tiene un plan gratuito: **10 GB de almacenamiento gratis**
5. Una vez habilitado, vuelve aquí

## Opción A: Cloudflare R2 (Recomendado)

### Paso 1: Crear bucket
```bash
npx wrangler r2 bucket create after-licors-images
```

### Paso 2: Habilitar acceso público
```bash
npx wrangler r2 bucket create after-licors-images --public
```

### Paso 3: Subir imágenes
Guarda las imágenes en una carpeta llamada `images/` y ejecuta:
```bash
# Subir una imagen
npx wrangler r2 object put after-licors-images/logo-hero.jpg --file=images/logo-hero.jpg

# O subir todas a la vez (desde la carpeta images/)
for file in images/*; do
  filename=$(basename "$file")
  npx wrangler r2 object put after-licors-images/$filename --file=$file
done
```

### Paso 4: Obtener URLs públicas
Las URLs serán del formato:
`https://pub-[ID].r2.dev/nombre-imagen.jpg`

## Opción B: Imgur (Más rápido, temporal)

1. Ve a https://imgur.com/upload
2. Sube las 8 imágenes
3. Copia los enlaces directos
4. Actualiza el archivo `worker.js` con las URLs

## Opción C: Cloudflare Images (De pago pero optimizado)

Servicio premium con optimización automática, CDN y transformaciones.

## Estructura de imágenes que necesitamos:

1. **logo-hero.jpg** - Logo principal con fondo del bar (Imagen 1)
2. **bar-licores.jpg** - Barra con estantes de licores (Imagen 2)
3. **cocteles-rodajas.jpg** - Cócteles con rodajas (Imagen 3)
4. **cocteles-neon.jpg** - Cócteles coloridos con logo neón (Imagen 4)
5. **premio.jpg** - Premio/reconocimiento (Imagen 5)
6. **ambiente-azul.jpg** - Clientes con luces azules (Imagen 6)
7. **evento.jpg** - Evento/podcast (Imagen 7)
8. **logo-vintage.jpg** - Logo alternativo cervecería (Imagen 8)

## Próximos pasos:

Una vez que tengas las URLs de las imágenes (ya sea de R2, Imgur u otro servicio), avísame y las integraré al sitio web automáticamente.
