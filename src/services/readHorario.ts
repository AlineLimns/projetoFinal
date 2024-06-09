import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Horario } from "../models";

async function getHorarios(): Promise<Horario[]> {
  const querySnapshot = await getDocs(collection(db, "horarios"));
  const horarios: Horario[] = [];
  querySnapshot.forEach((doc) => {
    horarios.push({ id: doc.id, ...doc.data() } as Horario);
  });
  return horarios;
}

export { getHorarios };
