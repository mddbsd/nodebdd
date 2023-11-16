const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"admin123456",
    database:"bdd_cursos",
});

app.get("/muestra", (req, res)=>{
    db.query('SELECT * FROM tb_inscripciones',(err, result)=>{
        if(err){
            console.log (err);
        }else{
            res.send(result);
        }
    });
});

app.post("/inserta",(req,res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const curso = req.body.curso;
    const email = req.body.email;
    const telefono = req.body.telefono;
    
    const qInsert = 'INSERT INTO tb_inscripciones (nombre, apellido, curso, email, telefono) VALUES (?, ? ,? , ?, ?)'
    db.query(qInsert, [nombre, apellido, curso, email, telefono],
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send("alumno registrado");
            }
        });
});

app.listen(3131, ()=>{
    console.log("Ejecutando backend en puerto 3131");
});