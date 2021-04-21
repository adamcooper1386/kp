"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const hello_1 = require("./resolver/hello");
const user_1 = require("./resolver/user");
const main = () => __awaiter(this, void 0, void 0, function* () {
    let failCount = 0;
    let db = { isConnected: false };
    while (failCount < 5 && !db.isConnected) {
        try {
            db = yield typeorm_1.createConnection();
        }
        catch (error) {
            console.log('Failed to make a connection to the db. failCount:', failCount);
            yield new Promise(resolve => setTimeout(resolve, 1000));
            failCount += 1;
        }
    }
    if (!db.isConnected) {
        console.log('db is not connecting, need to restart this server');
    }
    const app = express_1.default();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [hello_1.HelloResolver, user_1.UserResolver],
            validate: false,
        })
    });
    apolloServer.applyMiddleware({ app });
    app.get('/', (_, response) => {
        response.send('This is a graphql api');
    });
    app.listen(8080, () => {
        console.log('server listening');
    });
});
main().catch(error => console.log(error));
//# sourceMappingURL=index.js.map