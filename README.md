# Clavos Band · Clavito Actis

Landing oficial (Angular) de **Clavos Band / Clavito Actis**.

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


## Dominio personalizado ()

En el DNS del dominio configurá:

**Apex ()** — registros A:
- 
- 
- 
- 

**www** — CNAME:
-  → 

En GitHub → Settings → Pages → Custom domain:  (HTTPS Enforce).
