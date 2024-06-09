"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHorarios = void 0;
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../firebase");
async function getHorarios() {
    const querySnapshot = await (0, firestore_1.getDocs)((0, firestore_1.collection)(firebase_1.db, "horarios"));
    const horarios = [];
    querySnapshot.forEach((doc) => {
        horarios.push({ id: doc.id, ...doc.data() });
    });
    return horarios;
}
exports.getHorarios = getHorarios;
