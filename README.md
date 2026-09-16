# Clavos Band · Clavito Actis

Landing oficial (Angular) de **Clavos Band / Clavito Actis**.

Sitio bilingüe **ES / EN** — selector de idioma en la barra superior (se guarda en el navegador).

## Demo

- GitHub Pages: https://clavitoactis.com/

## Desarrollo local

```bash
npm install
npm start
# http://127.0.0.1:3847
```

## Build producción

```bash
npm run build -- --configuration=production --base-href=/
```

El deploy a GitHub Pages corre automático con GitHub Actions en cada push a `main`.

## Dominio personalizado (`clavitoactis.com`)

En el panel DNS de tu registrador (donde compraste el dominio), creá estos registros:

### Apex — `clavitoactis.com` (tipo A)

| Tipo | Nombre / Host | Valor |
|------|---------------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

### www — opcional (tipo CNAME)

| Tipo | Nombre / Host | Valor |
|------|---------------|--------|
| CNAME | `www` | `reeb-dev.github.io` |

### Después

1. Esperá la propagación DNS (puede tardar de minutos a unas horas).
2. En GitHub → **Settings → Pages → Custom domain** debería figurar `clavitoactis.com`.
3. Activá **Enforce HTTPS** cuando GitHub lo permita (después de verificar el dominio).

El repo ya tiene el archivo `CNAME` y el sitio buildéa con `base-href=/`.
