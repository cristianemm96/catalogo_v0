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
  deleteDoc
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDn61ETz7wjSZ7k59E6I9Sdt1DkVCeQawI",

  authDomain: "perezapp-b6557.firebaseapp.com",

  projectId: "perezapp-b6557",

  storageBucket: "perezapp-b6557.appspot.com",

  messagingSenderId: "369047901197",

  appId: "1:369047901197:web:40679e294d9756de0df144"

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
    descripcion: producto.descripcion,
    categoria: producto.categoria,
    urlIMG: producto.urlIMG,
  })
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
    categoria: producto.categoria,
    descripcion: producto.descripcion,
    urlIMG: producto.urlIMG,
  });
};

export const eliminarProductoID = async(id)=>{
  await deleteDoc(doc(db, "productos", id));
}

