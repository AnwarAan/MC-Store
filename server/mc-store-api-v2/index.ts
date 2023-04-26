import path, { dirname } from "path";
import { fileURLToPath } from "url";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

//Middleware
import db from "./src/config/db.js";
import errorHandler from "./src/utils/error-handler.js";
import notFound from "./src/utils/not-found.js";

//Router
import userV1Router from "./src/routes/user-v1.js";
import userV2Router from "./src/routes/user-v2.js";
import productRouter from "./src/routes/product.js";

const app: Express = express();
const PORT: number | string = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

db.mongooseConnection();
db.postgresConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(morgan("dev"));
app.use(cors());

//Router
app.use("/v1/user", userV1Router);
app.use("/v2/user", userV2Router);
app.use("/v2/product", productRouter);

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is Running on PORT:${PORT}`);
});
