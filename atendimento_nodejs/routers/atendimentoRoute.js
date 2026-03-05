const { Router } = require("express");
const router = Router();

const atendimentoController = require("../controllers/atendimentoController");

router.get("/atendimentos", (req, res) => {
    atendimentoController.buscar()
        .then(atendimentos => res.status(200).json(atendimentos))
        .catch(error => res.status(400).json(error.message));
});

router.post("/atendimentos", (req, res) => {
    const novoAtendimento = req.body;

    atendimentoController.criar(novoAtendimento)
        .then(atendimentoCriado => res.status(201).json(atendimentoCriado))
        .catch(error => res.status(400).json(error.message));
});

router.put("/atendimento/:id", (req, res) => {
    const atendimentoAtualizado = req.body;
    const { id } = req.params;

    if (!atendimentoAtualizado || Object.keys(atendimentoAtualizado).length === 0) {
        return res.status(400).json("Body vazio");
    }

    atendimentoController.atualizar(atendimentoAtualizado, id)
        .then(resultado => res.status(200).json(resultado))
        .catch(error => res.status(400).json(error.message));
});

router.delete("/atendimento/:id", (req, res) => {
    const { id } = req.params;
    atendimentoController.deletar(id)
        .then(resultado => res.status(200).json(resultado))
        .catch(error => res.status(400).json(error.message));
});

module.exports = router;