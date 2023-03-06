// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-qxSxtx6rQM_XiwNNO29vss7rnTeLzWY",
  authDomain: "esteban-d4946.firebaseapp.com",
  projectId: "esteban-d4946",
  storageBucket: "esteban-d4946.appspot.com",
  messagingSenderId: "879868058526",
  appId: "1:879868058526:web:d7f2b1ac584b499d75548f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const obtenerProductos = async () => {
  return await getDocs(collection(db, "productos"));
};

export const guardarProducto = async (producto) => {
  await addDoc(collection(db, "productos"), {
    nombre: producto.nombre,
    precio: parseInt(producto.precio),
    articulo: producto.articulo,
    urlIMG: producto.urlIMG,
  }).then(alert("Agregado"));
};

export const obtenerDatosPorID = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const editarProductoID = async (producto, id) => {
  await setDoc(doc(db, "productos", id), {
    nombre: producto.nombre,
    precio: producto.precio,
    articulo: producto.articulo,
    urlIMG: producto.urlIMG,
  });
};
