# Notes by juji

This is a simple todo App. 
Written using [NextJs](https://nextjs.org/) and [ExpressJS](https://expressjs.com/).

I use `Yarn`. It's just a habit I have.

I use mac in developing this.

This wasn't tested in Windows.

## installing dependencies
```bash
yarn
```

## starting the dev server

```bash
yarn dev
```

The frontend is at http://localhost:3000

The API is at http://localhost:3333

Visit the frontend to see how the app works


## Users

To login to the app, use this credentials:

```
user: admin
password: asdf

user: regular
password: asdf
```


## Building the App

This will build the app
```
yarn build
```

For the API, you can see the build in the `api/dist` directory.

## Testings

### e2e testing: cypress

[https://www.cypress.io/](https://www.cypress.io/)

You should build the app first to be able to test:

```
yarn build
yarn test:integration
```

