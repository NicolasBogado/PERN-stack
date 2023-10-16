import { Router } from "express";
import { actualizarTareas, crearTareas, eliminarTarea, listarTarea, listarTareas } from "../controllers/tareas.controller.js";

const router = Router();

router.get("/tareas", listarTareas );

router.get("/tareas/:id", listarTarea);

router.post("/tareas", crearTareas);

router.put("/tarea/:id", actualizarTareas);

router.delete("/tarea/:id", eliminarTarea);

export default router;