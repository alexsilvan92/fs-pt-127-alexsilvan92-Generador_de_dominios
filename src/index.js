const pronoun = ["mi", "tu"];
const adj = ["peludo", "suave"];
const noun = ["suricato", "gatito"];
const domains = [".com", ".es"];

function generateDomains() {
  const list = document.getElementById("domainList");           // Selecciona el <ul> o <ol> donde se añadirán los <li>
  list.innerHTML = "";                                          // Limpia la lista antes de generar nuevos resultados

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domains.length; l++) {
          const domain = "www." + pronoun[i] + adj[j] + noun[k] + domains[l]; // Crea el nombre del dominio concatenando todo:

          const li = document.createElement("li");              // Crea un nuevo elemento <li>
          li.classList.add("list-group-item");                  // Le añade la clase de Bootstrap 'list-group-item'
          li.textContent = domain;                              // Inserta dentro del <li> el texto del dominio generado

          list.appendChild(li);                                 // Mete el <li> dentro de la lista <ul> o <ol>
        }
      }
    }
  }
}

document                                                        // Accede al documento HTML
  .getElementById("domainGenerateButton")                       // Selecciona el botón
  .addEventListener("click", generateDomains);                  // Cuando se haga click, ejecuta la función generateDomains