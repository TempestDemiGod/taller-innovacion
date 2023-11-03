// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import {getFirestore, collection, query, getDocs } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"
import {incrust}from  "./createProject.js"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlrFZ7E7hU-3DPd8ykdDsaCoVu4Q9Ga3Y",
  authDomain: "taller-proyecto-6190e.firebaseapp.com",
  projectId: "taller-proyecto-6190e",
  storageBucket: "taller-proyecto-6190e.appspot.com",
  messagingSenderId: "677848867911",
  appId: "1:677848867911:web:e56ce0c6cc12fdaef9bd62"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore();

const colRef = collection(db, 'tallerInnovacion')
export async function dataKey(key){
  let arrayKey = []
  arrayKey.push(key)
  console.log(arrayKey)
  
  await incrust(arrayKey)
}

const userList = getDocs(colRef)
  .then((snapshot)=>{
    const projectsControl = document.querySelector('#projects-control')
    let projects= []
    snapshot.docs.forEach((doc)=>{
      projects.push({ ...doc.data(), id: doc.id})
      let temProject = { ...doc.data(), id: doc.id}
      const projectnew = document.createElement('div')
      projectnew.classList.add('form-control')
      projectnew.innerHTML = `
            <button class="btn btn-outline-danger btnOpen1 btn form-control">
            ${temProject.nameProject}
            </button>
            <div class=" container btn-active">
              <button class="btn btn-outline-secondary form-control mt-3">
                proyecto
              </button>
              <a href="./mapa_afinidad.html" style="text-decoration: none;"><button class="btn btn-outline-secondary form-control mt-3" >
                mapa de afinidad
              </button></a>
              <a href="./mapa_empatia.html" style="text-decoration: none;"><button class="btn btn-outline-secondary form-control mt-3" >
                mapa de empatia
              </button></a>
              <a href="./brainstorming.html" style="text-decoration: none;"><button class="btn btn-outline-secondary form-control mt-3" >
                brainstorming
              </button></a>
              <a href="./mapa_impacto.html" style="text-decoration: none;"><button class="btn btn-outline-secondary form-control mt-3">
                mapa de impacto
              </button></a>
              <a href="./User_Reseach.html" style="text-decoration: none;"><button class="btn btn-outline-secondary form-control mt-3">
              User Reaseach
              </button></a>
              
              <!-- ----------- -->
            </div>
      
      `;
      console.log(temProject)
      dataKey(temProject.apiKey)
      projectsControl.appendChild(projectnew);
    })
    console.log(projects)
    console.log(projects.length)

  })
  .catch(err=>{
    console.log(err.message)
  })

  
  // projects.forEach((doc)=>{
  //   console.log(doc)
  // })console.log(projects.length)
  // export async function lol (){
  //   console.log(projects.length)
  //   console.log(projects[0])
  // }


  console.log('lafe muchachosss :',userList)

 