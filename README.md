# Me: Website + Résumé Monorepo

This is a Monorepo managed with [Turbo](https://turbo.build/repo).  
It contains two applications in the `apps` folder:

- résumé (cv)
- portfolio (website)

Shared data is stored in the `packages` folder.

## TODO

- Add a cool "scroll to top" button
- Polish site with visual candy
- Custom favicon
- Go over SEO and metadata

## Developing

Make sure you have npm installed.

Install dependencies.

```
npm i
```

Start development servers for both apps.

```
npm run dev
```

## Building

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
