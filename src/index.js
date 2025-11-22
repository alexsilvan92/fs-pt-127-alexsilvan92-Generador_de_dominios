const pronouns = ["mi", "tu"];
const adjectives = ["peludo", "suave"];
const nouns = ["ciempies", "gatito"];
const tlds = ["com", "es"];

function createDomain(pron, adj, noun, tld) {                         // Función que construye un dominio normal en formato www.palabras.tld
  return `www.${pron}${adj}${noun}.${tld}`;                           // Usa ` y $ para unir todo limpiamente
}

function createHackDomain(pron, adj, noun, tld) {                     // Función que genera un "hack domain" si el noun termina igual que el TLD
  if (!noun.endsWith(tld)) return null;                               // Si el sustantivo no acaba en el TLD, no hay hack → devuelve null
  const base = noun.slice(0, -tld.length);                            // Corta la parte final para reemplazarla por ".tld"
  return `www.${pron}${adj}${base}.${tld}`;                           // Genera el hack domain con ` y $
}

function addListItem(list, text) {                                    // Función que crea un <li> y lo añade a la <ul>
  const li = document.createElement("li");                            // Crea un elemento <li> vacío
  li.className = "list-group-item";                                   // Añade la clase de Bootstrap
  li.textContent = text;                                              // Inserta el texto del dominio generado
  list.appendChild(li);                                               // Añade el <li> a la lista en el DOM
}

function generateDomains() {                                          // Función principal que genera todos los dominios y los imprime en la lista
  const list = document.getElementById("domainList");                 // Selecciona el <ul> donde se añadirán los <li>
  list.innerHTML = "";                                                // Limpia la lista antes de generar nuevos resultados
  
  for (let pron of pronouns) {                                        // Recorre los pronombres
    for (let adj of adjectives) {                                     // Recorre los adjetivos
      for (let noun of nouns) {                                       // Recorre los sustantivos
        for (let tld of tlds) {                                       // Recorre los TLDs
          
          addListItem(list, createDomain(pron, adj, noun, tld));      // Genera y añade un dominio normal
          
          const hack = createHackDomain(pron, adj, noun, tld);        // Genera un hack domain si aplica
          if (hack) addListItem(list, hack);                          // Si existe, lo añade a la lista
        }
      }
    }
  }
}

document                                                              // Accede al documento HTML
  .getElementById("domainGenerateButton")                             // Selecciona el botón
  .addEventListener("click", generateDomains);                        // Cuando se haga click, ejecuta la función generateDomains()