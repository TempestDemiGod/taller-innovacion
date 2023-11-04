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
   const prompt = `Hola actua como un especialista en el framework lean startup y deseo que desarrolles un "La Tecnica de los 6 sombreros para pensar" para un proyecto de inovación siguiendo la estructura que propone "La Tecnica de los 6 sombreros para pensar", para ello quiero que realices "La Tecnica de los 6 sombreros para pensar" para el tema: ${tema}\n abarcando la siguiente estructura:\n 

   1. Sombrero Blanco (Hechos y Datos):\n
        ¿Cuáles son los datos objetivos que respaldan nuestra estrategia o decisión en Lean Startup?\n
        ¿Qué métricas de negocio respaldan nuestro enfoque actual?\n
        ¿Qué evidencia concreta tenemos de que nuestra hipótesis está siendo validada o refutada?\n

    2. Sombrero Rojo (Emociones e Intuición):\n

        ¿Cómo se sienten los miembros del equipo con respecto a la dirección actual del proyecto en Lean Startup?\n
        ¿Cuál es la intuición general sobre el producto o la estrategia que estamos siguiendo?\n
        ¿Qué emociones podrían influir en nuestra toma de decisiones?\n
    
    3. Sombrero Negro (Pensamiento Crítico):\n
    
        ¿Cuáles son los posibles obstáculos o riesgos asociados con nuestro enfoque actual en Lean Startup?\n
        ¿Qué posibles problemas o desafíos podríamos enfrentar en el futuro?\n
        ¿Qué aspectos negativos debemos tener en cuenta al evaluar nuestra estrategia?\n
    
    4. Sombrero Amarillo (Pensamiento Positivo):\n
    
        ¿Cuáles son las oportunidades y beneficios de continuar con nuestra estrategia actual?\n
        ¿Qué aspectos positivos se derivan de los resultados actuales de Lean Startup?\n
        ¿Qué ventajas tenemos en comparación con otras alternativas?\n
    
    5. Sombrero Verde (Creatividad e Ideas):\n
    
        ¿Qué ideas innovadoras podemos generar para mejorar nuestro producto o estrategia?\n
        ¿Cómo podríamos abordar los desafíos actuales de manera diferente y más efectiva?\n
        ¿Qué soluciones creativas podrían tener un impacto positivo en nuestro proyecto?\n
    
    6. Sombrero Azul (Gestión del Proceso):\n
    
        ¿Cómo podemos organizar y estructurar nuestra discusión y toma de decisiones en Lean Startup de manera 	más efectiva?\n
        ¿Cuál es el plan de acción para implementar los cambios o decisiones resultantes de esta discusión?\n
        ¿Cómo garantizamos que todos los miembros del equipo estén alineados con la dirección que estamos 	tomando?\n
        
    Fundamenta cada apartado dependendiendo la tema: ${tema}, la respuesta redactalo en primera personal grupal, ademas solo dame la respuesta, el tema ponlo de titulo y evita poner parrafos al inicio y al final.`
        
   console.log(prompt)
   getCompletion(prompt)
})
