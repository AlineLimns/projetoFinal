"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHorario = void 0;
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../firebase");
async function deleteHorario(id) {
    const docRef = (0, firestore_1.doc)(firebase_1.db, "horarios", id);
    await (0, firestore_1.deleteDoc)(docRef);
}
exports.deleteHorario = deleteHorario;
