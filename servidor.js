const servidorWeb = require ("express");
const app= servidorWeb ();
const puerto=3001;
app.get('/', (req, res)=>{
    res.send("Estas consultando la raíz de la API");
});

app.get('/personas', (req, res)=>{
    let persona2={
   
        "nombre": "Juan Cesar",
        "apellido": "perez",
        "estadoCivil": "Casado",
        "edad": 30,
        "tieneHijos": true
      }

      res.send(persona2);
});

app.listen(puerto,() =>{

    console.log("El servidor esta en ejecución en el puerto" + puerto);
});