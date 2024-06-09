import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

async function deleteHorario(id: string): Promise<void> {
  const docRef = doc(db, "horarios", id);
  await deleteDoc(docRef);
}

export { deleteHorario };
