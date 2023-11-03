// const acordeon = document.querySelector('#accordionFlushExample')

// const btnAdd = document.querySelector('#addProject')

// btnAdd.addEventListener('click', ()=>{
//     const projectnew = document.createElement('div')
//     projectnew.classList.add('accordion-item')
//     projectnew.innerHTML = `
//     <h2 class="accordion-header" id="flush-headingOne">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                 data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//                 Proyecto taller
//               </button>
//             </h2>
//             <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
//               data-bs-parent="#accordionFlushExample">
//               <button class="form-control">proyecto</button>
//               <button class="form-control" disabled>mapa de afinidad</button>
//               <button class="form-control" disabled>brainstorming</button>
//               <button class="form-control" disabled>mapa de inpacto</button>
//             </div>
//     `
//     acordeon.appendChild(projectnew)
// })
import { collection, addDoc} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"; 
import { getDocs, doc} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { db } from "./firebase.js";
// import {  } from '../js/generales/inicio.js'


// console.log(usuario)
const btncreate = document.querySelector('#btncreate')
const modalactiv = document.getElementById('modal')
const btnclose = document.getElementById('close')
const registerProject = document.getElementById('register-form-project');
// window.addEventListener('DOMContentLoaded', async()=>{
//   const querySnapshot = await obtProjects()
//   console.log(querySnapshot)
// })

const showRegisterModal = ()=>{
  modalactiv.classList.toggle('is-active')
}
try{
  btnclose.addEventListener('click',showRegisterModal);
btncreate.addEventListener('click',showRegisterModal);

}catch{

}
function guardar() {
  const nameProject = registerProject['name-project'].value;
  const apiKeyProject = registerProject['apikey-project'].value;
  const descProject = registerProject['description-project'].value;
}


try{
  registerProject.addEventListener('submit',(e)=>{
    e.preventDefault()
  
    const nameProject = registerProject['name-project'].value;
    const apiKeyProject = registerProject['apikey-project'].value;
    const temaProject = registerProject['tema-project'].value;
    const descProject = registerProject['description-project'].value;
  
  
    const guardar = async()=>{
      const docRef = await addDoc(collection(db, "tallerInnovacion"), {
        nameProject: nameProject,
        apiKey: apiKeyProject,
        temaProject: temaProject,
        descProject: descProject,
      });
      console.log("Document written with ID: ", docRef.id);
      window.location.reload()
    }
    
    guardar()
    showRegisterModal()
    // const registerProjects = projectRef.push()
    // console.log(registerProjects)
    // console.log(registerProjects.path.pieces_[1])
    // registerProjects.set({
    //   Uid: registerProject.path.pieces_[1]
    // })
  })
}catch{

}
// -----------------------------------------------
// ---------------------------------------------
// ----------------------------------------------
function printProjects(){
  // console.log(projects)
  // for(let i = 0; i<10;i++){
  //   console.log('project')
  // }
  // projects.forEach((elemento) => {
  //   console.log(elemento);
  //   // Aquí puedes realizar cualquier acción que desees con cada elemento
  // });
}
let keysProjects = []
export async function incrust(listado){
  keysProjects.push(listado)
  console.log(keysProjects)
}
const btnProjectOpen = document.querySelector('.btnOpen1')
const contProjectOpen = document.querySelector('.btn-active')
const openOptions=()=>{
  contProjectOpen.classList.toggle('d-none')
}

try{
  btnProjectOpen.addEventListener('click',openOptions)
}catch{
  
}
