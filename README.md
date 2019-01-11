# prisma-yoga-mysql-typescript-sample
GraphQL API server sample by Prisma with TypeScript, made with reference to [Build a GraphQL server from Scratch](https://www.prisma.io/tutorials/build-a-graphql-server-from-scratch-ct01/) .

## Install dependencies
```
yarn
```

## Start Prisma Server
```
cd database
docker-compose up
```

## Deploy to Prisma Server
```
cd database
prisma deploy
```

## Start BFF
```
yarn start
```

After starting server, go to `http://localhost:4466`（Prisma） or `http://localhost:4000`(BFF) from Google Chrome.

You can use GraphQL API on GraphQL Playground.

## License
MIT
