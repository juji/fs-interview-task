# Notes by juji

This is a simple todo App. 
Written using [NextJs](https://nextjs.org/) and [ExpressJS](https://expressjs.com/).

I use NextJs. It is a mature framework, has good documentation, with a big user base.
Also, I used it before, and documentations about it in the web space, and in third party libraries are immense.

I would like to try [Remix](https://remix.run/) and [svelte](https://kit.svelte.dev/) tho... Maybe one day in the future..

ExpressJS is an API frameworks used by many, 
and I used it a lot on my previous projects. Based on that, 
I choose to use ExpressJS in this project.

Mostly, I just use what many people use for the case in hand.

I use mac in developing this.

This wasn't tested in Windows. Because I don't have one. 
You might be able to change that... hehe

## Environment Files

Environment files are included on purpose.

Ussualy, I don't include environment files. Because it includes secrets that should be hidden, and we should have different values for Dev, Testing, and Live environment.

This is a test case. So, for easier evaluation, I am including them.

You can see the environtment files I used in `frontend/.env.local` and `api/.env`

## Docs

API docs is avalable in [postman](https://www.postman.com/juji/workspace/fs-interview-task/overview).

To be able to update, or delete a todo Item, you will have to update the `itemId` variable in the `Todo` Collection.

![updating itemId](https://i.imgur.com/qhxTePB.png)

It uses `localhost:3333`. So you will need the API to run in your local environment.

## Using yarn

I use `Yarn`. It's just a habit I have. Checkout yarn [here](https://yarnpkg.com/).

## installing dependencies
```bash
yarn
```

## starting the dev server

```bash
yarn dev
```

The frontend is at [http://localhost:3000](http://localhost:3000)

The API is at [http://localhost:3333](http://localhost:3333)

Visit the frontend to see how the app works.


## Users

To login to the app, use this credentials:

```
user: admin
password: asdf

user: user
password: asdf
```


## Building the App

This will build the app
```
yarn build
```

For the API, it will be available in the `api/dist` directory.

## Testings

### e2e testing: cypress

Using [https://www.cypress.io/](https://www.cypress.io/)

You should build the app first to be able to test:

```
yarn build && yarn test:integration
```

### API testing: jest

Using [https://jestjs.io/](https://jestjs.io/)

```
yarn test:api
```

cheers, [jujiyangasli.com](https://jujiyangasli.com)

