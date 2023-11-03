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

// getCompletion()

const button = document.querySelector("#generate");


button.addEventListener("click", async () => {
  console.log(prompt.value);

  if (!prompt.value) window.alert("Por favor Ingrese un prompt");
  
  const response = await getCompletion(prompt.value);
  console.log(response);
  
});


