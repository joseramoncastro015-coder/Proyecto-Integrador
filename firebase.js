//======================================================
//              CONFIGURACIÓN DE FIREBASE
//======================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


//======================================================
//              DATOS DE TU PROYECTO
//======================================================

const firebaseConfig = {

    apiKey: "AIzaSyAW4Npn9Xk4S3Erjo3uhkEYb9vf5KZHl80",
    authDomain: "iaev-asesorias.firebaseapp.com",
    projectId: "iaev-asesorias",
    storageBucket: "iaev-asesorias.firebasestorage.app",
    messagingSenderId: "989991637622",
    appId: "1:989991637622:web:ab0abd55145c731c48c557",
    measurementId: "G-9D42TP8B27"

};


//======================================================
//              INICIALIZAR FIREBASE
//======================================================

const app = initializeApp(firebaseConfig);


//======================================================
//              BASES DE DATOS
//======================================================

const db = getFirestore(app);


//======================================================
//              AUTENTICACIÓN
//======================================================

const auth = getAuth(app);


//======================================================
//              EXPORTAR
//======================================================

export {

    db,

    auth

};