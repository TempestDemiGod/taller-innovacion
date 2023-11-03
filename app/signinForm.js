import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"



// import { injeccionDatosUsuario } from "../indexGlobal.js"

const signInForm = document.querySelector('#login-form')

// export const setUsuarioGlobal = '' | null


// export const cambioEstado = ( usuarioFirebase)=>{
//     if(usuarioFirebase){
//         setUsuarioGlobal(usuarioFirebase)
//     }else{
//         setUsuarioGlobal(null)
//     }
// }
let emailmain
let passwordmain

function llenarDatos(email,password){
    emailmain = email
    passwordmain = password
}



try{
    signInForm.addEventListener('submit', async e=>{
        e.preventDefault()
        
        const email = signInForm['login-email'].value
        const password = signInForm['login-password'].value    
        llenarDatos(email, password)


        try{
            const credentials = await signInWithEmailAndPassword(auth,email,password)
            
    
            // --------------------------------aqui va lo que tenemos que agregar-----------
            // injeccionDatosUsuario()
            // cambioEstado(email)
            // usuarioGlobal = await credentials.user.email
            
            const modal = bootstrap.Modal.getInstance(document.querySelector('#exampleModal'))
            modal.hide()
            showMessage('welcome '+credentials.user.email,'success')
            
        }catch(error){
            if(error.code === 'auth/wrong-password'){
                showMessage('contraseña incorrecta','error')
            }else if(error.code === 'auth/user-not-found'){
                showMessage('usuario no encontrado','error')
            }else{
                showMessage(error.message,'error')
            }
        }
    
    })
}catch{

}




