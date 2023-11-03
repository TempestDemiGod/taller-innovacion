// import {auth} from './firebase.js'
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
// import {pasarDatos} from './signinForm.js'
// // const auth = getAuth();
// import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}
// export function userFinish(){
    
// }

// const usuario = await pasarDatos()

// console.log(usuario)

// import { emailGod, passwordGod } from "./signinForm.js";

// // Utilizar el usuario
// console.log(usuario.email);
// console.log('-----------------------');
// console.log(emailGod);
// console.log('-----------------------');
// console.log(passwordGod);