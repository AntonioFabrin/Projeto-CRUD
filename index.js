const express = require("express");
const app = express();
const port = 3000;

const router = require("./atendimento_nodejs/routers");
const conexao = require("./atendimento_nodejs/infraestrutura/conexao");
const tabela = require("./atendimento_nodejs/infraestrutura/tabela");

app.use(express.json());
app.use(express.static("atendimento_nodejs/public"));

tabela.init(conexao);

router(app, express);

app.listen(port, (error) => {
    if (error) {
        console.log("Deu errado");
        return;
    }

    console.log("Servidor rodando na porta 3000");
});