// requerir express
const express = require("express")
// requerir path (es un complemento de express y siempre se utiliza path.resolve o join)
const path = require("path");
// guardar sus funcionalidades dentro de una variable
const app = express();

// Usando recursos estáticos.
app.use(express.static("public"));

const port= process.env.PORT||3077;
app.listen(port, () => 
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`));

// get

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/home", (req, res) =>  {
  res.sendFile(path.resolve(__dirname, "./views/home.html"))
}
);

app.get("/register", (req, res) =>  {
  res.sendFile(path.resolve(__dirname, "./views/register.html"))
}
);

app.get("/login", (req, res) =>  {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
  }
);






