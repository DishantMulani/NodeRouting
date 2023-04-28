import express from "express"
import dotenv from 'dotenv'
import userRouter from "./user/userRouter";

const app: express.Application = express();

dotenv.config({
    path: "./.env"
});

const port: string | Number = process.env.PORT || 8080;
const hostName: string | undefined = process.env.HOST;
console.log(port, hostName);

app.get("/", (req, res) => {
    res.json({ msg: "inside server" })
})

app.use("/user", userRouter);

if (port && hostName) {
    app.listen(Number(port), hostName, () => {
        console.log(`server start at http://${hostName}:${port}`);
    })
}

