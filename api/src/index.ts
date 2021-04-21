import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express"
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { HelloResolver } from "./resolver/hello";
import { UserResolver } from "./resolver/user";

const main = async () => {
    // Connect to the database
    let failCount = 0
    let db = { isConnected: false }
    while(failCount < 5 && !db.isConnected){
        try {
            db = await createConnection()
        }
        catch (error) {
            console.log('Failed to make a connection to the db. failCount:', failCount)
            await new Promise(resolve => setTimeout(resolve, 1000))
            failCount += 1
        }
    }
    
    if(!db.isConnected) {
        console.log('db is not connecting, need to restart this server')
        // I'd like to handle always sending back a 503 service unavailable here,
        // but that can wait a bit.
    }
    
    const app = express()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, UserResolver],
            validate: false,
        })
    })
    apolloServer.applyMiddleware({ app })
    
    app.get('/', (_,response) => {
        response.send('This is a graphql api')
    })
    app.listen(8080, ()=>{
        console.log('server listening')
    })
}

main().catch(error => console.log(error));
