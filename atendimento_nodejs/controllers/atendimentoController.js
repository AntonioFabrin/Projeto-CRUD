const AtendimentoModel = require("../models/atendimentoModel");
const atendimentoModel = new AtendimentoModel();

class AtendimentoController {
  async buscar(){
    return await atendimentoModel.listar();
  }
  criar(novoAtendimento){
    return atendimentoModel.criar(novoAtendimento);
  }
  atualizar(atendimentoAtualizado, id){
    return atendimentoModel.atualizar(atendimentoAtualizado, id);
  }
  deletar(id){
    return atendimentoModel.delete(id);
  }
}
module.exports = new AtendimentoController();