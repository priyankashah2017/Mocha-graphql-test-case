import http from "http";
import cors from "cors";
import moment from "moment";
import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import jsonwebtoken from "jsonwebtoken";
import schema from "./src/data/schema";
import { ApolloServer } from "apollo-server-express";
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, Content-Disposition, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
    return next();
});

if (process.env.ENV) {
    dotenv.config({ path: `./${process.env.ENV}.env` });
}

let isExpiredToken = false;
let PORT = process.env.PORT || 5050;

const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => {
        const authToken = req.headers.authorization;

        if (authToken && authToken.length > 0 && !(authToken === "null")) {
            req.authToken = authToken;
            const jwt = jsonwebtoken;

            const decodedJwtTokenRequest = jwt.decode(req.authToken, {
                complete: true
            });

            if (decodedJwtTokenRequest.payload.exp < moment().unix()) {
                isExpiredToken = true;
                console.log("Auth token expired --->", isExpiredToken);
                throw new Error("Auth token is expired");
            }

            console.log("token expire --->", isExpiredToken);
            if (!decodedJwtTokenRequest) {
                throw new Error("Auth token is corrupted --->");
            } else if (!decodedJwtTokenRequest.payload) {
                throw new Error("The client did not set JWT token in the request headers.");
            }
            req.user = decodedJwtTokenRequest.payload;
        }

        return {
            id: req.user ? req.user.appRoleId : "",
            role: req.user ? req.user.title : "",
            employeeCode: req.user ? req.user.employeeCode : "",
            employeeId: req.user ? req.user.employeeId : "",
            appRoleTitle: req.user ? req.user.appRoleTitle : ""
        };
    }
});

server.applyMiddleware({ app, path: "/test/graphql" });

// app.get("/time-sheet/health-check", (req, res) => {
app.post("/demo", (req, res) => {
    res.send("Demo Server is up and running !!!");
});

const httpServer = http.createServer(app);
httpServer.listen({ port: PORT }, () => {
    console.log(`Server ready at ${PORT} `);
});

