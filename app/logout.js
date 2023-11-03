import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from "./firebase.js"
// import firebase from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
// import { userFinish } from "./apiKayGlob.js"

// import { setUsuarioGlobal } from "./signinForm.js"

const logout = document.querySelector('#logout')

// console.log('correo usuario:  ' +setUsuarioGlobal)

// if(usuarioGlobal != null){
//     console.log('usuario logeado : ' + usuarioGlobal)
//     console.log('----------------------')
//     console.log(usuarioSemi)
//     console.log('-------------------')
// }else{
//     console.log('usuario no se encontrooo --------')
//     console.log('----------------------')
//     console.log(usuarioSemi)
//     console.log('-------------------')
// }



logout.addEventListener('click',async()=>{
    await signOut(auth)
    console.log('logout')
    window.location.href = '../index.html'
})
onAuthStateChanged(auth, async(user) => {
    if(user){
        
    }else{
        window.location.href = '../index.html'
    }
})

// // Obtén el Uid del usuario
// const uid = auth.currentUser.uid;

// // Obtén los datos del usuario
// const user = await firebase.firestore().collection('users').doc(uid).get();

// // Imprime el nombre del usuario
// console.log(user.data().name);
function getParameterFromUrl(paramName) {
    try {
      const urlSearchParams = new URLSearchParams(window.location.search);
      return urlSearchParams.get(paramName);
    } catch (error) {
      return null;
    }
    }

// ---------------------------------------------------------------------------
// Crea un objeto IDBDatabase para la base de datos
// const database = indexedDB.open("firebaseLocalStorageDb");
// // Obtiene una referencia a la colección de datos

// if (typeof database !== "object" || database.constructor !== IDBDatabase) {
//   console.log("El objeto database no es una instancia de IDBDatabase");
// }else{
//   console.log("El objeto database si es una instancia de IDBDatabase");
// }
// if (database.readyState !== "open") {
//   console.log("La base de datos no está abierta");
// }else{
//   console.log("La base de datos si está abierta");
// }


// ------------- primer intento ------------------------
// const indexedDB = window.indexedDB

// const database = indexedDB.open("firebaseLocalStorageDb",1)

// if (typeof database !== "object" || database.constructor !== IDBDatabase) {
//   console.log("El objeto database no es una instancia de IDBDatabase");
// }else{
//   console.log("El objeto database si es una instancia de IDBDatabase");
// }
// if (database.readyState !== "open") {
//   console.log("La base de datos no está abierta");
// }else{
//   console.log("La base de datos si está abierta");
// }
// // ---------------------------------
// database.onerror = function (event){
//   console.log('ocurrio un error con indexedDB')
//   console.log(event)
// }
// // ------------------------------
// database.onsuccess = function(){
//   const db = database.result
//   const transaction = db.transaction("firebaseLocalStorage", "readonly")
//   const store = transaction.objectStore("firebaseLocalStorage")
//   const resultadosDB = store.get(0)
//   console.log('resultado ..  '+ store.get(0))
//   console.log(store.get(0))
//   console.log('---------------------------------------')
//   resultadosDB.onsuccess = function(){
//     console.log('resultadosDB', resultadosDB.result)
//     console.log(resultadosDB.result)
//   }
//   if (typeof db !== "object" || db.constructor !== IDBDatabase) {
//     console.log("El objeto database no es una instancia de IDBDatabase");
//   }else{
//     console.log("El objeto database si es una instancia de IDBDatabase");
//   }
//   if (db.readyState !== "open") {
//     console.log("La base de datos no está abierta");
//   }else{
//     console.log("La base de datos si está abierta");
//   }
//   transaction.oncomplete = function(){
//     db.close()
//   }
// }
// console.log(database);
// ---------- segundo intento ----------------------



// --------------------saadds--------------




