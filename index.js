import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

import tarifarioRoutes from "./routes/tarifario.routes.js";
import agentesRoutes from "./routes/agente.routes.js";
import multasRoutes from "./routes/multas.routes.js";

import connectDB from "./config/db.js";

const port = process.env.PORT || 5500;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/tarifario", tarifarioRoutes);
app.use("/api/agentes", agentesRoutes);
app.use("/api/multas", multasRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Servidor corriendo en el puerto: ${port}`));
