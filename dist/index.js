"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createHorario_1 = require("./services/createHorario");
const readHorario_1 = require("./services/readHorario");
const updateHorario_1 = require("./services/updateHorario");
const deleteHorario_1 = require("./services/deleteHorario");
// Exemplo de uso das funcionalidades CRUD
async function main() {
    console.log("Sistema de Cadastro de Horários");
    // Adicionar um novo horário
    console.log("Adicionando um horário...");
    await (0, createHorario_1.addHorario)({ data: '2024-06-10', hora: '10:00', descricao: 'Reunião de Projeto' });
    // Listar horários
    console.log("Listando horários...");
    let horarios = await (0, readHorario_1.getHorarios)();
    console.log("Horários:", horarios);
    // Atualizar um horário (exemplo: atualizar a descrição do primeiro horário)
    if (horarios.length > 0) {
        console.log("Atualizando um horário...");
        const primeiroHorario = horarios[0];
        await (0, updateHorario_1.updateHorario)(primeiroHorario.id, { descricao: 'Reunião de Projeto Atualizada' });
        // Verificando a atualização
        horarios = await (0, readHorario_1.getHorarios)();
        console.log("Horários após atualização:", horarios);
    }
    // Deletar um horário (exemplo: deletar o primeiro horário)
    if (horarios.length > 0) {
        console.log("Deletando um horário...");
        const primeiroHorario = horarios[0];
        await (0, deleteHorario_1.deleteHorario)(primeiroHorario.id);
        // Verificando a deleção
        horarios = await (0, readHorario_1.getHorarios)();
        console.log("Horários após deleção:", horarios);
    }
}
main().catch(console.error);
