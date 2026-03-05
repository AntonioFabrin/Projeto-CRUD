const conexao = require("../infraestrutura/conexao");

class AtendimentoModel {
    constructor() {
        this.conexao = conexao;
    }

    listar() {
        const sql = "SELECT * FROM atendimentos";
        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (error, resposta) => {
                if (error) return reject(error);
                resolve(resposta);
            });
        });
    }

    criar(novoAtendimento) {
        const sql = "INSERT INTO atendimentos SET ?";

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, novoAtendimento, (error, resposta) => {
                if (error) return reject(error);
                resolve(resposta);
            });
        });
    }

    atualizar(atendimentoAtualizado, id) {
        const sql = "UPDATE atendimentos SET ? WHERE id = ?";

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, [atendimentoAtualizado, id], (error, resposta) => {
                if (error) return reject(error);
                resolve(resposta);
            });
        });
    }

    delete(id) {
        const sql = "DELETE FROM atendimentos WHERE id = ?";

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, [id], (error, resposta) => {
                if (error) return reject(error);
                resolve(resposta);
            });
        });
    }
}

module.exports = AtendimentoModel;