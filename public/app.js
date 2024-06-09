import { addHorario, getHorarios } from './firebase'; // Importe suas funções CRUD aqui

document.getElementById('horarioForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const descricao = document.getElementById('descricao').value;

  await addHorario({ data, hora, descricao });

  loadHorarios();
});

async function loadHorarios() {
  const horarios = await getHorarios();
  const list = document.getElementById('horariosList');
  list.innerHTML = '';
  horarios.forEach(horario => {
    const li = document.createElement('li');
    li.textContent = `${horario.data} ${horario.hora} - ${horario.descricao}`;
    list.appendChild(li);
  });
}

loadHorarios();
