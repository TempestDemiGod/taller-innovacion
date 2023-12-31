
function setupPopSizeListener(width, height, element) {
}
setupPopSizeListener(750, 600, document.getElementById("settings-popup"));
  
  function set_theme(theme_name) {
    _jm.set_theme(theme_name);
  }


  function getValueOrDefault(obj, key, defaultValue) {
    if (!obj.hasOwnProperty(key)) {
      return defaultValue;
    }
    return obj[key];
  }

  function openSettingsPopup() {
    document.getElementById("settings-popup").classList.remove("hidden");
  }

  function closeSettingsPopup() {
    console.log("close");
    document.getElementById("settings-popup").classList.add("hidden");
    autoSaveData();
  }
  function recordSettings(data) {
    console.log(data);
    // Obtener los valores de los campos del formulario.
    data["child-node-suggestions"] = document.getElementById(
      "child-node-suggestions"
    ).value;
    data["discuss-node-prompts"] = document.getElementById(
      "discuss-node-prompts"
    ).value;
    data["prefix-prompt"] = document.getElementById("prefix-prompt").value;
    //data["restructure-prompt"] = document.getElementById("restructure-prompt").value;
    data["gpt-engine"] = document.getElementById("gpt-engine").value;
    data["token-usage"] = document.getElementById("token-usage").textContent;
    data["temperature"] = document.getElementById("temperature").value;
    console.log("recordSettings", data);
  }

  function addTokenUsage(tokens) {
      value = document.getElementById("token-usage").textContent;
      if (value == "" || isNaN(parseInt(value))) {
	  count = 0;
      } else {
	  count = parseInt(value);
      }
      console.log("addTokenUsage", value, count, tokens, count+tokens);
      document.getElementById("token-usage").textContent = (count + tokens).toString();
  }
  
  function saveSettings(event) {
    if (event) event.preventDefault();
    closeSettingsPopup();
  }

  // Adjunte el detector de eventos al formulario
  document
    .getElementById("settings-form")
    .addEventListener("submit", saveSettings);

  function load_meta_properties(options) {
    document.getElementById("token-usage").textContent = getValueOrDefault(
	options, "token-usage", (0).toString())
    document.getElementById("discuss-node-prompts").value = getValueOrDefault(
      options,
      "discuss-node-prompts",
      "Estoy creando un brainstorming. Esto es lo que está actualmente visible en el mapa mental:\n" +
        "${hyphenated_list}\n" +
        "Me gustaría hablar con usted sobre el '${text_of_node}' nodo.\n" +
        "Responde con tus pensamientos sobre:\n" +
        "1. Qué significa este nodo, tanto específica generalmente\n" +
        "2. La relevancia de este nodo, cómo contribuye individual y holísticamente\n" +
        "3. Dónde encaja en el mapa mental (consulte la sangría enumerada arriba)\n" +
        "4. ¿Cuáles son algunas cosas a considerar al agregar nodos secundarios, hermanos y principales a su alrededor en el mapa mental?\n" +
        "5. ¿Cuáles son algunas buenas preguntas para hacerle a ChatGPT para comprender mejor este nodo?\n" +
        "6. Y, por último, sólo algunas ideas creativas novedosas en las que pensar en relación con este nodo.\n" +
        "Al abordar estos puntos, recuerde que estamos hablando de la ${text_of_node}' nodo dentro del contexto del mapa mental con guiones en una lista arriba."
    );

    document.getElementById("child-node-suggestions").value = getValueOrDefault(
      options,
      "child-node-suggestions",
      "Estoy creando un mapa mental. Esto es lo que está visible actualmente\n" +
        "${hyphenated_list} , ten en cuenta que estoy trabajando en el framework lean startup\n" +
        "Necesito algunas ideas o sugerencias que ayuden a reolver:${text_of_node}, para agregar al menos dos nodos secundarios a '${text_of_node}'.\n" +
        "Proporcione una lista de sugerencias, en el mismo formato con guiones anterior, que serían hijos ideales de '${text_of_node}', sin líneas vacías. La lista debe priorizarse por relevancia e importancia.       .\n" +
        "Rodee la lista de sugerencias con <embed> </embed>\n" +
        "No haga sugerencias que sean redundantes respecto de las ya enumeradas anteriormente.\n" +
        "No repitas${text_of_node}' en la lista.\n"+
	"Debe haber al menos dos sugerencias para los nodos secundarios inmediatos de '${text_of_node}'.\n"+
	"Cada sugerencia debe complementar, aumentar y armonizar con el mapa mental mencionado anteriormente.\n"
    );
    document.getElementById("prefix-prompt").value = getValueOrDefault(
      options,
      "prefix-prompt",
      "Estoy creando un mapa mental. Esto es lo que está visible actualmente en el mapa mental:\n${hyphenated_list}\nI quisiera discutir el'${cur_topic}' nodo.\n\n"
    );

   /* document.getElementById("restructure-prompt").value = getValueOrDefault(
      options,
      "restructure-prompt",
	"I am creating a mindmap, here's what is currently visible in the mindmap:\n${hyphenated_list}\n"+
	"Restructure the mindmap listed above into a more cohesive, clear, and impactful mindmap.\n"+
	    "The restructured mindmap should have many levels, but no less than 3 children and no more than 6 children per item.\n"+
	    "Use the same hyphenated hierarchical format above, with no empty lines.\n"+
	    "Ensure that the hierarchical hyphenated list is surrounded by <embed></embed>.\n"+
	    "Do not include the top level node.\n"
    );*/

    document.getElementById("gpt-engine").value = getValueOrDefault(
      options,
      "gpt-engine",
      "gpt-3.5-turbo"
    );
    document.getElementById("temperature").value = getValueOrDefault(
      options,
      "temperature",
      "0.5"
    );
  }