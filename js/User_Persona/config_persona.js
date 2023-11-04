// const API_KEY = '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';
const API_URL = "https://api.openai.com/v1/chat/completions";

const output = document.querySelector("#output");

async function getCompletion(prompt) {
   try {

      gptEngine = document.getElementById("gpt-engines");
      maxTokens = parseInt(document.getElementById("gpt-tokens"));
      if (isNaN(maxTokens.value)){
          maxTokens.value = 400;
      } //document.getElementById("max-tokens").value; 
      temperature = parseFloat(document.getElementById("temperatures"));
      if (isNaN(temperature.value)){
          temperature.value = 0.8;
      }
  
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
     Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: gptEngine.value,
      tokens: maxTokens.value,
      messages: [{ role: "user", content: prompt }],
      temperature: temperature.value,
    }),
   })
   
  if (!response.ok) {
      console.log(response);
      prompt_info("Error de comunicación con la API OpenAI:"+response.status+" 401 means that your API Key is incorrect.");
      throw new Error(`HTTP error: ${response.status}`);
  }
   const data = await response.json();
   console.log("Respuesta:", data);
   const resp = data.choices[0].message.content;

   return output.innerHTML= resp


}catch (error) {
   console.error("Error:", error);
 }
 
}


const button = document.querySelector("#generate");
const form = document.getElementById('settings-forms-user');



form.addEventListener('submit',(e)=>{
   e.preventDefault()
   const tema = document.getElementById("gpt-Tema").value;
   console.log(tema)
   const prompt = `Hola actua como un especialista en el framework lean startup y deseo que desarrolles un "User Persona" para un proyecto de inovación siguiendo la estructura que propone el User Persona, para ello quiero que realices un User Persona para el tema: ${tema}\n abarcando la siguiente estructura:\n 
   1. Nombre: Asigna un nombre al User Persona para hacerlo más real y fácil de recordar. \n 
   2. Demografía: Datos demográficos clave, como edad (22 -30 años), género, ubicación (Establece en Peru y especificamente en Trujillo), nivel de educación (Estudiante Universitario a mas), estado civil, etc. \n 
   3. Datos de trabajo: Información sobre su ocupación, título laboral, empresa en la que trabaja, nivel de experiencia, etc.\n 
   4. Desafíos y necesidades: Describe los problemas, desafíos o necesidades específicas que este User Persona enfrenta en relación con tu producto o industria. Esto te ayudará a comprender por qué tu producto podría ser relevante para ellos.\n 
   5. Objetivos y deseos: Los objetivos personales y profesionales que este User Persona busca lograr, y lo que esperan obtener de tu producto.\n
   6. Comportamiento de compra: Cómo y dónde suelen buscar información sobre productos, dónde compran, qué factores influyen en sus decisiones de compra, etc.\n
   7. Comportamiento en línea: Sus hábitos en línea, como redes sociales que utilizan, sitios web que visitan, foros a los que se unen, etc.\n
   8. Frustraciones actuales: Problemas o frustraciones que experimentan en relación con tu industria o problema que tu producto intenta resolver.\n
   9. Expectativas del producto: Lo que esperan de un producto como el tuyo, qué características consideran esenciales y cuáles son opcionales.\n
   10. Cita ficticia: Una cita ficticia que resume una actitud, deseo o necesidad clave de este User Persona. Esto puede ayudar a ilustrar sus pensamientos y sentimientos.\n
   11. Canales de comunicación: Dónde y cómo puedes comunicarte con este User Persona de manera efectiva, como redes sociales, correos electrónicos, conferencias, etc.\n
   12. Notas adicionales: Espacio para cualquier otra información relevante que no haya sido incluida en los puntos anteriores.\n
   Fundamenta cada apartado dependendiendo la tema: ${tema}, la respuesta redactalo en primera personal grupal, ademas solo dame la respuesta, el tema ponlo de titulo y evita poner parrafos al inicio y al final.`
   console.log(prompt)
   getCompletion(prompt)
})
