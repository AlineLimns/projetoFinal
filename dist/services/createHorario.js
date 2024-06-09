"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHorario = void 0;
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../firebase");
async function addHorario(horario) {
    try {
        const docRef = await (0, firestore_1.addDoc)((0, firestore_1.collection)(firebase_1.db, "horarios"), horario);
        console.log("Horário adicionado com ID: ", docRef.id);
    }
    catch (e) {
        console.error("Erro ao adicionar horário: ", e);
    }
}
exports.addHorario = addHorario;
