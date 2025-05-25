# Me: Website + Résumé Monorepo

This is a Monorepo managed with [Turbo](https://turbo.build/repo).  
It contains two applications in the `apps` folder:

- cv
- website

## TODO

- Finish remaining tab styles to buttons
- Use Slideshow with arrow keys

## Development

Make sure you have Node (>=v20) and npm installed.

Install dependencies.

```
npm i
```

Start development servers for both apps.

```
npm run dev
```

## Building

Build only runs properly on Linux systems.  
Install firefox for puppeteer.

```
npx puppeteer browsers install firefox
```

Run build.

```
npm run build
```

## Private Résumé

Add sensitive values to `apps/cv/.env`

```
VITE_ADDRESS=
VITE_PHONE=
```

Start development mode and print out using firefox with appropriate settings.

## Deployment

Deployment is done automatically to
[Cloudflare Pages](https://pages.cloudflare.com/) using GitHub Actions whenever
something is pushed onto the main branch.
