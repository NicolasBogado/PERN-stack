import { pool } from "../db.js";

export const listarTareas = (req, res) => res.send("obteniendo tareas");

export const listarTarea = (req, res) => res.send("obteniendo tarea única");

export const crearTareas = async(req, res, next) => {
    const {titulo, descripcion} = req.body;
    res.send('creando tarea');

    try {
        const result = await pool.query('INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2)', [titulo, descripcion]);
        res.json(result.rows[0]);
        console.log(result.rows[0]);
        res.send('creando tarea');
    }catch (error){
        if(error.code === '23505'){
            return res.send('ya esxiste tarea con ese título');
        }
        console.log(error);
        next(error);
    }
}

export const actualizarTareas = (req, res) => res.send("actualizando tarea única");

export const eliminarTarea = (req, res) => res.send("eliminando tarea única");