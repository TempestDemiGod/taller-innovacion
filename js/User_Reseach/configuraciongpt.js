
const form = document.getElementById('settings-forms-user');
const gpt = document.getElementById("gpt-engines")
let prompt = document.getElementById('prompt');
    
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const tema = document.getElementById("gpt-Tema").value;
    console.log('submite')
    prompt.innerHTML = `Estoy creando un User Reseach. segun el tema: ${tema}\n Siguiendo el fremawork Lean Startup para realizar su entregable User Reseach del tema ${tema}, el resultado en españo`
})





