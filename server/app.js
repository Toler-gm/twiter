import express from "express";
import cors from "cors";
//impor rutes
import testRoutes from "./routes/prueba.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();
//M I D D E L W A R E
app.use(express.json());
app.use(cors());
//R U T A S
app.use(testRoutes);
app.use(usersRoutes);

export default app;
