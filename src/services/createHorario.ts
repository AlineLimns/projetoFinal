import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Horario } from "../models";

async function addHorario(horario: Omit<Horario, "id">): Promise<void> {
  try {
    const docRef = await addDoc(collection(db, "horarios"), horario);
    console.log("Horário adicionado com ID: ", docRef.id);
  } catch (e) {
    console.error("Erro ao adicionar horário: ", e);
  }
}

export { addHorario };
