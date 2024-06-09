import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { Horario } from "../models";

async function updateHorario(id: string, horario: Partial<Horario>): Promise<void> {
  const docRef = doc(db, "horarios", id);
  await updateDoc(docRef, horario);
}

export { updateHorario };
