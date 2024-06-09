import { addHorario } from './services/createHorario';
import { getHorarios } from './services/readHorario';
import { updateHorario } from './services/updateHorario';
import { deleteHorario } from './services/deleteHorario';
import { Horario } from './models';

// Exemplo de uso das funcionalidades CRUD
async function main() {
  console.log("Sistema de Cadastro de Horários");

  // Adicionar um novo horário
  console.log("Adicionando um horário...");
  await addHorario({ data: '2024-06-10', hora: '10:00', descricao: 'Reunião de Projeto' });

  // Listar horários
  console.log("Listando horários...");
  let horarios: Horario[] = await getHorarios();
  console.log("Horários:", horarios);

  // Atualizar um horário (exemplo: atualizar a descrição do primeiro horário)
  if (horarios.length > 0) {
    console.log("Atualizando um horário...");
    const primeiroHorario = horarios[0];
    await updateHorario(primeiroHorario.id, { descricao: 'Reunião de Projeto Atualizada' });

    // Verificando a atualização
    horarios = await getHorarios();
    console.log("Horários após atualização:", horarios);
  }

  // Deletar um horário (exemplo: deletar o primeiro horário)
  if (horarios.length > 0) {
    console.log("Deletando um horário...");
    const primeiroHorario = horarios[0];
    await deleteHorario(primeiroHorario.id);

    // Verificando a deleção
    horarios = await getHorarios();
    console.log("Horários após deleção:", horarios);
  }
}

main().catch(console.error);
